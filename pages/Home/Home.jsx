import { RecCard } from "../../components/RecCard/RecCard";
import { s } from "./Home.style";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export function Home({}) {
  return (
    <View style={s.container}>
      <View style={s.btnContainer}>
        <TouchableOpacity style={s.loctionBtn}>
          <Text style={s.locationTxt}>Location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.activitiesBtn}>
          <Text style={s.activitiesTxt}>Activities</Text>
        </TouchableOpacity>
      </View>
      <Text style={s.recHeader}>Recommended</Text>
      <ScrollView style={s.recContainer}>
        <RecCard />
        <RecCard />
        <RecCard />
      </ScrollView>
    </View>
  );
}
