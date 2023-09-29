import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  referenceImg: {
    height: 200,
    width: 200,
    marginHorizontal: 10,
    marginVertical: 10,
    alignSelf: "flex-end",
    borderRadius: 100,
  },
});
