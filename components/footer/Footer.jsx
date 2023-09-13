import { TouchableOpacity, View, Text } from "react-native";
import { s } from "./Footer.styles";
import { Ionicons } from "@expo/vector-icons";

export function Footer({}) {
  return (
    <View style={s.container}>
      <TouchableOpacity style={s.search_btn}>
        <Ionicons name="md-search" size={35} color="white" />
        <Text style={s.searchTxt}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.calendar_btn}>
        <Ionicons name="calendar" size={35} color="#28143E" />
        <Text style={s.calendarTxt}>Calendar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.message_btn}>
        <Ionicons name="mail-outline" size={35} color="white" />
        <Text style={s.messageTxt}>Messages{"(5)"}</Text>
      </TouchableOpacity>
    </View>
  );
}
