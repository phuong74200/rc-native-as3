import { ImageSourcePropType } from "react-native";

export default function usePlaceHolderImage(
  image: string | null | undefined
): ImageSourcePropType {
  if (!image) {
    return require("@/assets/place-holder.png");
  }

  return {
    uri: image,
  };
}
