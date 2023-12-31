import { s } from "./Agenda.style";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
export function Agenda({}) {
  const nav = useNavigation();
  const Bike = require("../../assets/icons/DCbike.png");
  const d20 = require("../../assets/icons/DCd20.png");
  const dumbell = require("../../assets/icons/DCdumbell.png");
  const AoS = require("../../assets/icons/DCdice.png");
  return (
    <TouchableOpacity
      style={s.container}
      onPress={() => nav.navigate("EventInfo")}
    >
      <View style={s.agendaLeftContainer}>
        <Text style={s.month}>Dec</Text>
        <Text style={s.day}>12</Text>
        <Text style={s.time}>9:00 AM</Text>
      </View>
      <View style={s.agendaRightContainer}>
        <Text style={s.title}>10mile Bike Ride</Text>

        <Image style={s.icon} source={Bike} />

        <Text style={s.location}>Location: Brynt Park</Text>
      </View>
    </TouchableOpacity>
  );
}
