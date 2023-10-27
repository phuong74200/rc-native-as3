import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSyncExternalStore, useMemo, useEffect, useCallback } from "react";

export class Store<T> {
  private key;

  private data: T | null;
  private subscribers = new Set<() => void>();

  /**
   *
   * @param key
   * @param defaultValue
   * @param persist should AsyncStorage value not to be overwritten with defaultValue if it's not set
   */

  constructor(key: string, defaultValue: T, persist = true) {
    this.data = defaultValue;
    this.key = key;

    if (persist) {
      this.setItem(defaultValue);
    } else {
      this.getItem().then((value) => {
        if (value) return;
        this.setItem(defaultValue);
      });
    }
  }

  private async fetch() {
    try {
      this.data = await this.getItem();
      this.notify();
    } catch (e) {
      console.error(e);
    }
  }

  private notify() {
    this.subscribers.forEach((notify) => notify());
  }

  private subscribe(notify: () => void) {
    this.subscribers.add(notify);
  }

  private unsubscribe(notify: () => void) {
    this.subscribers.delete(notify);
  }

  get useQuery() {
    return () => {
      const getData = () => this.data;

      useEffect(() => {
        this.fetch();
      }, []);

      const subscribe = useMemo(() => {
        return (notify: () => void) => {
          this.subscribe(notify);
          return () => {
            this.unsubscribe(notify);
          };
        };
      }, []);

      const data = useSyncExternalStore(subscribe, getData);

      return { data, refetch: this.fetch };
    };
  }

  get useMutation() {
    return () => {
      const mutate = useCallback(async (value: T | ((items: T) => T)) => {
        const items = await this.getItem();

        if (typeof value === "function")
          await this.setItem((value as Function)(items));
        else await this.setItem(value);

        this.fetch();
      }, []);

      return { mutate };
    };
  }

  private async setItem(value: T) {
    return AsyncStorage.setItem(this.key, JSON.stringify(value));
  }

  private async getItem() {
    const value = await AsyncStorage.getItem(this.key);
    return JSON.parse(value || "{}") as T;
  }
}
