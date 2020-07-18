import React, { useState } from "react";
import { Platform } from "react-native";
import DateTimeInputAndroid from "./index.adroid";
import DateTimeInputIOS from "./index.ios";

export default function Index({ type, save, date, hour, id }) {
  return Platform.OS === "android" ? (
    <DateTimeInputAndroid type={type} save={save} date={date} hour={hour} />
  ) : (
    <DateTimeInputIOS type={type} save={save} date={date} hour={hour} id={id} />
  );
}
