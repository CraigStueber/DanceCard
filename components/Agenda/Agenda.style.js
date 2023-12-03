import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",

    backgroundColor: "#ece4d6",
    justifyContent: "center",
    alignContent: "center",
    borderWidth: 2,
    borderColor: "#593a7b",
    borderRadius: 10,
    marginVertical: 5,
  },
  icon: {
    height: 90,
    width: 90,
    alignSelf: "center",
  },
  agendaLeftContainer: {
    flex: 1,
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#593a7b",
  },
  month: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  day: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  time: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  agendaRightContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    color: "#593a7b",
    fontWeight: "bold",
  },
});
