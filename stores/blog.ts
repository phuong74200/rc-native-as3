import AsyncStorage from "@react-native-async-storage/async-storage";
import { Blog } from "../domains/Blog";
import { faker } from "@faker-js/faker";

type Item = {
  id: string;
  title: string;
  content: string;
  image: string;
};

const mock: Item[] = new Array(20).fill(null).map(() => ({
  id: faker.string.uuid(),
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraphs({ min: 5, max: 10 }),
  image: faker.image.urlPicsumPhotos(),
}));

const KEY = "@blogs";

export const BlogStore = (function () {
  AsyncStorage.setItem(KEY, JSON.stringify(mock));

  const getOne = async (id: string) => {
    try {
      const blogs = await AsyncStorage.getItem(KEY);
      const parsedBlogs = JSON.parse(blogs || "[]") as Item[];

      const item = parsedBlogs.filter((blog) => blog.id === id)[0];

      if (item) return new Blog(item.id, item.title, item.content, item.image);
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
      (blog) => new Blog(blog.id, blog.title, blog.content, blog.image)
    );

    return serializabled;
  };

  return {
    getOne,
    instance,
    value,
  };
})();
