type ClassValue = string | false | null | undefined;

/** Menggabungkan nama class dan mengabaikan nilai kosong. */
export function cx(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
