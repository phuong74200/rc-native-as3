import AsyncStorage from "@react-native-async-storage/async-storage";
import { Blog } from "../domains/Blog";
import { faker } from "@faker-js/faker";
import randomImage from "../utils/randomImage";
import randomContent from "@/utils/randomContent";
import randomTag from "@/utils/randomTag";

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

const mock: Item[] = new Array(20).fill(null).map(() => ({
  id: faker.string.uuid(),
  title: faker.lorem.sentence(),
  content: randomContent(),
  image: randomImage(),
  tags: randomTag(),
  bookmarked: false,
  createdBy: {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
  },
}));

const KEY = "@blogs";

export const BlogStore = (function () {
  AsyncStorage.setItem(KEY, JSON.stringify(mock));

  const getOne = async (id: string) => {
    try {
      const blogs = await AsyncStorage.getItem(KEY);
      const parsedBlogs = JSON.parse(blogs || "[]") as Item[];

      const item = parsedBlogs.filter((blog) => blog.id === id)[0];

      if (item)
        return new Blog(
          item.id,
          item.title,
          item.content,
          item.image,
          item.createdBy,
          item.tags
        );
      return null;
    } catch (error) {
      console.log(error);
    }
  };

  const instance = async () => {
    return AsyncStorage.getItem(KEY);
  };

  const value = async () => {
    const blogs = JSON.parse(
      (await AsyncStorage.getItem(KEY)) || "[]"
    ) as Item[];

    const serializabled = blogs.map(
      (blog) =>
        new Blog(
          blog.id,
          blog.title,
          blog.content,
          blog.image,
          blog.createdBy,
          blog.tags
        )
    );

    return serializabled;
  };

  const updateOne = async (id: string, patch: Partial<Blog>) => {
    const parsedBlogs = JSON.parse(
      (await AsyncStorage.getItem(KEY)) || "[]"
    ) as Item[];

    const index = parsedBlogs.findIndex((blog) => blog.id === id);

    parsedBlogs[index] = {
      ...parsedBlogs[index],
      ...patch,
    };

    await AsyncStorage.setItem(KEY, JSON.stringify(parsedBlogs));

    return new Blog(
      parsedBlogs[index].id,
      parsedBlogs[index].title,
      parsedBlogs[index].content,
      parsedBlogs[index].image,
      parsedBlogs[index].createdBy,
      parsedBlogs[index].tags,
      parsedBlogs[index].bookmarked
    );
  };

  return {
    getOne,
    updateOne,
    instance,
    value,
  };
})();
