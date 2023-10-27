import Markdown, {
  MarkdownProps,
} from "@ronradtke/react-native-markdown-display";

import { styles } from "./styles";
import { memo } from "react";

function CustomMarkDown(props: MarkdownProps) {
  return <Markdown {...props} style={{ ...styles, ...props.style }} />;
}

export default memo(CustomMarkDown);
