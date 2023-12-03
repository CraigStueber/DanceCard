import { TouchableOpacity, View, Text } from "react-native";
import { s } from "./Footer.styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function Footer({}) {
  const nav = useNavigation();
  return (
    <View style={s.container}>
      <TouchableOpacity
        style={s.search_btn}
        onPress={() => nav.navigate("Search")}
      >
        <Ionicons name="md-search" size={35} color="white" />
        <Text style={s.searchTxt}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={s.calendar_btn}
        onPress={() => nav.navigate("Calendar")}
      >
        <Ionicons name="calendar" size={35} color="#28143E" />
        <Text style={s.calendarTxt}>Calendar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={s.message_btn}
        onPress={() => nav.navigate("Messages")}
      >
        <Ionicons name="mail-outline" size={35} color="white" />
        <Text style={s.messageTxt}>Messages</Text>
      </TouchableOpacity>
    </View>
  );
}
