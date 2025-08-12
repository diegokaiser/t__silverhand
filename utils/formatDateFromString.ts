export type DateFormat =
  | "MMM dd, yyyy"
  | "dd 'de' MMMM, yyyy"
  | "MM/dd/yyyy"
  | "dd/MM/yyyy"
  | "MM/dd/yy"
  | "dd/MM/yy"
  | "hh:mm";

export function formatDateFromString(
  dateInput: string | Date,
  format: DateFormat,
  locale: string = "en-US"
): string {
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string");
  }

  switch (format) {
    case "MMM dd, yyyy":
      return new Intl.DateTimeFormat(locale, {
        month: "short",
        day: "2-digit",
        year: "numeric"
      }).format(date);

    case "dd 'de' MMMM, yyyy":
      return new Intl.DateTimeFormat(locale, {
        day: "2-digit",
        month: "long",
        year: "numeric"
      }).format(date);

    case "MM/dd/yyyy":
      return `${String(date.getMonth() + 1).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")}/${date.getFullYear()}`;

    case "dd/MM/yyyy":
      return `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}`;

    case "MM/dd/yy":
      return `${String(date.getMonth() + 1).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")}/${String(date.getFullYear()).slice(-2)}`;

    case "dd/MM/yy":
      return `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${String(date.getFullYear()).slice(-2)}`;
    
    case "hh:mm":
      return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;

    default:
      throw new Error(`Unsupported format: ${format}`);
  }
}
