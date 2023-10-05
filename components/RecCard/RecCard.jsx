import { View, Image, Text, TouchableOpacity } from "react-native";
import { s } from "./RecCard.styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export function RecCard({}) {
  const nav = useNavigation();
  const Bike = require("../../assets/icons/DCbike.png");
  const d20 = require("../../assets/icons/DCd20.png");
  const dumbell = require("../../assets/icons/DCdumbell.png");
  const AoS = require("../../assets/icons/DCdice.png");

  return (
    <>
      <TouchableOpacity
        style={s.container}
        onPress={() => nav.navigate("EventInfo")}
      >
        <Image style={s.icon} source={Bike} />
        <View style={s.textContainer}>
          <Text style={s.eventTitle}>Biking</Text>
          <View style={s.subTitleContainer}>
            <Text style={s.date}>Sept 28</Text>
            <Text style={s.time}>2:00pm</Text>
          </View>
          <View style={s.locationContainer}>
            <Text style={s.location}>Brynt Park</Text>
            <Text style={s.players}>7/10 players</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={s.container}
        onPress={() => nav.navigate("EventInfo")}
      >
        <Image style={s.icon} source={d20} />
        <View style={s.textContainer}>
          <Text style={s.eventTitle}>Dungeon & Dragons</Text>
          <View style={s.subTitleContainer}>
            <Text style={s.date}>March 30</Text>
            <Text style={s.time}>12:00pm</Text>
          </View>
          <View style={s.locationContainer}>
            <Text style={s.location}>One Eyed Jacques</Text>
            <Text style={s.players}>3/6 players</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={s.container}
        onPress={() => nav.navigate("EventInfo")}
      >
        <Image style={s.icon} source={dumbell} />
        <View style={s.textContainer}>
          <Text style={s.eventTitle}>Weight Lifting</Text>
          <View style={s.subTitleContainer}>
            <Text style={s.date}>Sept 30</Text>
            <Text style={s.time}>6:00am</Text>
          </View>
          <View style={s.locationContainer}>
            <Text style={s.location}>Gold's Gym</Text>
            <Text style={s.players}>1/2 people</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={s.container}
        onPress={() => nav.navigate("EventInfo")}
      >
        <Ionicons name={AoS} size={80} style={s.icon} />
        <View style={s.textContainer}>
          <Text style={s.eventTitle}>Age of Sigmar</Text>
          <View style={s.subTitleContainer}>
            <Text style={s.date}>Sept 30</Text>
            <Text style={s.time}>6:00pm</Text>
          </View>
          <View style={s.locationContainer}>
            <Text style={s.location}>Battlegrounds</Text>
            <Text style={s.players}>1/2 people</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}
