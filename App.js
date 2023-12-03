import { Text, View } from "react-native";
import { s } from "./App.styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Home } from "./pages/Home/Home";
import { Location } from "./pages/Location/Location";
import { LocationProfile } from "./pages/LocationProfile/LocationProfile";
import { Profile } from "./pages/Profile/Profile";
import { Happening } from "./pages/Happening/Happening";
import { Calendar } from "./pages/Calendar/Calendar";
import { Messages } from "./pages/Messages/Messages";
import { useFonts } from "expo-font";
import { EventInfo } from "./pages/EventInfo/EventInfo";
import { CreateHappening } from "./pages/CreateHappening/CreateHappening";
import { Search } from "./pages/Search/Search";
import { Friends } from "./pages/Friends/Friends";
import { UserProfile } from "./pages/UserProfile/UserProfile";
import { DirectMessagePage } from "./pages/DirectMessage/DirectMessagePage";
const Stack = createNativeStackNavigator();

const navTheme = {
  colors: {
    background: "transparent",
  },
};

export default function App() {
  const [isFontLoaded] = useFonts({
    "Konnet-Italic": require("./assets/fonts/Konnect-BlackItalic.otf"),
    "Konnet-ExtraBold": require("./assets/fonts/Konnect-ExtraBold.otf"),
    "Konnet-Regular": require("./assets/fonts/Konnect-Regular.otf"),
  });
  return (
    <NavigationContainer theme={navTheme}>
      <SafeAreaProvider style={s.app}>
        {isFontLoaded && (
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
              <Stack.Screen
                name="Happening"
                component={Happening}
              ></Stack.Screen>
              <Stack.Screen name="Location" component={Location}></Stack.Screen>
              <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
              <Stack.Screen name="Calendar" component={Calendar}></Stack.Screen>
              <Stack.Screen name="Messages" component={Messages}></Stack.Screen>
              <Stack.Screen name="Search" component={Search}></Stack.Screen>
              <Stack.Screen name="Friends" component={Friends}></Stack.Screen>
              <Stack.Screen
                name="DirectMessagePage"
                component={DirectMessagePage}
              ></Stack.Screen>
              <Stack.Screen
                name="UserProfile"
                component={UserProfile}
              ></Stack.Screen>
              <Stack.Screen
                name="EventInfo"
                component={EventInfo}
              ></Stack.Screen>
              <Stack.Screen
                name="CreateHappening"
                component={CreateHappening}
              ></Stack.Screen>
            </Stack.Navigator>

            <View style={s.footer}>
              <Footer />
            </View>
          </SafeAreaView>
        )}
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
