import { useState, useEffect } from "react";
import { BlogStore } from "../stores/blog";
import { Blog } from "../domains/Blog";

export default function useBlog(id: string) {
  const [blog, setBlog] = useState<Blog | null | undefined>(null);

  useEffect(() => {
    (async () => {
      const blog = await BlogStore.getOne(id);
      setBlog(blog);
    })();
  }, []);

  return {
    blog,
  };
}
