import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    padding: 10,
    width: "95%",
    borderBottomWidth: 1,
    borderBottomColor: "#EE6B26",
    marginHorizontal: 10,
  },
  inputIOS: {
    fontSize: 16,
    padding: 10,
    width: "95%",
    borderBottomWidth: 1,
    borderBottomColor: "#EE6B26",
    marginHorizontal: 10,
  },
  iconTextInput: {
    position: "absolute",
    left: "90%",
    top: 15,
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  iconTextInputIOS: {
    position: "absolute",
    left: "89%",
    top: "20%",
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  DateTimeIOS: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    position: "relative",
    justifyContent: "center",
    bottom: 80,
  },
  DateTimeIOSText: {
    fontSize: 18,
    color: "#EE6B26",
    fontWeight: "bold",
  },
  DateTimeIOSViewText: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    marginTop: 30,
  },
  Ghost: {
    position: "relative",
    height: "100%",
    width: "100%",
    backgroundColor: "#FFF",
    top: -300,
  },
});

export default styles;
