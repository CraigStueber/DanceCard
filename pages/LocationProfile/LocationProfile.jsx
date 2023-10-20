import { s } from "./LocationProfile.style";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

export function LocationProfile() {
  const { params } = useRoute();
  const imageURI = params.location.image;

  return (
    <ScrollView style={s.container}>
      <View style={s.profileContainer}>
        <Image source={imageURI} style={s.locationLogoImg} />
        <View style={s.locationTextContainer}>
          <Text style={s.locationName}>{params.location.name}</Text>
          <Text style={s.locationInfo}>{params.location.address}</Text>
          <Text style={s.locationInfo}>
            {params.location.city} {params.location.state}
            {params.location.postalCode}
          </Text>
          <Text style={s.locationInfo}>{params.location.phone}</Text>
          <Text style={s.locationInfo}>{params.location.website}</Text>
          <Text style={s.locationInfo}>{params.location.email}</Text>
        </View>
      </View>
      <View style={s.hoursContainer}>
        <Text style={s.hoursHeader}>Hours</Text>
        <View style={s.daysContainer}>
          <View style={s.dayObject}>
            <Text style={s.day}>Sun</Text>
            <Text style={s.time}>{params.location.hours.sun}</Text>
          </View>
          <View style={s.dayObject}>
            <Text style={s.day}>Mon</Text>
            <Text style={s.time}>{params.location.hours.mon}</Text>
          </View>
          <View style={s.dayObject}>
            <Text style={s.day}>Tues</Text>
            <Text style={s.time}>{params.location.hours.tues}</Text>
          </View>
          <View style={s.dayObject}>
            <Text style={s.day}>Wed</Text>
            <Text style={s.time}>{params.location.hours.wed}</Text>
          </View>
          <View style={s.dayObject}>
            <Text style={s.day}>Thurs</Text>
            <Text style={s.time}>{params.location.hours.thurs}</Text>
          </View>
          <View style={s.dayObject}>
            <Text style={s.day}>Fri</Text>
            <Text style={s.time}>{params.location.hours.fri}</Text>
          </View>
          <View style={s.dayObject}>
            <Text style={s.day}>Sat</Text>
            <Text style={s.time}>{params.location.hours.sat}</Text>
          </View>
        </View>
      </View>
      <View style={s.descriptionContainer}>
        <Text style={s.descriptionHeadline}>Description</Text>
        <Text style={s.descriptionText}>{params.location.description}</Text>
      </View>
      <TouchableOpacity style={s.activitiesDropDown}>
        <Text style={s.activitiesHeader}>Location Activities</Text>
        <Ionicons
          name="ios-arrow-down-circle-outline"
          size={50}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity style={s.activitiesDropDown}>
        <Text style={s.activitiesHeader}>Upcoming Events</Text>
        <Ionicons
          name="ios-arrow-down-circle-outline"
          size={50}
          color="white"
        />
      </TouchableOpacity>
    </ScrollView>
  );
}
