import { s } from "./Profile.style";
import { Text, Image, View, TouchableOpacity } from "react-native";

export function Profile({}) {
  return (
    <View style={s.container}>
      <View style={s.profileContainer}>
        <Image
          style={s.profileImg}
          source={{ uri: "https://i.pravatar.cc/600" }}
        />
        <View style={s.profileInfoContainer}>
          <Text style={s.userName}>TheNineFigures</Text>
          <Text style={s.name}>Frodo Baggins</Text>
          <Text style={s.userLocation}>Hobbiton, Shire</Text>
        </View>
      </View>

      <View style={s.discriptionContainer}>
        <Text style={s.descriptionHeader}>Description</Text>
        <Text style={s.descriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
      <View style={s.secondHalf}>
        <View style={s.activities}>
          <Text style={s.actHeader}>Favorite Activities</Text>
          <Text style={s.activity}>Basketball</Text>
          <Text style={s.activity}>Tennis</Text>
          <Text style={s.activity}>40K</Text>
          <Text style={s.activity}>Biking</Text>
          <Text style={s.activity}>Hiking</Text>
        </View>
        <Image
          style={s.referenceImg}
          source={{ uri: "https://i.pravatar.cc/600" }}
        />
      </View>
    </View>
  );
}
