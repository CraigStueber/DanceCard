import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { s } from "./App.styles";

export default function App() {
  return (
    <View style={s.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
