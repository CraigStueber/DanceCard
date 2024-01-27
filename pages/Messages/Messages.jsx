import { s } from "./Messages.style";
import { View, Text } from "react-native";

export function Messages({}) {
  return (
    <View style={s.container}>
      <Text style={s.comingText}>FEATURE</Text>
      <Text style={s.comingText}>COMING</Text>
      <Text style={s.comingText}>SOON</Text>
    </View>
  );
}
