import { s } from "./Profile.style";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";

export function Profile() {
  const { params } = useRoute();

  return (
    <View style={s.container}>
      <View style={s.profileContainer}>
        <Image
          style={s.profileImg}
          source={{
            uri: `https://inoxtkubxynhbuslvgyv.supabase.co/storage/v1/object/public/avatar/${params.friends.avatar}`,
          }}
        />
        <View style={s.profileInfoContainer}>
          <Text style={s.userName}>{params.friends.UserName}</Text>
          <Text style={s.name}>{params.friends.FirstName}</Text>
          <Text style={s.userLocation}>
            {params.friends.City}, {params.friends.State}
          </Text>
        </View>
      </View>

      <View style={s.discriptionContainer}>
        <Text style={s.descriptionHeader}>Description</Text>
        <Text style={s.descriptionText}>{params.friends.Description}</Text>
      </View>
      <View style={s.secondHalf}>
        <View style={s.activities}>
          <Text style={s.actHeader}>Favorite Activities</Text>
          {params.friends.Activities.map((activity) => {
            return (
              <Text key={activity} style={s.activity}>
                {activity}
              </Text>
            );
          })}
        </View>
        <Image
          style={s.referenceImg}
          source={{
            uri: `https://inoxtkubxynhbuslvgyv.supabase.co/storage/v1/object/public/varPhoto/${params.friends.varPhoto}`,
          }}
        />
      </View>
    </View>
  );
}
