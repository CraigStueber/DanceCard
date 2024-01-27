import { TouchableOpacity, View, Image, Text } from "react-native";
import { s } from "./Header.styles";
import danceCard from "../../assets/dance_card-02.png";
import { useNavigation } from "@react-navigation/native";

export function Header({}) {
  const nav = useNavigation();
  return (
    <View style={s.container}>
      <TouchableOpacity
        style={s.logoContainer}
        onPress={() => nav.navigate("Home")}
      >
        <Text style={s.nameLogo}>DanceCard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={s.profileImgContainer}
        onPress={() => nav.navigate("UserProfile")}
      >
        <Image
          style={s.profileImg}
          source={{
            uri: "https://inoxtkubxynhbuslvgyv.supabase.co/storage/v1/object/public/avatar/craigAvatar.jpg",
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
