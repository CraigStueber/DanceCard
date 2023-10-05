import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  profileContainer: {
    flex: 1,
    flexDirection: "row",
  },
  profileImg: {
    height: 200,
    width: 200,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  profileInfoContainer: { justifyContent: "center" },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
  },

  discriptionContainer: {
    flexDirection: "column",
    flex: 1,
    paddingHorizontal: 10,
  },
  descriptionHeader: { fontSize: 20, fontWeight: "bold" },
  descriptionText: { fontSize: 12 },
  referenceImg: {
    width: 225,
    height: 225,
    flex: 2,
  },
  secondHalf: {
    flex: 1,
    flexDirection: "row",
  },
  referenceImg: {
    width: 200,
    height: 200,
    marginHorizontal: 10,
    marginVertical: 10,
    alignSelf: "flex-end",
    borderRadius: 100,
  },
  activities: {
    width: 200,
    backgroundColor: "#c4c5de",
    borderRadius: 10,
  },
  actHeader: {
    backgroundColor: "#593a7b",
    color: "white",
    paddingVertical: 10,
    textAlign: "center",
  },
  activity: {
    fontSize: 15,
    paddingHorizontal: 15,
    paddingVertical: 3,
  },
});
