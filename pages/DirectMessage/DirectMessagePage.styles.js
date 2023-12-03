import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: { flex: 1 },
  messagecontainer: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  profileContainer: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  icon: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  textView: {
    paddingHorizontal: 10,
    flexDirection: "column",
    paddingVertical: 10,
    color: "#593a7b",

    flex: 1,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#593a7b",
    textAlign: "center",
  },
  theirText: {
    textAlign: "left",
    paddingRight: 30,
  },
  mytext: {
    textAlign: "right",
    paddingLeft: 30,
    marginVertical: 20,
  },
  textInputView: {
    flexDirection: "row",
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    height: 40,
    backgroundColor: "white",
    width: "85%",
  },
  btnSend: {
    width: "15%",
    backgroundColor: "#593a7b",
    justifyContent: "center",
  },
  btnText: { color: "white", textAlign: "center" },
});
