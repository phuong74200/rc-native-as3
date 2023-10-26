import { Blog } from "@/domains/Blog";
import useBlog from "@/services/useBlog";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableNativeFeedback, View } from "react-native";

export default function Bookmark({ blog }: { blog: Blog | undefined | null }) {
  const { bookmark, blog: state } = useBlog(blog?.id);

  const handleBookmark = () => {
    if (!blog) return;
    bookmark(blog.id, !state?.bookmarked);
  };

  return (
    <View className="h-8 w-8 overflow-hidden rounded-[28px]">
      <TouchableNativeFeedback onPress={handleBookmark}>
        <View className="h-8 w-8 flex justify-center items-center">
          {state?.bookmarked ? (
            <FontAwesome name="bookmark" size={16} color="black" />
          ) : (
            <FontAwesome name="bookmark-o" size={16} color="black" />
          )}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
