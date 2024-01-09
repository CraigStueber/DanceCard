import { useState, useEffect } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";

import { supabase } from "../../client";
import { RecCard } from "../../components/RecCard/RecCard";
import { s } from "./Happening.style";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export function Happening({}) {
  const [happenings, setHappenings] = useState([]);
  const [locations, setLocations] = useState([]);

  const nav = useNavigation();

  useEffect(() => {
    const getHappening = async () => {
      const allHappenings = await fetchHappenings();
      setHappenings(allHappenings);
    };
    const getLoc = async () => {
      const allLoc = await fetchLocations();
      setLocations(allLoc);
    };
    getHappening();
    getLoc();
  }, []);

  async function fetchHappenings() {
    let { data: Happening, error } = await supabase
      .from("Happening")
      .select("*");
    if (error) {
      console.error("Error fetching: ", error);
      return;
    } else {
      return Happening;
    }
  }

  async function fetchLocations() {
    let { data: Location, error } = await supabase.from("Location").select("*");

    if (error) {
      console.error("Error fetching: ", error);
      return;
    } else {
      return Location;
    }
  }
  const happeningList = happenings.map((item) => (
    <View key={item.id}>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text>
        {item.attendees.length} / {item.num_attendees}
      </Text>
    </View>
  ));
  return (
    <View>
      <TouchableOpacity
        style={s.createContainer}
        onPress={() => nav.navigate("CreateHappening")}
      >
        <Text style={s.createText}>Create a Happening</Text>
      </TouchableOpacity>
      <View>{happeningList}</View>
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
