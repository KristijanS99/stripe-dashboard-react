export const camelize = (s, firstToUpper = true) => {
  const camelized = s.replace(/-./g, (x) => x[1].toUpperCase());

  return firstToUpper
    ? camelized.charAt(0).toUpperCase() + camelized.slice(1)
    : camelized;
};
