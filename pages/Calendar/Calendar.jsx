import { s } from "./Calendar.style";
import { Text, View, ScrollView } from "react-native";
import { MonthCalendar } from "../../components/MonthCalendar/MonthCalendar";
import { Agenda } from "../../components/Agenda/Agenda";
export function Calendar({}) {
  return (
    <>
      <Text style={s.title}>CaptainPicard's Upcoming Events</Text>
      <ScrollView style={s.container}>
        <Agenda />
        <Agenda />
        <Agenda />
        <Agenda />
        <Agenda />
        <Agenda />
        <Agenda />
        <Agenda />
        <Agenda />
        <Agenda />
      </ScrollView>
    </>
  );
}
