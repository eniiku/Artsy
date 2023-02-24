import * as React from 'react';

export function useLocalStorage<T>(key: string, intialValue: T | (() => T)) {
  const [value, setValue] = React.useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    return typeof intialValue === 'function'
      ? (intialValue as () => T)()
      : intialValue;
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}
