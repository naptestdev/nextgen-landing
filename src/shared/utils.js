export const joinQueryStrings = (obj) =>
  Object.entries(obj)
    .reduce((acc, [key, value]) => {
      if (value)
        acc.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
      return acc;
    }, [])
    .join("&");

const range = (start, end) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
};

export const paginationRange = ({
  total,
  page,
  siblings = 1,
  boundaries = 1,
}) => {
  const totalPageNumbers = siblings * 2 + 3 + boundaries * 2;

  if (totalPageNumbers >= total) return range(1, total);

  const leftSiblingIndex = Math.max(page - siblings, boundaries);
  const rightSiblingIndex = Math.min(page + siblings, total - boundaries);

  const shouldShowLeftDots = leftSiblingIndex > boundaries + 2;
  const shouldShowRightDots = rightSiblingIndex < total - (boundaries + 1);

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = siblings * 2 + boundaries + 2;
    return [
      ...range(1, leftItemCount),
      "...",
      ...range(total - (boundaries - 1), total),
    ];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = boundaries + 1 + 2 * siblings;
    return [
      ...range(1, boundaries),
      "...",
      ...range(total - rightItemCount, total),
    ];
  }

  return [
    ...range(1, boundaries),
    "...",
    ...range(leftSiblingIndex, rightSiblingIndex),
    "...",
    ...range(total - boundaries + 1, total),
  ];
};
