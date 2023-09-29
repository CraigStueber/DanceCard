import { TouchableOpacity, Image, View, Text } from "react-native";
import { s } from "./LocationCard.style";
import OEJ from "../../assets/OEJ.png";
import { useNavigation } from "@react-navigation/native";

export function LocationCard({ location }) {
  const nav = useNavigation();

  const imageUri = location.image;
  return (
    <View style={s.container}>
      <Image source={imageUri} style={s.locationLogo} />
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
