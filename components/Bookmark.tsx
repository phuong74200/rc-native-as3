import { Blog } from "@/domains/Blog";
import useGetBlogs, { useMutateBlog } from "@/services/blog";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableNativeFeedback, View } from "react-native";

export default function Bookmark({ blog }: { blog: Blog | undefined | null }) {
  const { updateOne } = useMutateBlog();

  const handleBookmark = () => {
    if (!blog) return;

    updateOne(blog.id, {
      bookmarked: !blog.bookmarked,
    });
  };

  return (
    <View className="h-8 w-8 overflow-hidden rounded-[28px]">
      <TouchableNativeFeedback
        onPress={handleBookmark}
        background={TouchableNativeFeedback.Ripple("#e7f5ff", true)}
      >
        <View className="h-8 w-8 flex justify-center items-center">
          {blog?.bookmarked ? (
            <FontAwesome name="bookmark" size={16} color="#74c0fc" />
          ) : (
            <FontAwesome name="bookmark-o" size={16} color="#74c0fc" />
          )}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
