import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { s } from "./Friends.style";
import { friendsList } from "./FakeFriendData";
export function Friends({}) {
  return (
    <ScrollView style={s.container}>
      {friendsList &&
        friendsList.map((friends) => {
          return (
            <TouchableOpacity style={s.btn}>
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
