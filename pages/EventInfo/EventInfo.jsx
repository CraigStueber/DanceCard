import { s } from "./EventInfo.style";
import { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
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
    <>
      {show && (
        <View style={s.joinContainer}>
          <Text style={s.happeningName}>{params.happening.name}</Text>
          <Text style={s.host}>Host: {params.happening.host}</Text>
          <View style={s.sideBySide}>
            <Image source={icon} style={s.icon2Image} />
            <View style={s.textSBS}>
              <Text style={s.locText}>{params.happening.location}</Text>
              <Text style={s.joinText}>Date: {params.happening.date}</Text>
              <Text style={s.joinText}>Time: {params.happening.time}</Text>

              <Text style={s.joinText}>Address:</Text>
              <Text style={s.joinText}>{params.happening.address}</Text>
              <Text style={s.joinText}>City: {params.happening.city}</Text>
            </View>
          </View>
          <View style={s.descView}>
            <Text style={s.descriptionTitle}>Happening Description</Text>
            <Text style={s.descText}>{params.happening.description}</Text>
          </View>
          <View>
            <TextInput
              style={s.fullInput}
              placeholder="Type JOIN to confirm"
              keyboardType="default"
              value={""}
              editable={true}
            />
            <TouchableOpacity style={s.joinBtn}>
              <Text style={s.joinBtnText}>JOIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.nvmBtn} onPress={() => ToggleShow()}>
              <Text style={s.joinBtnText}>NEVERMIND</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View style={s.container}>
        <View style={s.topContainer}>
          <Image source={icon} style={s.iconImage} />
          <View style={s.infoView}>
            <Text style={s.title}>{params.happening.name}</Text>
            <Text style={s.title}>Host: Craig</Text>
            <Text style={s.infoText}>Date: {params.happening.date}</Text>
            <Text style={s.infoText}>Time: {params.happening.time}</Text>
            <Text style={s.infoText}>
              Location: {params.happening.location}
            </Text>
            <Text style={(s.infoText, s.labelTextInfo)}>Address:</Text>
            <Text style={s.infoText}>{params.happening.address}</Text>
            <Text style={s.infoText}>City: {params.happening.city}</Text>
          </View>
        </View>
        <View style={s.descriptionContainer}>
          <Text style={s.descriptionTitle}>Happening Description</Text>
          <Text>{params.happening.description}</Text>
        </View>
        <TouchableOpacity
          style={s.createContainer}
          onPress={() => ToggleShow()}
        >
          <Text style={s.createText}>Join Happening</Text>
        </TouchableOpacity>
        <View style={s.playersContainers}>
          <View style={s.attendiesBtn}>
            <Text style={s.attendiesTitle}>
              Attendees {params.happening.attendees.length} /
              {params.happening.num_attendees}
            </Text>
          </View>
        </View>
      </View>
      <ScrollView style={s.attContainer}>{attendeesMap}</ScrollView>
    </>
  );
}
