import { useState, useEffect } from "react";
import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";

import { supabase } from "../../client";
import { s } from "./RecCard.styles";
import { useNavigation } from "@react-navigation/native";
import { fetchIcon } from "../../utils/iconfunction";

export function RecCard() {
  const [happenings, setHappenings] = useState([]);

  const nav = useNavigation();

  useEffect(() => {
    const getHappening = async () => {
      const allHappenings = await fetchHappenings();
      setHappenings(allHappenings);
    };

    getHappening();
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
    <ScrollView style={s.container}>
      {happenings && <View>{happeningList}</View>}
    </ScrollView>
  );
}
