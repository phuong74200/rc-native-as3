import { useBlogsMutation, useBlogsQuery } from "@/stores/blog";
import { useMemo } from "react";
import { Blog } from "../domains/Blog";
import { unionQuery, DeepPartial } from "@/utils/query";

export default function useGetBlogs() {
  const { data } = useBlogsQuery();

  const blogs = useMemo(
    () =>
      (data || []).map(
        (blog) =>
          new Blog(
            blog.id,
            blog.title,
            blog.content,
            blog.image,
            blog.createdBy,
            blog.tags,
            blog.bookmarked
          )
      ),
    [data]
  );

  const query = (query: DeepPartial<Blog>) => {
    return unionQuery(blogs, query);
  };

  return { data: blogs, query };
}

export const useMutateBlog = () => {
  const { mutate } = useBlogsMutation();

  const updateOne = (id: string, patch: Partial<Blog>) => {
    mutate((blogs) => {
      const item = blogs.find((blog) => blog.id === id);

      if (!item) return blogs;

      return blogs.map((blog) => {
        if (blog.id !== id) return blog;

        return { ...blog, ...patch };
      });
    });
  };

  return { updateOne };
};
