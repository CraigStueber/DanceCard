import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: { flex: 1, paddingVertical: 10 },
  profileContainer: {
    flexDirection: "row",
  },
  locationLogoImg: {
    width: 200,
    height: 200,
  },
  locationTextContainer: {
    padding: 20,
  },
  locationName: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
  },
  locationInfo: {
    fontSize: 12,
  },
  hoursContainer: {
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  hoursHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
  daysContainer: {
    backgroundColor: "#bedee0",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  dayObject: {
    padding: 10,
    alignItems: "center",
  },
  day: {
    color: "#28143e",
    fontSize: 12,
    fontWeight: "bold",
  },
  time: {
    color: "#28143e",
    fontSize: 12,
  },
  descriptionContainer: { paddingHorizontal: 10, paddingBottom: 2 },
  descriptionHeadline: { fontSize: 20, fontWeight: "bold", marginBottom: 5 },
  descriptionText: {},
  activitiesDropDown: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#28143E",
    paddingLeft: 20,
    paddingVertical: 10,
    alignItems: "center",
    paddingRight: 5,
  },
  activitiesHeader: {
    fontSize: 30,
    textAlign: "left",
    color: "white",
  },
});
