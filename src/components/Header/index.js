import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

//ICONS
import logo from "../../assets/logo.png";
import bell from "../../assets/bell.png";
import qrcode from "../../assets/qrcode.png";
import back from "../../assets/back.png";

export default function Header({
  showNotification,
  showBack,
  pressNotification,
  late,
  navigation,
}) {
  function Back() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.header}>
      {showBack ? (
        <TouchableOpacity style={styles.lefIcon} onPress={Back}>
          <Image source={back} style={styles.lefIconImage} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.lefIcon}>
          <Image source={qrcode} style={styles.lefIconImage} />
        </TouchableOpacity>
      )}
      <Image source={logo} style={styles.logo} />

      {showNotification && !showBack && late > 0 && (
        <TouchableOpacity
          style={styles.notification}
          onPress={pressNotification}
        >
          <Image source={bell} style={styles.notificationImage} />

          <View style={styles.circle}>
            <Text style={styles.notificationText}>{late}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
