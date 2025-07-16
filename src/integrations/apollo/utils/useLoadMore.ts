import { deepmerge } from "deepmerge-ts";
import { useCallback, useState } from "react";

export interface UseLoadMoreOptions {
	// eslint-disable-next-line @typescript-eslint/ban-types
	fetchMore: Function;
	endCursor: number | null;
}

export function useLoadMore(options: UseLoadMoreOptions) {
	const { fetchMore, endCursor } = options;

	const [loading, setLoading] = useState(false);

	const loadMore = useCallback(() => {
		setLoading(true);

		fetchMore({
			variables: {
				page: endCursor,
			},

			updateQuery(previousResult: any, { fetchMoreResult }: any) {
				setLoading(false);

				const r = deepmerge(previousResult, fetchMoreResult);
				return r;
			},
		});
	}, [fetchMore, endCursor]);

	return {
		loadMore,
		loading,
	};
}
