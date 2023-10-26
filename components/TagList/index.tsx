import Badge from "@/components/Badge";
import {
  View,
  ViewProps
} from "react-native";

type Props = ViewProps & {
  tags: string[];
};



export default function TagList({ tags, ...rest }: Props) {
  return (
    <View {...rest}>
      {tags.map((item) => (
        <Badge key={item}>{item}</Badge>
      ))}
    </View>
  );
}
