import { RecCard } from "../../components/RecCard/RecCard";
import { s } from "./Home.style";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Home({}) {
  const nav = useNavigation();
  return (
    <View style={s.container}>
      <View style={s.btnContainer}>
        <TouchableOpacity
          style={s.loctionBtn}
          onPress={() => nav.navigate("Location")}
        >
          <Text style={s.locationTxt}>Venues</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={s.activitiesBtn}
          onPress={() => nav.navigate("Happening")}
        >
          <Text style={s.activitiesTxt}>Happenings</Text>
        </TouchableOpacity>
      </View>
      <Text style={s.recHeader}>Recommended</Text>
      <ScrollView style={s.recContainer}>
        <RecCard />
      </ScrollView>
    </View>
  );
}
