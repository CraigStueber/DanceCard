import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flexDirection: "row",
    paddingVertical: 20,
  },
  infoView: { paddingHorizontal: 20, paddingVertical: 20 },
  iconImage: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
  },
  descriptionContainer: { padding: 20 },
  descriptionTitle: { fontSize: 20, fontWeight: "bold" },
  attendiesBtn: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-between",
    backgroundColor: "#28143E",
  },
  attendiesTitle: {
    fontSize: 30,
    color: "white",
  },
  icon: {},
  usersContainer: {
    flexDirection: "row",
  },
  userLine: {
    width: "100%",
    borderBottomColor: "#28143E",
    borderBottomWidth: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  userSubViews: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  userTxt: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    alignSelf: "center",
  },
});
