export const membersFormat = (value: number | null) => {
  if (!value && value !== 0) return "";
  if (value === 0) return "0";
  if (value < 1000) return value + "";
  if (value < 1_000_000) return (value / 1000).toFixed(0) + "K";
  if (value < 1_000_000_000) return (value / 1_000_000).toFixed(1) + "M";
  return (value / 1_000_000_000).toFixed(0) + "B";
};

export const removeUnderscore = (stringValue: string | undefined) =>
  stringValue ? stringValue.replaceAll("_", " ") : "";
