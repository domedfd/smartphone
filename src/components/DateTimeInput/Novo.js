import React, { useState, useEffect } from "react";
import { View, Button, Platform, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";

const Novo = ({ type, save, dt, hour }) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("N");
  const [show, setShow] = useState(false);
  const [dnew, setDnew] = useState(true);
  const [dts, setDts] = useState(true);
  const [hours, setHours] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setMode(currentMode);
  };

  const showLabel = () => {
    if (mode === "N") {
      console.log(" ");
      console.log("isso:");
      if (dnew && type == "date" && dt) {
        // setDnew(false);

        console.log("1");
        return dt;
      } else if (dnew && hour) {
        // setDnew(false);
        return hour;
      }

      return `Selecione la ${type == "date" ? "fecha" : "hora"}`;
    }
    if (show) {
      if (type == "date") {
        return "Aceptar";
      } else {
        return "Aceptar";
      }
    } else {
      if (type == "date") {
        save(format(date, "yyyy-MM-dd"));
        return format(date, "dd/MM/yyyy");
      } else {
        save(format(date, "HH:mm:ss"));
        return format(date, "HH:mm");
      }
    }
  };

  const selectDataOrHour = () => {
    selectShow();
    if (type === "date") {
      showMode("date");
    } else {
      showMode("time");
    }
  };

  const selectShow = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    if (dt) {
      setDts(dt);
    }
    if (hour) {
      setHours(hour);
    }
  }, [dts, hours]);

  return (
    <View>
      <View>
        <Button onPress={selectDataOrHour} title={showLabel()} />
      </View>

      <TouchableOpacity>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
            minimumDate={type == "date" && new Date()}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Novo;
