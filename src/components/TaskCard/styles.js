import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    width: "90%",
    height: 77,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#FEFEFE",
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
    borderRadius: 10,
    marginVertical: 6,
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  typeActive: {
    width: 50,
    height: 50,
  },
  cardTitle: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  cardRight: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  cardDate: {
    color: "#707070",
    fontSize: 16,
  },
  cardDate: {
    color: "#EE6B26",
    fontWeight: "bold",
    fontSize: 16,
  },
  done: {
    opacity: 0.5,
  },
});

export default styles;
