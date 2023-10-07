import { s } from "./CreateHappening.style";
import { Text, View, TextInput, Image } from "react-native";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
export function CreateHappening({}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {
      label: "Sports",
      value: "Balls",
      icon: () => (
        <Image
          source={require("../../assets/icons/DCballs.png")}
          style={s.iconStyle}
        />
      ),
    },
    {
      label: "RPG",
      value: "D20",
      icon: () => (
        <Image
          source={require("../../assets/icons/DCd20.png")}
          style={s.iconStyle}
        />
      ),
    },
  ]);
  return (
    <View>
      <View style={s.container}>
        <Text style={s.label}>Happening Title</Text>
        <TextInput
          style={s.fullInput}
          placeholder="Tap Lessons..."
          keyboardType="default"
        />
      </View>
      <View style={s.twoInputContainer}>
        <View style={s.dropdownContainer}>
          <DropDownPicker
            placeholder="Pick an Icon"
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>
      </View>
    </View>
  );
}
