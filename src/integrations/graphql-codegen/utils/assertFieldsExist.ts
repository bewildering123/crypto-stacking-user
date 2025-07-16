export function assertFieldsExistPredicate<T, K extends keyof T>(...keys: K[]) {
	return (obj: T): obj is T & { [TK in K]-?: NonNullable<T[TK]> } => {
		return keys.every((key) => {
			const value = obj[key];
			return value !== undefined && value !== null;
		});
	};
}
