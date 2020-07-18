import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  filter: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    height: 35,
    alignItems: "center",
  },
  filterTextActived: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#EE6B26",
  },
  filterTextInative: {
    color: "#20295F",
    fontWeight: "bold",
    fontSize: 18,
    opacity: 0.5,
  },
  content: {
    width: "100%",
    marginTop: 20,
    marginBottom: 80,
  },
  title: {
    width: "100%",
    height: 15,
    borderBottomWidth: 1,
    borderColor: "#20295F",
    alignItems: "center",
  },
  titleText: {
    color: "#20295F",
    fontSize: 14,
    position: "relative",
    top: 6,
    backgroundColor: "#FFF",
    paddingHorizontal: 15,
  },
});

export default styles;
