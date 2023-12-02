import { s } from "./Calendar.style";
import { Text, View } from "react-native";
import { MonthCalendar } from "../../components/MonthCalendar/MonthCalendar";
import { Agenda } from "../../components/Agenda/Agenda";
export function Calendar({}) {
  return (
    <View style={s.container}>
      <Text>Calendar Page</Text>
      <Agenda />
    </View>
  );
}
