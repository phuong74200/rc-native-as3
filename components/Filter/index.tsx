import Badge from "@/components/Badge";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

type Props = {
  tags: string[];
};

export default function Filter({ tags }: Props) {
  return (
    <ScrollView
      fadingEdgeLength={200}
      horizontal
      showsHorizontalScrollIndicator={false}
      className="my-8"
      contentOffset={{ x: 40, y: 0 }}
    >
      {tags.map((item) => (
        <Badge key={item}>{item}</Badge>
      ))}
    </ScrollView>
  );
}
