import Markdown, {
  MarkdownProps,
} from "@ronradtke/react-native-markdown-display";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  paragraph: {
    textAlign: "justify",
  },
});

export default function CustomMarkDown(props: MarkdownProps) {
  return <Markdown {...props} style={{ ...styles, ...props.style }} />;
}
