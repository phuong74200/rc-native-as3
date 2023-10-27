export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export function unionQuery<T>(array: T[], searchObject: DeepPartial<T>): T[] {
  function deepEqual(a: DeepPartial<T>, b: DeepPartial<T>): boolean {
    for (const key in b) {
      if (typeof b[key] === "object" && b[key] !== null) {
        if (!deepEqual(a[key] as DeepPartial<T>, b[key] as DeepPartial<T>)) {
          return false;
        }
      } else if (a[key] !== b[key]) {
        return false;
      }
    }
    return true;
  }

  return array.filter((item) => deepEqual(item, searchObject));
}
