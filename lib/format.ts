export const formatEuroPrice = (price: number | string) => {
  const value =
    typeof price === "string" ? Number(price.replace(",", ".")) : price;

  if (Number.isNaN(value)) return "";

  return (
    new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value) + ",-"
  );
};

export const formatArea = (area: number | null) => {
  if (area == null) return "0";
  return new Intl.NumberFormat("nl-NL").format(area);
};

function formatFeature(feature: string): string {
  if (!feature) return "";

  return feature
    .toLowerCase() // make all lowercase
    .replace(/_/g, " ") // replace underscores with spaces
    .replace(/^\w/, (c) => c.toUpperCase()); // capitalize first letter
}

export function formatFeatures(features: string[] = []): string {
  return features.map(formatFeature).join(", ");
}

export function slugify(text: string): string {
  return text
    .toString()
    .normalize("NFD") // split accents from letters
    .replace(/[\u0300-\u036f]/g, "") // remove accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric with "-"
    .replace(/^-+|-+$/g, ""); // remove leading/trailing "-"
}

export function toKebab(str: string) {
  return str
    .normalize("NFD") // split accents from letters
    .replace(/\p{Diacritic}/gu, "") // remove diacritics (requires u flag)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // replace spaces with -
    .replace(/-+/g, "-"); // collapse multiple -
}

export function formatEnumString(str: string) {
  const spaced = str.replace(/([A-Z])/g, " $1").trim();
  const words = spaced.toLowerCase().split(" ");
  if (words.length === 0) return "";
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  return words.join(" ");
}
