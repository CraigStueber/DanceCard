import { s } from "./CreateHappening.style";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import DropDownPicker from "react-native-dropdown-picker";
export function CreateHappening({}) {
  const [date, setDate] = useState(new Date());
  const [calDate, setCalDate] = useState(date.toDateString());
  const [time, setTime] = useState(date.toTimeString());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
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

  const showDate = () => {
    setShowDatePicker(!showDatePicker);
  };
  const showTime = () => {
    setShowTimePicker(!showTimePicker);
  };
  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === "android") {
        showDate();
      }
    } else {
      showDate();
    }
  };

  return (
    <View>
      <View style={s.container}>
        <Text style={s.label}>What's Happening</Text>
        <TextInput
          style={s.fullInput}
          placeholder="Tap Lessons..."
          keyboardType="default"
        />
      </View>
      <View style={s.twoInputContainer}>
        <Pressable onPress={showDate}>
          <Text style={s.label}>When is it Happening?</Text>
          <TextInput
            style={s.fullInput}
            placeholder="Dance Hall..."
            keyboardType="default"
            value={calDate}
            editable={false}
          />
        </Pressable>

        {showDatePicker && (
          <DateTimePicker
            mode="date"
            display="spinner"
            value={date}
            onChange={onChange}
          />
        )}

        <Pressable onPress={showTime}>
          <Text style={s.label}>What Time?</Text>
          <TextInput
            style={s.fullInput}
            placeholder="12:00am"
            keyboardType="default"
            value={time}
            editable={false}
          />
        </Pressable>

        {showTimePicker && (
          <DateTimePicker mode="time" display="spinner" value={date} />
        )}
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
          <Text style={s.label}>Pick Icon</Text>
          <DropDownPicker
            style={s.dropdownMenu}
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
      <View style={s.twoInputContainer}>
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
          placeholder="Let's dance all night...
          "
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
