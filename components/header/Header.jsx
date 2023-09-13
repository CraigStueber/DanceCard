import { TouchableOpacity, View, Image, Text } from "react-native";
import { s } from "./Header.styles";
import danceCard from "../../assets/dance_card-02.png";

export function Header({}) {
  return (
    <View style={s.container}>
      <TouchableOpacity style={s.logoContainer}>
        <Image style={s.logo} source={danceCard}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={s.profileImgContainer}>
        <Image
          style={s.profileImg}
          source={{ uri: "https://i.pravatar.cc/600" }}
        />
      </TouchableOpacity>
    </View>
  );
}
