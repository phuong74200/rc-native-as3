import { useEffect, useState } from "react";

export default function useAsync<T extends unknown>(promise: Promise<T>) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    (async () => {
      const response = await promise;
      setData(response);
    })();
  }, []);

  return data;
}
