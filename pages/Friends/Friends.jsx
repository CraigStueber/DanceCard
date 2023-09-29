import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { s } from "./Friends.style";
import { useNavigation } from "@react-navigation/native";
import { friendsList } from "./FakeFriendData";
export function Friends({}) {
  const nav = useNavigation();
  return (
    <ScrollView style={s.container}>
      {friendsList &&
        friendsList.map((friends) => {
          return (
            <TouchableOpacity
              style={s.btn}
              key={friends.id}
              onPress={() => nav.navigate("Profile", { friends })}
            >
              <Image source={friends.profileImage} style={s.profileImage} />
              <View style={s.nameSection}>
                <Text style={s.label}>Nickname: </Text>
                <Text style={s.name}>{friends.userName}</Text>
                <View style={s.borderLine}></View>
                <Text style={s.label}>Real Name:</Text>
                <Text style={s.name}> {friends.name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
    </ScrollView>
  );
}
