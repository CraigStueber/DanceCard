import { TouchableOpacity, Image, View, Text } from "react-native";
import { s } from "./LocationCard.style";

import { useNavigation } from "@react-navigation/native";
import { fetchIcon } from "../../utils/iconfunction";
export function LocationCard({ location }) {
  const nav = useNavigation();
  let icon = fetchIcon(location.icon);
  const imageUri = location.image;
  return (
    <View style={s.container}>
      <Image source={icon} style={s.locationLogo} />
      <View style={s.locationNameContainer}>
        <Text style={s.locationName}>{location.name}</Text>
        <TouchableOpacity
          style={s.locationBtn}
          onPress={() => nav.navigate("LocationProfile", { location })}
        >
          <Text style={s.btnText}>Location Info</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={s.eventBtn}
          onPress={() => nav.navigate("Happening")}
        >
          <Text style={s.btnText}>Search Events</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
