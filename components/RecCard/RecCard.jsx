import { View, Image, Text } from "react-native";
import { s } from "./RecCard.styles";

import D20 from "../../assets/D20.png";

export function RecCard({}) {
  return (
    <View>
      <Image source={D20} />
    </View>
  );
}
