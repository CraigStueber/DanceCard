import { s } from "./Friends.style";

import { useState, useEffect } from "react";
import { supabase } from "../../client";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { idNum } from "../../utils/auth";
import { useNavigation } from "@react-navigation/native";

export function Friends({}) {
  const [friendsList, setFriendsList] = useState([]);
  const nav = useNavigation();
  useEffect(() => {
    const getFriends = async () => {
      const friends = await fetchFriends();
      setFriendsList(friends);
    };
    getFriends();
  }, []);

  async function fetchFriends() {
    let { data: UserProfile, error } = await supabase
      .from("UserProfile")
      .select("*")
      .range(0, 9);
    if (error) {
      console.error("Error Fetching:", error);
      return;
    } else {
      return UserProfile;
    }
  }
  return (
    <ScrollView style={s.container}>
      {friendsList &&
        friendsList.map((friends) => {
          {
            if (friends.UserID == idNum) {
            } else {
              return (
                <TouchableOpacity
                  style={s.btn}
                  key={friends.id}
                  onPress={() => nav.navigate("Profile", { friends })}
                >
                  <Image
                    source={{
                      uri: `https://inoxtkubxynhbuslvgyv.supabase.co/storage/v1/object/public/avatar/${friends.avatar}`,
                    }}
                    style={s.profileImage}
                  />
                  <View style={s.nameSection}>
                    <Text style={s.label}>Nickname: </Text>
                    <Text style={s.name}>{friends.UserName}</Text>
                    <View style={s.borderLine}></View>
                    <Text style={s.label}>Real Name:</Text>
                    <Text style={s.name}> {friends.FirstName}</Text>
                  </View>
                </TouchableOpacity>
              );
            }
          }
        })}
    </ScrollView>
  );
}
