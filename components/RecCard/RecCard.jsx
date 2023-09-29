import { View, Image, Text, TouchableOpacity } from "react-native";
import { s } from "./RecCard.styles";
import { useNavigation } from "@react-navigation/native";

import D20 from "../../assets/D20.png";

export function RecCard({}) {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      style={s.container}
      onPress={() => nav.navigate("EventInfo")}
    >
      <Image source={D20} style={s.activityImage} />
      <View style={s.textContainer}>
        <Text style={s.eventTitle}>Dungeon & Dragons</Text>
        <View style={s.subTitleContainer}>
          <Text style={s.date}>March 30</Text>
          <Text style={s.time}>12:00pm</Text>
        </View>
        <View style={s.locationContainer}>
          <Text style={s.location}>One Eyed Jacques</Text>
          <Text style={s.players}>3/6 players</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
