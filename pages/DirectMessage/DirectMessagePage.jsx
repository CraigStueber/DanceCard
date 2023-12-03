import { s } from "./DirectMessagePage.styles";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
export function DirectMessagePage({}) {
  return (
    <View style={s.container}>
      <View style={s.profileContainer}>
        <Image style={s.icon} source={require("../../assets/profile1.jpg")} />
        <View style={s.textView}>
          <Text style={s.name}>Nota FakeName</Text>
        </View>
      </View>
      <View style={s.textInputView}>
        <TextInput
          style={s.input}
          placeholder="Write Something Nice...
          "
          keyboardType="default"
        />
        <TouchableOpacity style={s.btnSend}>
          <Text style={s.btnText}>Send</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={s.messagecontainer}>
          <Text style={s.theirText}>
            short message snippit. Yadda yadda yadda typing random bullshit here
          </Text>
          <Text style={s.mytext}>
            short message snippit. Yadda yadda yadda typing random bullshit here
          </Text>
          <Text style={s.theirText}>
            short message snippit. Yadda yadda yadda typing random bullshit here
          </Text>
          <Text style={s.mytext}>
            short message snippit. Yadda yadda yadda typing random bullshit here
          </Text>
          <Text style={s.mytext}>
            short message snippit. Yadda yadda yadda typing random bullshit here
          </Text>
          <Text style={s.theirText}>
            short message snippit. Yadda yadda yadda typing random bullshit here
          </Text>
          <Text style={s.mytext}>
            short message snippit. Yadda yadda yadda typing random bullshit here
          </Text>
          <Text style={s.theirText}>
            short message snippit. Yadda yadda yadda typing random bullshit here
          </Text>
          <Text style={s.mytext}>
            short message snippit. Yadda yadda yadda typing random bullshit here
          </Text>
          <Text style={s.mytext}>
            short message snippit. Yadda yadda yadda typing random bullshit here
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
