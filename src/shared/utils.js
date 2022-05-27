export const joinQueryStrings = (obj) =>
  Object.entries(obj)
    .reduce((acc, [key, value]) => {
      if (value)
        acc.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
      return acc;
    }, [])
    .join("&");
