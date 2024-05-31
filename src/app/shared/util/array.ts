export function add_to_array_optional<T>(exp: boolean, item: T): T[] {
  if (exp) return [item];
  return [];
}
