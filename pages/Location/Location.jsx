import { ScrollView, Text } from "react-native";
import { s } from "./Location.style";
import { LocationCard } from "../../components/LocationCard/LocationCard";
export function Location({}) {
  return (
    <ScrollView style={s.container}>
      <LocationCard />
      <LocationCard />
      <LocationCard />
      <LocationCard />
      <LocationCard />
      <LocationCard />
      <LocationCard />
      <LocationCard />
    </ScrollView>
  );
}