import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View, ImageBackground, Image } from "react-native";
import useBlog from "@/services/useBlog";
import { styles } from "@/app/blog/[id]/style";
import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Markdown from "@ronradtke/react-native-markdown-display";

const copy = `
![](https://ksr-ugc.imgix.net/assets/042/814/860/03bc91071795dc39bef49c0c1f5a0197_original.png?ixlib=rb-4.1.0&w=680&fit=max&v=1698172519&gif-q=50&lossless=true&s=3664e73f62afc06ca7ca1d57c73b9962)

![Volume 1 Cover](https://ksr-ugc.imgix.net/assets/042/211/148/001db308b253f1d7ea201dd88ca41291_original.png?ixlib=rb-4.1.0&w=680&fit=max&v=1694054287&gif-q=50&lossless=true&s=24b8424a3290069ef983c9852185e267)

Volume 1 Cover

![](https://ksr-ugc.imgix.net/assets/042/210/669/62f0a3a48fe63386700acbb16fc630d7_original.png?ixlib=rb-4.1.0&w=680&fit=max&v=1694050241&gif-q=50&lossless=true&s=5b103a04524522776277c8044dd69d37)

![](https://ksr-ugc.imgix.net/assets/042/211/037/c9b64f221747a31604a73cf484623f75_original.png?ixlib=rb-4.1.0&w=680&fit=max&v=1694053482&gif-q=50&lossless=true&s=3befd4b9fa07c6fe44853bf61d5f4ab1)

TOXX is a five issue post-apocalyptic mini-series, filled with action, intrigue, and drama. It's a story about personal responsibility, hope for the future, and what it truly means to be human.

You could comparatively describe TOXX as Mad Max, meets Children of Men, meets The Last of Us and is perfect for readers of those titles, or anyone who enjoys action, sci-fi, and a story that really makes you think.

![](https://ksr-ugc.imgix.net/assets/042/211/155/1b65f34d077d21359be07cd0daa65b55_original.png?ixlib=rb-4.1.0&w=680&fit=max&v=1694054334&gif-q=50&lossless=true&s=36a31e09d962fb608a82aa574569c34d)

![](https://ksr-ugc.imgix.net/assets/042/211/040/fddeff9d42d0f80cc66f523f6af51fa8_original.png?ixlib=rb-4.1.0&w=680&fit=max&v=1694053510&gif-q=50&lossless=true&s=06a7d023909404b5b0e79c51b54d5df1)

The world is a wasteland. The remnants of civilization crumble amidst mutated creatures and ever-present radiation. What's left of humanity is now sterile and scattered, surviving in loose underground bands.

Claire is remarkable among them--perhaps the youngest human left alive, she has weathered three long decades of unyielding hardship. The whole world changed In the blink of an eye when she discovered she was pregnant. Now, her very existence threatens the fragile balance of power that remains.

In this ravaged world, where hope is a currency coveted by many, Claire finds herself pursued relentlessly by two ruthless factions.  A fearsome band of mutants, consumed by a seething hatred for humanity, seeks to obliterate her as a symbol of the past. Meanwhile, a ferocious gang of merciless bikers stops at nothing to seize her unborn child, viewing it as a rare and precious resource.

Every ounce of Claire's being is dedicated to survival, not only for herself but for the fragile life budding within her.  Amidst the unforgiving wasteland, where danger lurks in every shadow, Claire's journey weaves a captivating tale of courage, sacrifice, and the unbreakable bond between a mother and her unborn child.

![](https://ksr-ugc.imgix.net/assets/042/211/079/28ba61aacf535027681b6ffde5c7a013_original.png?ixlib=rb-4.1.0&w=680&fit=max&v=1694053781&gif-q=50&lossless=true&s=7f5bcfcc586add1c7ba9045e17b9665f)

![](https://ksr-ugc.imgix.net/assets/042/210/680/9c8c6b7851c2bf6d4d183851fdf4fd80_original.png?ixlib=rb-4.1.0&w=680&fit=max&v=1694050328&gif-q=50&lossless=true&s=b1d9c9305314bc76d2090c1c67ebfa9a)

-   Read the comics before they hit store shelves!
-   Access to Kickstarter exclusive covers (there will be direct market exclusive covers as well)
-   Directly support the creators so we can keep making more issues of TOXX.
-   Snag some cool Kickstarter-exclusive swag and stretch goals

This campaign includes the collected first 5 issues as a trade paperback, the final book in the series as a single issue (#5), and an all-new one shot in the TOXX universe!

The Volume 1 TPB is 140+ pages long and perfect (square) bound and sewn, so it'll lay flat really nicely,  with matte lamination and embossing on the cover! Issue #5 is 22 sequential pages, plus extra art credit pages, and some swag + the ability to unlock stretch goals as the campaign goes on. Both books are being printed on high-quality gloss paper (much nicer than your standard off-the-shelf floppy).

[ TIMELINE ]

Issues #5 and the trade are 100% complete and ready to print and fulfill once the Kickstarter concludes! I'm expecting to have these books in backer hands in late Nov for pledges with physical issue #5 or Dec for pledges with Vol 1 phsyical (or possibly even before!). Digital rewards will be delivered 2 weeks after the campaign ends.

[ BACK WITH CONFIDENCE ]

Wolven Press / EC3D has run nearly 30+ successful crowdfunding campaigns and never missed a fulfillment deadline, including multiple campaigns in comics ([THE IGNIS QUADRANT](https://www.kickstarter.com/projects/ecaroth/the-ignis-quadrant-volume-1-and-5-a-space-western-comic), [MIXOLOGY NOIR](https://www.kickstarter.com/projects/ecaroth/mixology-noir-book-one-sazerac-and-vesper), [TOXX #1+#2](https://www.kickstarter.com/projects/ecaroth/toxx-1-2/), [TOXX #3+4](https://www.kickstarter.com/projects/ecaroth/toxx-1-4)). We have established printers, suppliers, and shipping partners we trust and are known for quick fulfillment and backer trust!
`;

export default function BlogDetailScreen() {
  const { id } = useLocalSearchParams<{
    id: string;
  }>();

  const { blog } = useBlog(id);

  return (
    <ScrollView>
      <View style={styles.header} className="z-10 p-4">
        <FontAwesome5 name="chevron-left" size={24} color="black" />
      </View>
      <View className="w-full flex justify-center items-center relative">
        <View
          className="w-[80%] bg-white aspect-[11/9] -top-16 -right-10"
          style={styles.shadow}
        >
          <Image
            source={{
              uri: blog?.image,
            }}
            className="w-full h-full"
            blurRadius={512}
          />
        </View>
        <View className="w-[80%] absolute bg-white" style={styles.shadow}>
          <Image
            source={{
              uri: blog?.image,
            }}
            className="w-[100%] aspect-[11/9]"
            style={styles.image}
          />
        </View>
      </View>

      <View className="px-[10%] my-8">
        <Text className="font-bold text-lg">{blog?.title}</Text>

        <View className="flex flex-row my-4 mb-5 items-center justify-between">
          <View className="flex flex-row items-center gap-2">
            <View className="h-8 w-8 rounded-[28px] overflow-hidden">
              <Image
                source={{
                  uri: blog?.createdBy.avatar,
                }}
                className="w-full h-full"
              />
            </View>
            <Text className="text-gray-700 opacity-80">
              {blog?.createdBy.name}
            </Text>
          </View>

          <FontAwesome name="bookmark-o" size={24} color="black" />
        </View>

        <Markdown>{blog?.content || ""}</Markdown>
      </View>
    </ScrollView>
  );
}
