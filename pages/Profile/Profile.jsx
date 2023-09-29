import { s } from "./Profile.style";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
export function Profile({ friends }) {
  const { params } = useRoute();
  const profileImageUri = params.friends.profileImage;
  const realImageUri = params.friends.realImage;
  const activities = params.friends.Activties;

  return (
    <View style={s.container}>
      <View style={s.profileContainer}>
        <Image style={s.profileImg} source={profileImageUri} />
        <View style={s.profileInfoContainer}>
          <Text style={s.userName}>{params.friends.userName}</Text>
          <Text style={s.name}>{params.friends.name}</Text>
          <Text style={s.userLocation}>
            {params.friends.city}, {params.friends.state}
          </Text>
        </View>
      </View>

      <View style={s.discriptionContainer}>
        <Text style={s.descriptionHeader}>Description</Text>
        <Text style={s.descriptionText}>{params.friends.description}</Text>
      </View>
      <View style={s.secondHalf}>
        <View style={s.activities}>
          <Text style={s.actHeader}>Favorite Activities</Text>
          {activities.map((activity) => {
            return (
              <Text key={activity} style={s.activity}>
                {activity}
              </Text>
            );
          })}
        </View>
        <Image style={s.referenceImg} source={realImageUri} />
      </View>
    </View>
  );
}
