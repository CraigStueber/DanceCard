import { s } from "./LocationProfile.style";
import { Text, View, Image } from "react-native";
import OEJ from "../../assets/OEJ.png";
import { Ionicons } from "@expo/vector-icons";
export function LocationProfile({}) {
  return (
    <View style={s.container}>
      <View style={s.profileContainer}>
        <Image source={OEJ} style={s.locationLogoImg} />
        <View style={s.locationTextContainer}>
          <Text style={s.locationName}>One Eyed Jacques</Text>
          <Text style={s.locationInfo}>3104 W Cary St</Text>
          <Text style={s.locationInfo}>Richmond, VA 23221</Text>
          <Text style={s.locationInfo}>(804) 359-5163</Text>
          <Text style={s.locationInfo}>oneeyedjacques.com</Text>
          <Text style={s.locationInfo}>OEJ.CONTACT@GMAIL.COM</Text>
        </View>
      </View>
      <View style={s.hoursContainer}>
        <Text style={s.hoursHeader}>Hours</Text>
        <View style={s.daysContainer}>
          <View style={s.dayObject}>
            <Text style={s.day}>Sun</Text>
            <Text style={s.time}>11-9</Text>
          </View>
          <View style={s.dayObject}>
            <Text style={s.day}>Mon</Text>
            <Text style={s.time}>11-9</Text>
          </View>
          <View style={s.dayObject}>
            <Text style={s.day}>Tues</Text>
            <Text style={s.time}>11-9</Text>
          </View>
          <View style={s.dayObject}>
            <Text style={s.day}>Wed</Text>
            <Text style={s.time}>11-9</Text>
          </View>
          <View style={s.dayObject}>
            <Text style={s.day}>Thurs</Text>
            <Text style={s.time}>11-9</Text>
          </View>
          <View style={s.dayObject}>
            <Text style={s.day}>Fri</Text>
            <Text style={s.time}>11-9</Text>
          </View>
          <View style={s.dayObject}>
            <Text style={s.day}>Sat</Text>
            <Text style={s.time}>11-9</Text>
          </View>
        </View>
      </View>
      <View style={s.activitiesDropDown}>
        <Text style={s.activitiesHeader}>Location Activities</Text>
        <Ionicons
          name="ios-arrow-down-circle-outline"
          size={50}
          color="white"
        />
      </View>
    </View>
  );
}
