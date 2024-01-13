import { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { s } from "./RecCard.styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export function RecCard({ item }) {
  const nav = useNavigation();
  // useEffect(() => {
  //   setItem(prop);
  // }, []);

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
          <Text style={s.eventTitle}>Test</Text>
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
    </>
  );
}
