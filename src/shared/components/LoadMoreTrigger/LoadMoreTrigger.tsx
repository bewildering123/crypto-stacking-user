import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
	loadMore: () => void;
	hasNextPage: boolean | null | undefined;
	isLoading: boolean;
};

const LoadMoreTrigger = ({ hasNextPage, loadMore, isLoading }: Props) => {
	const { ref, inView, entry } = useInView();
	const [oldY, setOldY] = useState(0);

	React.useEffect(() => {
		if (entry && inView && hasNextPage) {
			if (oldY !== entry.intersectionRect.y) {
				loadMore();
				setOldY(entry.intersectionRect.y);
			}
		}
	}, [inView, loadMore, hasNextPage, isLoading, entry, oldY]);

	return <div ref={ref}>⠀</div>;
};

export default LoadMoreTrigger;
