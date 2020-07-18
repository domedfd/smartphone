import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    backgroundColor: "#20295F",
    borderBottomWidth: 5,
    borderBottomColor: "#EE6B26",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    top: 12,
    width: 100,
    height: 30,
  },
  notification: {
    position: "absolute",
    right: 20,
    top: 37,
  },
  notificationImage: {
    width: 25,
    height: 30,
  },
  notificationText: {
    fontWeight: "bold",
    color: "#EE6B26",
  },
  circle: {
    width: 18,
    backgroundColor: "#FFF",
    borderRadius: 50,
    alignItems: "center",
    position: "absolute",
    left: 13,
    right: 13,
  },
  lefIcon: {
    position: "absolute",
    left: 20,
    right: 20,
    top: 37,
  },
  lefIconImage: {
    width: 30,
    height: 30,
  },
});

export default styles;
