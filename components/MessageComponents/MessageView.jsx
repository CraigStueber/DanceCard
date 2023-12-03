import { s } from "./MessageView.styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function MessageView({}) {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      style={s.container}
      onPress={() => nav.navigate("DirectMessagePage")}
    >
      <Image style={s.icon} source={require("../../assets/profile1.jpg")} />
      <View style={s.textView}>
        <Text style={s.name}>Nota FakeName</Text>
        <Text style={s.text}>
          short message snippit. Yadda yadda yadda typing random bullshit here
        </Text>
      </View>
    </TouchableOpacity>
  );
}
