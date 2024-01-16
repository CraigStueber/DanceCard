import { s } from "./UserProfile.style";
import { useState, useEffect } from "react";
import { supabase } from "../../client";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { idNum } from "../../utils/auth";
export function UserProfile({}) {
  const [userID, setUserID] = useState("");
  const [userProfile, setUserProfile] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const user = await fetchUserProfile();
      setUserProfile(user);
    };
    getUser();
  }, [userID]);

  async function fetchUserProfile() {
    setUserID(idNum);
    let { data: UserProfile, error } = await supabase
      .from("UserProfile")
      .select("*")
      .eq("UserID", userID);
    if (error) {
      console.error("Error fetching: ", error);
      return;
    } else {
      return UserProfile;
    }
  }

  return (
    <>
      {userProfile &&
        userProfile.map((profile) => {
          return (
            <View style={s.container} key={profile.id}>
              <View style={s.profileContainer}>
                <Image
                  style={s.profileImg}
                  source={{
                    uri: `https://inoxtkubxynhbuslvgyv.supabase.co/storage/v1/object/public/avatar/${profile.avatar}`,
                  }}
                />
                <View style={s.profileInfoContainer}>
                  <Text style={s.userName}>{profile.UserName}</Text>
                  <Text style={s.name}>{profile.FirstName}</Text>
                  <Text style={s.userLocation}>
                    {profile.City}, {profile.State}
                  </Text>
                </View>
              </View>
              <View style={s.discriptionContainer}>
                <Text style={s.descriptionHeader}>Description</Text>
                <Text style={s.descriptionText}>{profile.Description}</Text>
              </View>
              <View style={s.secondHalf}>
                <View style={s.activities}>
                  <Text style={s.actHeader}>Favorite Activities</Text>
                  {profile.Activities.map((activity) => {
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
                    uri: `https://inoxtkubxynhbuslvgyv.supabase.co/storage/v1/object/public/varPhoto/${profile.varPhoto}`,
                  }}
                />
              </View>
            </View>
          );
        })}
    </>
  );
}
