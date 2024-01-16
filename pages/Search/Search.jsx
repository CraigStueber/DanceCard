import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { s } from "./Search.style";
import { useNavigation } from "@react-navigation/native";

import { RecCard } from "../../components/RecCard/RecCard";
export function Search({}) {
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
        <TouchableOpacity
          style={s.friendsBtn}
          onPress={() => nav.navigate("Friends")}
        >
          <Text style={s.friendsTxt}>Friends</Text>
        </TouchableOpacity>
      </View>
      <Text style={s.recHeader}>Recommended</Text>
      <ScrollView style={s.recContainer}>
        <RecCard />
      </ScrollView>
    </View>
  );
}
