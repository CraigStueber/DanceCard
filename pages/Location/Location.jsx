import { ScrollView, Text } from "react-native";
import { s } from "./Location.style";
import { LocationCard } from "../../components/LocationCard/LocationCard";
import { venueList } from "./FakeData";

export function Location({}) {
  return (
    <ScrollView style={s.container}>
      {venueList &&
        venueList.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
    </ScrollView>
  );
}
