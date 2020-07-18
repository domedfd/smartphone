import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 80,
  },
  imageIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 3,
  },
  label: {
    color: "#707070",
    fontSize: 16,
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 2,
  },
  input: {
    fontSize: 16,
    padding: 10,
    width: "95%",
    borderBottomWidth: 1,
    borderBottomColor: "#EE6B26",
    marginHorizontal: 10,
  },
  inputArea: {
    fontSize: 16,
    padding: 10,
    width: "95%",
    borderWidth: 1,
    borderColor: "#EE6B26",
    marginHorizontal: 10,
    borderRadius: 10,
    height: 100,
    textAlignVertical: "top",
  },
  inLine: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  inputInLine: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  switchLabel: {
    fontWeight: "bold",
    color: "#EE6B26",
    textTransform: "uppercase",
    fontSize: 16,
  },
  removeLabel: {
    fontWeight: "bold",
    color: "#20295F",
    textTransform: "uppercase",
    fontSize: 16,
  },
  typeIconInactive: {
    opacity: 0.5,
  },
});

export default styles;
