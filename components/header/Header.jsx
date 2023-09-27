import { TouchableOpacity, View, Image, Text } from "react-native";
import { s } from "./Header.styles";
import danceCard from "../../assets/danceCardLogo.png";
import { useNavigation } from "@react-navigation/native";

export function Header({}) {
  const nav = useNavigation();
  return (
    <View style={s.container}>
      <TouchableOpacity
        style={s.logoContainer}
        onPress={() => nav.navigate("Home")}
      >
        <Text style={s.nameLogo}>Dance Card</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={s.profileImgContainer}
        onPress={() => nav.navigate("Profile")}
      >
        <Image
          style={s.profileImg}
          source={{ uri: "https://i.pravatar.cc/600" }}
        />
      </TouchableOpacity>
    </View>
  );
}
