import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  Text,
  Alert,
  Image,
  TouchableOpacity,
  DatePickerIOS,
} from "react-native";
import { format } from "date-fns";
import Reactotron from "reactotron-react-native";

import iconCalendar from "../../assets/calendar.png";
import iconClock from "../../assets/clock.png";
import styles from "./styles";

export default function DateTimeInput({ type, save, date, hour, id }) {
  const [datetime, setDateTime] = useState(new Date());
  const [dateTimeTrue, setDataTimeTrue] = useState(false);
  const [visibleView, setVisibleView] = useState(false);
  const [content, setContent] = useState();

  useEffect(() => {}, [content, datetime]);

  function clickButton() {
    if (date) {
      if (dateTimeTrue) {
        const dates = "Fecha: " + format(new Date(datetime), "dd/MM/yyyy");
        return dates;
      } else {
        const dates = "Fecha: " + format(new Date(date), "dd/MM/yyyy");
        return dates;
      }
    } else if (hour) {
      const hours = "Hora: " + format(new Date(hour), "HH:mm");
      return hours;
    } else {
      // IsNew
      if (type === "date") {
        if ((id === undefined) & !dateTimeTrue) {
          return "Selecione la fecha";
        } else {
          const date = "Fecha: " + format(new Date(datetime), "dd/MM/yyyy");
          save(format(new Date(datetime), "yyyy-MM-dd"));
          return date;
        }
      } else {
        if ((id === undefined) & !dateTimeTrue) {
          return "Selecione la hora";
        } else {
          const hour = "Hora: " + format(new Date(datetime), "HH:mm");
          save(datetime);
          return hour;
        }
      }
    }
  }

  // type === "date"
  //   ? save(format(new Date(datetime), "yyyy-MM-dd"))
  //   : save(format(new Date(datetime), "HH:mm:ss"));

  function GetDataTime() {
    setVisibleView(true);
    setDataTimeTrue(true);
  }
  function SaveDateTime() {
    setVisibleView(false);
  }

  Reactotron.display({
    name: `TimeandDAte`,
    preview: `hora: ${datetime}`, // preview just the lat/lon
    value: datetime,
  });

  return (
    <View style={{ marginTop: 5 }}>
      <Button
        title={clickButton()}
        color={dateTimeTrue ? "#EE6B26" : "#707070"}
        onPress={GetDataTime}
      />

      {visibleView && (
        <View style={styles.Ghost}>
          <View style={styles.DateTimeIOS}>
            {/* ICON */}
            <Image
              style={styles.iconTextInputIOS}
              source={type === "date" ? iconCalendar : iconClock}
            />

            {/* CALENDAR AND CLOCK */}
            <DatePickerIOS
              date={datetime}
              mode={type}
              minimumDate={type === "date" && new Date()}
              onDateChange={setDateTime}
            />

            {/* BUTTON SAVE DATE OR HOUR */}
            <TouchableOpacity
              style={styles.DateTimeIOSViewText}
              onPress={SaveDateTime}
            >
              <Text style={styles.DateTimeIOSText}>
                Guardar {type === "date" ? "fecha" : "hora"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
