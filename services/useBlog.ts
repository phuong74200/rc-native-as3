import { useState, useEffect } from "react";
import { BlogStore } from "../stores/blog";
import { Blog } from "../domains/Blog";

export default function useBlog(id: string | undefined | null) {
  const [blog, setBlog] = useState<Blog | null | undefined>(null);

  useEffect(() => {
    (async () => {
      if (id) {
        const blog = await BlogStore.getOne(id);
        setBlog(blog);
      }
    })();
  }, []);

  const bookmark = async (id: string, state: boolean) => {
    const blog = await BlogStore.updateOne(id, { bookmarked: state });

    setBlog(blog);
  };

  return {
    blog,
    bookmark,
  };
}
