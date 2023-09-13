import { View, Image, Text } from "react-native";
import { s } from "./RecCard.styles";

import D20 from "../../assets/D20.png";

export function RecCard({}) {
  return (
    <View style={s.container}>
      <Image source={D20} style={s.activityImage} />
      <View style={s.textContainer}>
        <Text style={s.eventTitle}>Event Title</Text>
        <View style={s.subTitleContainer}>
          <Text style={s.date}>March 30</Text>
          <Text style={s.time}>12:00pm</Text>
        </View>
        <View style={s.locationContainer}>
          <Text style={s.location}>Battlegrounds</Text>
          <Text style={s.players}>3/6 players</Text>
        </View>
      </View>
    </View>
  );
}
