import { ScrollView, Text } from "react-native";
import { s } from "./Location.style";
import { supabase } from "../../client";
import { LocationCard } from "../../components/LocationCard/LocationCard";

import { useState, useEffect } from "react";

export function Location({}) {
  const [locationList, setLocationList] = useState([]);

  useEffect(() => {
    const getLocs = async () => {
      const locations = await fetchLocation();
      setLocationList(locations);
    };
    getLocs();
  }, []);
  async function fetchLocation() {
    let { data: Location, error } = await supabase.from("Location").select("*");
    if (error) {
      console.error("Error Fetching:", error);
      return;
    } else {
      return Location;
    }
  }
  return (
    <ScrollView style={s.container}>
      {locationList &&
        locationList.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
    </ScrollView>
  );
}
