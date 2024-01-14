import { useState, useEffect } from "react";
import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";

import { supabase } from "../../client";

import { s } from "./Happening.style";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { fetchIcon } from "../../utils/iconfunction";
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

  const happeningList = happenings.map((item) => {
    let dice = fetchIcon(item.icon);
    const happening = item;
    return (
      <TouchableOpacity
        style={s.containerCard}
        key={item.id}
        onPress={() => nav.navigate("EventInfo", { happening })}
      >
        <Image style={s.icon} source={dice} />
        <View style={s.textContainer}>
          <Text style={s.eventTitle}>{item.name}</Text>
          <View style={s.subTitleContainer}>
            <Text style={s.date}>{item.date}</Text>
            <Text style={s.time}>{item.time}</Text>
          </View>
          <View style={s.locationContainer}>
            <Text style={s.location}>{item.location}</Text>
            <Text style={s.players}>
              {item.attendees.length} / {item.num_attendees}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  });
  return (
    <View>
      <TouchableOpacity
        style={s.createContainer}
        onPress={() => nav.navigate("CreateHappening")}
      >
        <Text style={s.createText}>Create a Happening</Text>
      </TouchableOpacity>

      <View style={s.filterContainer}>
        <TouchableOpacity style={s.dropdown}>
          <Text style={s.filterTxt}>Filter</Text>
          <AntDesign name="downcircleo" size={15} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView style={s.container}>
        {happenings && <View>{happeningList}</View>}
      </ScrollView>
    </View>
  );
}
