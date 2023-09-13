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
  logo: {
    width: 100,
    height: 100,
    justifyContent: "flex-start",
  },
  profileImg: {
    height: 80,
    width: 80,
    borderRadius: 20,
    alignSelf: "flex-end",
  },
  profileImgContainer: { flex: 1 },
  logoContainer: { flex: 1 },
});
