import { s } from "./EventInfo.style";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export function EventInfo({}) {
  const nav = useNavigation();
  return (
    <View style={s.container}>
      <View style={s.topContainer}>
        <Image
          source={require("../../assets/icons/DCdice.png")}
          style={s.iconImage}
        />
        <View style={s.infoView}>
          <Text style={s.title}>Happening Title</Text>
          <Text style={s.infoText}>Date</Text>
          <Text style={s.infoText}>Time</Text>
          <Text style={s.infoText}>Location</Text>
          <Text style={s.infoText}>Address</Text>
        </View>
      </View>
      <View style={s.descriptionContainer}>
        <Text style={s.descriptionTitle}>Happening Description</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
      <View style={s.playersContainers}>
        <TouchableOpacity style={s.attendiesBtn}>
          <Text style={s.attendiesTitle}>Attendees 2/8</Text>
          <Ionicons
            name="ios-arrow-down-circle-outline"
            size={50}
            color="white"
            style={s.icon}
          />
        </TouchableOpacity>
        <View style={s.usersContainer}>
          <View style={s.userSubViews}>
            <TouchableOpacity
              onPress={() => nav.navigate("UserProfile")}
              style={s.userLine}
            >
              <Ionicons name="checkmark-circle" size={24} color="#28143E" />
              <Text style={s.userTxt}>UserName1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => nav.navigate("UserProfile")}
              style={s.userLine}
            >
              <Ionicons name="checkmark-circle" size={24} color="#28143E" />
              <Text style={s.userTxt}>UserName2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.userLine}>
              <Text style={s.userTxt}></Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.userLine}>
              <Text style={s.userTxt}></Text>
            </TouchableOpacity>
          </View>
          <View style={s.userSubViews}>
            <TouchableOpacity style={s.userLine}>
              <Text style={s.userTxt}></Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.userLine}>
              <Text style={s.userTxt}></Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.userLine}>
              <Text style={s.userTxt}></Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.userLine}>
              <Text style={s.userTxt}></Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
