export function removeEmpty<T>(
	array: (T | null | undefined | "")[] | null | undefined,
): T[] {
	return array ? (array.filter(Boolean) as T[]) : [];
}
