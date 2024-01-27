import { s } from "./LocationProfile.style";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { fetchIcon } from "../../utils/iconfunction";
export function LocationProfile() {
  const { params } = useRoute();

  let icon = fetchIcon(params.location.icon);
  return (
    <ScrollView style={s.container}>
      <View style={s.profileContainer}>
        <Image source={icon} style={s.locationLogoImg} />
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
            <Text style={s.time}>{params.location.sun}</Text>
          </View>
          <View style={s.dayObject}>
            <Text style={s.day}>Mon</Text>
            <Text style={s.time}>{params.location.mon}</Text>
          </View>
          <View style={s.dayObject}>
            <Text style={s.day}>Tues</Text>
            <Text style={s.time}>{params.location.tues}</Text>
          </View>
          <View style={s.dayObject}>
            <Text style={s.day}>Wed</Text>
            <Text style={s.time}>{params.location.wed}</Text>
          </View>
          <View style={s.dayObject}>
            <Text style={s.day}>Thurs</Text>
            <Text style={s.time}>{params.location.th}</Text>
          </View>
          <View style={s.dayObject}>
            <Text style={s.day}>Fri</Text>
            <Text style={s.time}>{params.location.fri}</Text>
          </View>
          <View style={s.dayObject}>
            <Text style={s.day}>Sat</Text>
            <Text style={s.time}>{params.location.sat}</Text>
          </View>
        </View>
      </View>
      <View style={s.descriptionContainer}>
        <Text style={s.descriptionHeadline}>Description</Text>
        <Text style={s.descriptionText}>{params.location.description}</Text>
      </View>
    </ScrollView>
  );
}
