import { s } from "./Messages.style";
import { ScrollView } from "react-native";
import { MessageView } from "../../components/MessageComponents/MessageView";

export function Messages({}) {
  return (
    <ScrollView style={s.container}>
      <MessageView />
      <MessageView />
      <MessageView />
      <MessageView />
      <MessageView />
      <MessageView />
      <MessageView />
      <MessageView />
      <MessageView />
    </ScrollView>
  );
}
