import { Text, View } from "react-native";
import { s } from "./App.styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Home } from "./pages/Home/Home";
import { LocationProfile } from "./pages/LocationProfile/LocationProfile";
const Stack = createNativeStackNavigator();

const navTheme = {
  colors: {
    background: "transparent",
  },
};
export default function App() {
  return (
    <SafeAreaProvider style={s.app}>
      <SafeAreaView style={s.container}>
        <View style={s.header}>
          <Header />
        </View>
        <NavigationContainer theme={navTheme}>
          <Stack.Navigator
            screenOptions={{ headerShown: false, animation: "fade" }}
            initialRouteName="LocationProfile"
          >
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen
              name="LocationProfile"
              component={LocationProfile}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
        <View style={s.footer}>
          <Footer />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
