import { s } from "./EventInfo.style";
import { useState } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { fetchIcon } from "../../utils/iconfunction";
export function EventInfo({}) {
  const [show, setShow] = useState(false);
  const { params } = useRoute();
  const nav = useNavigation();

  const attendeesMap = params.happening.attendees.map((people) => {
    return (
      <View style={s.userSubViews} key={people}>
        <TouchableOpacity
          onPress={() => nav.navigate("UserProfile")}
          style={s.userLine}
        >
          <Ionicons name="checkmark-circle" size={24} color="#28143E" />
          <Text style={s.userTxt}>{people}</Text>
        </TouchableOpacity>
      </View>
    );
  });
  const ToggleShow = () => {
    setShow(!show);
  };
  let icon = fetchIcon(params.happening.icon);
  return (
    <View style={s.container}>
      <View style={s.topContainer}>
        <Image source={icon} style={s.iconImage} />
        <View style={s.infoView}>
          <Text style={s.title}>{params.happening.name}</Text>
          <Text style={s.infoText}>Date: {params.happening.date}</Text>
          <Text style={s.infoText}>Time: {params.happening.time}</Text>
          <Text style={s.infoText}>Location: {params.happening.location}</Text>
          <Text style={s.infoText}>Address:</Text>
          <Text style={s.infoText}>{params.happening.address}</Text>
          <Text style={s.infoText}>City: {params.happening.city}</Text>
        </View>
      </View>
      <View style={s.descriptionContainer}>
        <Text style={s.descriptionTitle}>Happening Description</Text>
        <Text>{params.happening.description}</Text>
      </View>
      <TouchableOpacity style={s.createContainer}>
        <Text style={s.createText}>Join Happening</Text>
      </TouchableOpacity>
      <View style={s.playersContainers}>
        <TouchableOpacity style={s.attendiesBtn} onPress={() => ToggleShow()}>
          <Text style={s.attendiesTitle}>
            Attendees {params.happening.attendees.length} /
            {params.happening.num_attendees}
          </Text>
          <Ionicons
            name="ios-arrow-down-circle-outline"
            size={50}
            color="white"
            style={s.icon}
          />
        </TouchableOpacity>
        {show && <ScrollView style={s.attContainer}>{attendeesMap}</ScrollView>}
      </View>
    </View>
  );
}
