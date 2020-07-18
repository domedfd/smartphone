import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Switch,
  Platform,
  Alert,
  Button,
} from "react-native";
import api from "../../services/api";
import * as Network from "expo-network";
import Reactotron from "reactotron-react-native";
import { format } from "date-fns";

//COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Novo from "../../components/DateTimeInput/Novo";

import typeIcons from "../../utils/typeIcons";
import styles from "./styles";

export default function Task({ navigation, isnew }) {
  const [id, setId] = useState();
  const [macaddress, setMacaddress] = useState();
  const [type, setType] = useState();
  const [title, setTitle] = useState();
  const [description, setDescripton] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const [done, setDone] = useState(false);
  const [load, setLoad] = useState(true);
  // const [date, setDate] = useState(new Date(1598051730000));

  const [datetime2, setDateTime2] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || datetime2;
    setShow(Platform.OS === "ios");
    setDateTime2(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  function verificar(valor) {
    // console.log(datetime2);
  }
  verificar();

  async function New() {
    console.log(type);
    console.log(title);
    console.log(description);
    console.log(date);
    console.log(hour);
    Alert.alert(`${date}T${hour}.000`);
    if (!macaddress)
      return Alert.alert(
        "Tu dispositivo no esta informando el macaddres para validar el contenido."
      );
    else if (!type) return Alert.alert("Selecione un icone para tu tarea.");
    else if (!title) return Alert.alert("Tienes que poner un titulo");
    else if (!description)
      return Alert.alert("Tienes que poner una descripcion");
    else if (!date) return Alert.alert("Tienes que poner una fecha");
    else if (!hour) return Alert.alert("Tienes que poner un hora");

    await api
      .post("/task", {
        macaddress,
        type,
        title,
        description,
        when: `${date}T${hour}.000`,
        done,
      })
      .then((response) => navigation.navigate("Home"))
      .catch((error) => {
        console.log(error);
        Alert.alert(error);
      });
  }
  async function LoadTask() {
    await api.get(`/task/${id}`).then((response) => {
      setLoad(true);
      setType(response.data.type);
      setTitle(response.data.title);
      setDescripton(response.data.description);
      setDate(response.data.when);
      setHour(response.data.when);
      // setDate(format(new DataCue(response.data.when), "dd/MM/yyyy"));
      // setHour(format(new Data(response.data.when), "HH:mm"));
    });
  }
  async function getMacaddress() {
    await Network.getMacAddressAsync().then((mac) => {
      setMacaddress(mac);
      setLoad(false);
    });
  }

  Reactotron.display({
    name: `Task - Hora`,
    preview: `hora: ${hour}`, // preview just the lat/lon
    value: hour,
  });

  useEffect(() => {
    getMacaddress();
    if (navigation.state.params) {
      setId(navigation.state.params.idtask);
      LoadTask().then(() => {
        setLoad(false);
      });
    }
  }, [macaddress, date, hour]);

  return [
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Header showBack={true} navigation={navigation} />
      <ScrollView style={{ width: "100%" }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
          }}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          style={{ marginVertical: 10 }}
        >
          {typeIcons.map(
            (icon, index) =>
              icon && (
                <TouchableOpacity
                  key={icon}
                  onPress={() => {
                    setType(index);
                  }}
                >
                  <Image
                    source={icon}
                    style={[
                      styles.imageIcon,
                      type && type !== index && styles.typeIconInactive,
                    ]}
                  />
                </TouchableOpacity>
              )
          )}
        </ScrollView>
        <Text style={styles.label}>Titulo</Text>
        <TextInput
          style={styles.input}
          maxLength={30}
          placeholder="Recuerdame en hacer..."
          onChangeText={(text) => setTitle(text)}
          value={title}
        />
        <Text style={styles.label}>Detalles</Text>
        <TextInput
          style={styles.inputArea}
          maxLength={200}
          multiline={true}
          placeholder="Detalles de la activida que tengo que acordarme..."
          onChangeText={(text) => setDescripton(text)}
          value={description}
        />

        {/* <DateTimeInput type={"date"} save={setDate} date={date} id={id} /> */}
        {/* <DateTimeInput type={"hour"} save={setHour} hour={hour} id={id} /> */}

        <Novo
          type={"date"}
          save={setDate}
          dt={date ? format(new Date(date), "dd/MM/yyy") : date}
        />
        <Novo
          type={"hour"}
          save={setHour}
          hour={hour ? format(new Date(hour), "HH:mm") : hour}
        />

        {id && (
          <View style={styles.inLine}>
            <View style={styles.inputInLine}>
              <Switch
                onValueChange={() => setDone(!done)}
                value={done}
                thumbColor={done ? "#00761b" : "#EE6B26"}
              />
              <Text style={styles.switchLabel}>Concluido</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.removeLabel}>ELIMINAR</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>,
    <Footer icon={"save"} onPress={New} />,
  ];
}
