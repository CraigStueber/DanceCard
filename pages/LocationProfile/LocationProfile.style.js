import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: { flex: 1 },
  profileContainer: {
    flexDirection: "row",
  },
  locationLogoImg: {},
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
    flex: 1,
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
  activitiesDropDown: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  activitiesHeader: {
    fontSize: 30,
    textAlign: "left",
  },
});
