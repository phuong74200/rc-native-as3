import Badge from "@/components/Badge";
import { ScrollView } from "react-native-gesture-handler";
import { useState, useEffect } from "react";

type Props = {
  tags: string[];
  onChange?: (tags: string[]) => void;
};

export default function Filter({ tags, onChange }: Props) {
  const [filter, setFilter] = useState<string[]>([]);

  useEffect(() => onChange?.(filter), [filter]);

  const onPress = (tag: string, active?: boolean) => {
    if (active) setFilter((prev) => prev.filter((item) => item !== tag));
    else setFilter((prev) => [...prev, tag]);
  };

  return (
    <ScrollView
      fadingEdgeLength={200}
      horizontal
      showsHorizontalScrollIndicator={false}
      className="my-8"
      contentOffset={{ x: 40, y: 0 }}
    >
      {tags.map((item) => (
        <Badge active={filter.includes(item)} onPress={onPress} key={item}>
          {item}
        </Badge>
      ))}
    </ScrollView>
  );
}
