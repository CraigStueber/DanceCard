import { s } from "./UserProfile.style";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { User } from "./FakeUserData";

export function UserProfile({}) {
  const profileImageUri = User.profileImage;
  const realImageUri = User.realImage;
  const activities = User.Activties;

  return (
    <View style={s.container}>
      <View style={s.profileContainer}>
        <Image style={s.profileImg} source={profileImageUri} />
        <View style={s.profileInfoContainer}>
          <Text style={s.userName}>{User.userName}</Text>
          <Text style={s.name}>{User.name}</Text>
          <Text style={s.userLocation}>
            {User.city}, {User.state}
          </Text>
        </View>
      </View>

      <View style={s.discriptionContainer}>
        <Text style={s.descriptionHeader}>Description</Text>
        <Text style={s.descriptionText}>{User.description}</Text>
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
