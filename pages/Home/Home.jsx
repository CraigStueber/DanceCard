import { RecCard } from "../../components/RecCard/RecCard";
import { s } from "./Home.style";
import { View, Text, TouchableOpacity } from "react-native";

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
      <View style={s.recContainer}>
        <Text style={s.recHeader}>Recommended</Text>
        <RecCard />
      </View>
    </View>
  );
}
