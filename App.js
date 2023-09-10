import { Text, View } from "react-native";
import { s } from "./App.styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider style={s.app}>
      <SafeAreaView>
        <View style={s.header}>
          <Text>Header</Text>
        </View>
        <View style={s.body}>
          <Text>Body</Text>
        </View>
        <View style={s.footer}>
          <Text>Footer</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
