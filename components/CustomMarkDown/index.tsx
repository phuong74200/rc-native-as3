import Markdown, {
  MarkdownProps,
} from "@ronradtke/react-native-markdown-display";

import { styles } from "./styles";

export default function CustomMarkDown(props: MarkdownProps) {
  return <Markdown {...props} style={{ ...styles, ...props.style }} />;
}
