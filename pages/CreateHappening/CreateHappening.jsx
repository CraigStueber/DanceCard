import { s } from "./CreateHappening.style";
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import { useState } from "react";

import DropDownPicker from "react-native-dropdown-picker";
export function CreateHappening({}) {
  const [chosenDate, setChosenDate] = useState(new Date());
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

        <Text style={s.placehoderText}>DATE PICKER</Text>
      </View>
      <View style={s.twoInputContainer}>
        <View style={s.dropdownContainer}>
          <Text style={s.label}>Location</Text>
          <TextInput
            style={s.fullInput}
            placeholder="Dance Hall..."
            keyboardType="default"
          />
        </View>
        <View style={s.dropdownContainer}>
          <Text style={s.label}>Address</Text>
          <TextInput
            style={s.fullInput}
            placeholder="123 Main Street"
            keyboardType="default"
          />
        </View>
      </View>
      <View style={s.twoInputContainer}>
        <View style={s.dropdownContainer}>
          <Text style={s.label}>City</Text>
          <TextInput
            style={s.fullInput}
            placeholder="Rome"
            keyboardType="default"
          />
        </View>
        <View style={s.dropdownContainer}>
          <Text style={s.label}>Attendees</Text>
          <TextInput
            style={s.fullInput}
            placeholder="1"
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={s.container}>
        <Text style={s.label}>Happening Description</Text>
        <TextInput
          style={s.descriptInput}
          placeholder="Let's dance all night..."
          keyboardType="default"
          multiline={true}
          numberOfLines={10}
        />
      </View>
      <TouchableOpacity style={s.subBtn}>
        <Text style={s.subtext}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
