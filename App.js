import { Text, View } from "react-native";
import { s } from "./App.styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Home } from "./pages/Home/Home";

export default function App() {
  return (
    <SafeAreaProvider style={s.app}>
      <SafeAreaView style={s.container}>
        <View style={s.header}>
          <Header />
        </View>
        <View style={s.body}>
          <Home />
        </View>
        <View style={s.footer}>
          <Footer />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
