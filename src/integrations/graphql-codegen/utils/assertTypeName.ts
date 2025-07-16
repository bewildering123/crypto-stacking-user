export function assertTypeName<
	O extends { __typename?: string },
	K extends O["__typename"],
>(obj: O | undefined, typename: K): obj is Extract<O, { __typename?: K }> {
	return obj?.__typename === typename;
}

/**
 * Используется, чтобы сузить массив union-типов
 *
 * @example
 * const states = pageDetails.states.nodes.filter(assertTypeNamePredicate('State'))
 */
export function assertTypeNamePredicate<
	O extends { __typename?: string },
	K extends O["__typename"],
>(typename: K) {
	return (obj: O | undefined): obj is Extract<O, { __typename?: K }> => {
		return obj?.__typename === typename;
	};
}

export function assertTypeNames<
	O extends { __typename?: string },
	K extends O["__typename"],
>(obj: O | undefined, typenames: K[]): obj is Extract<O, { __typename?: K }> {
	if (!obj) {
		return false;
	}

	return typenames.some((typename) => obj.__typename === typename);
}
