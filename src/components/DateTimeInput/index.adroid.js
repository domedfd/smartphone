import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Image,
  TextInput,
  DatePickerAndroid,
  TimePickerAndroid,
  Platform,
} from "react-native";
import { format } from "date-fns";

import styles from "./styles";
import iconCalendar from "../../assets/calendar.png";
import iconClock from "../../assets/clock.png";

export default function DateTimeInput({ type, save, date, hour }) {
  const [datetime, setDateTime] = useState();

  useEffect(() => {
    if (type === "date" && date) {
      setDateTime(format(new Date(date), "dd/MM/yyyy"));
    }

    if (type === "hour" && hour) {
    }
  });

  async function selectDataOrHour() {
    if (type === "date") {
      const { action, year, month, day } = await DatePickerAndroid.open({
        mode: "calendar",
      });
      if (action === DatePickerAndroid.dateSetAction)
        setDateTime(`${day}/${month}/${year}`);
      save(format(new Date(year, month, day), "yyyy-MM-dd"));
    } else {
      const { action, hour, minute } = await TimePickerAndroid.open({
        is24Hour: true,
      });
      if (action !== TimePickerAndroid.dismissedAction)
        setDateTime(`${hour}:${minute}`);
      save(format(new Date("2020", "12", "12", hour, minute), "HH:mm:ss"));
    }
  }
  return (
    <TouchableOpacity onPress={selectDataOrHour}>
      <TextInput
        style={styles.input}
        placeholder={`Clique aca para definir la ${
          type === "date" ? "fecha" : "hora"
        }`}
        editable={false}
        value={datetime}
      />
      <Image
        style={styles.iconTextInput}
        source={type === "date" ? iconCalendar : iconClock}
      />
    </TouchableOpacity>
  );
}
