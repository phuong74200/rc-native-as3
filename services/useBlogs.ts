import { useState, useEffect } from "react";
import { BlogStore } from "../stores/blog";
import { Blog } from "../domains/Blog";

export default function useBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    (async () => {
      const blogsArray = await BlogStore.value();
      setBlogs(blogsArray);
    })();
  }, []);

  return {
    blogs,
  };
}
