import AsyncStorage from "@react-native-async-storage/async-storage";
import { Blog } from "../domains/Blog";
import { faker } from "@faker-js/faker";
import randomImage from "../utils/randomImage";
import randomContent from "@/utils/randomContent";
import randomTag from "@/utils/randomTag";
import { Store } from "@/stores";
import "@/utils/query";

type Item = {
  id: string;
  title: string;
  content: string;
  image: string;
  tags: string[];
  bookmarked?: boolean;
  createdBy: {
    id: string;
    name: string;
    avatar: string;
  };
};

const mock: Item[] = new Array(20).fill(null).map((_, index) => ({
  id: index.toString(),
  title: faker.lorem.sentence(),
  content: randomContent(),
  image: randomImage(),
  tags: ["1", ...randomTag()],
  bookmarked: false,
  createdBy: {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
  },
}));

const KEY = "@blogs/test";

const { useMutation, useQuery } = new Store(KEY, mock);

export { useQuery as useBlogsQuery, useMutation as useBlogsMutation };
