import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { RecCard } from "../../components/RecCard/RecCard";
import { s } from "./Event.style";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export function Event({}) {
  const nav = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={s.createContainer}
        onPress={() => nav.navigate("CreateEvent")}
      >
        <Text style={s.createText}>Create Activity</Text>
      </TouchableOpacity>
      <View style={s.filterContainer}>
        <TouchableOpacity style={s.dropdown}>
          <Text style={s.filterTxt}>Filter</Text>
          <AntDesign name="downcircleo" size={15} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView style={s.container}>
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
      </ScrollView>
    </View>
  );
}
