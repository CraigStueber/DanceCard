import { Text, View } from "react-native";
import { s } from "./App.styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Home } from "./pages/Home/Home";
import { LocationProfile } from "./pages/LocationProfile/LocationProfile";
import { Profile } from "./pages/Profile/Profile";
const Stack = createNativeStackNavigator();

const navTheme = {
  colors: {
    background: "transparent",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <SafeAreaProvider style={s.app}>
        <SafeAreaView style={s.container}>
          <View style={s.header}>
            <Header />
          </View>

          <Stack.Navigator
            screenOptions={{ headerShown: false, animation: "fade" }}
            initialRouteName="Home"
          >
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen
              name="LocationProfile"
              component={LocationProfile}
            ></Stack.Screen>
            <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
          </Stack.Navigator>

          <View style={s.footer}>
            <Footer />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
