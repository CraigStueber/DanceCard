import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
    backgroundColor: "#28143E",
    paddingVertical: 10,
    alignItems: "center",
  },
  nameLogo: {
    fontSize: 25,
    justifyContent: "flex-start",
    color: "white",
    fontWeight: "900",
  },
  profileImg: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignSelf: "flex-end",
  },
  profileImgContainer: { flex: 1 },
  logoContainer: { flex: 1 },
});
