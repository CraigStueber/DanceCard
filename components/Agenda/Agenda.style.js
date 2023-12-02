import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 30,
    backgroundColor: "#ece4d6",
    justifyContent: "center",
    alignContent: "center",
    borderWidth: 2,
    borderColor: "black",
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
  },
  month: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#593a7b",
  },
  day: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#593a7b",
  },
  time: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#593a7b",
  },
  agendaRightContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
