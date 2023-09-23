import { TouchableOpacity, Image, View, Text } from "react-native";
import { s } from "./LocationCard.style";
import OEJ from "../../assets/OEJ.png";
import { useNavigation } from "@react-navigation/native";

export function LocationCard({}) {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      style={s.container}
      onPress={() => nav.navigate("LocationProfile")}
    >
      <Image source={OEJ} style={s.locationLogo} />
      <View style={s.locationNameContainer}>
        <Text style={s.locationName}>One Eyed Jacques</Text>
        <TouchableOpacity
          style={s.locationBtn}
          onPress={() => nav.navigate("LocationProfile")}
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
    </TouchableOpacity>
  );
}
