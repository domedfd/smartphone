import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import * as Network from "expo-network";

import style from "./styles";

//COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TaskCard from "../../components/TaskCard";

import api from "../../services/api";

import styles from "./styles";

export default function Home({ navigation }) {
  const [macaddress, setMacaddress] = useState();
  const [filter, setFilter] = useState("today");
  const [tasks, setTasks] = useState([]);
  const [load, setLoad] = useState(false);
  const [lateCount, setLateCount] = useState();
  const [isNew, setIsNew] = useState(true);

  async function LoadTask() {
    setLoad(true);
    await api.get(`/task/filter/${filter}/${macaddress}`).then((response) => {
      setTasks(response.data);
      setLoad(false);
    });
  }
  async function LateVerify() {
    await api.get(`/task/filter/late/${macaddress}`).then((response) => {
      setLateCount(response.data.length);
    });
  }
  async function Notification() {
    setFilter("late");
  }
  async function getMacaddress() {
    await Network.getMacAddressAsync().then((mac) => {
      setMacaddress(mac);
    });
  }

  function New() {
    navigation.navigate("Task");
  }
  function Show(id) {
    navigation.navigate("Task", { idtask: id });
  }

  useEffect(() => {
    getMacaddress();
    LoadTask();
    LateVerify();
  }, [filter, macaddress]);

  return (
    <View style={style.container}>
      <Header
        showNotification={true}
        showBack={false}
        pressNotification={Notification}
        late={lateCount}
      />
      <View style={styles.filter}>
        <TouchableOpacity onPress={() => setFilter("all")}>
          <Text
            style={
              filter === "all"
                ? styles.filterTextActived
                : styles.filterTextInative
            }
          >
            Todos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter("today")}>
          <Text
            style={
              filter === "today"
                ? styles.filterTextActived
                : styles.filterTextInative
            }
          >
            Hoy
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter("week")}>
          <Text
            style={
              filter === "week"
                ? styles.filterTextActived
                : styles.filterTextInative
            }
          >
            Semana
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter("month")}>
          <Text
            style={
              filter === "month"
                ? styles.filterTextActived
                : styles.filterTextInative
            }
          >
            Mes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter("year")}>
          <Text
            style={
              filter === "year"
                ? styles.filterTextActived
                : styles.filterTextInative
            }
          >
            Año
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          TAREAS{filter === "late" && " ATRASADAS"}
        </Text>
      </View>

      {/* TARGET */}
      <ScrollView
        style={styles.content}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {load ? (
          <ActivityIndicator color="#EE6B26" />
        ) : (
          tasks.map((t) => (
            <TaskCard
              done={t.done}
              title={t.title}
              when={t.when}
              type={t.type}
              onPress={() => Show(t._id)}
            />
          ))
        )}
      </ScrollView>

      <Footer icon={"add"} onPress={New} />
    </View>
  );
}
