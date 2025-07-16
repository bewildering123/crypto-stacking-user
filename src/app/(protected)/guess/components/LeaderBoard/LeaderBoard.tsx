import { useSession } from "next-auth/react";
import { memo, useEffect, useRef, useState } from "react";

import { client } from "@/integrations/apollo/client";
import { useLeaderboard } from "@/integrations/zustand/leaderboard/leaderboard";

import FirstIcon from "./icons/first.svg";
import SecondIcon from "./icons/second.svg";
import ThirdIcon from "./icons/third.svg";
import WinningIcon from "./icons/winningIcon.svg";
import { getLeaderBoard, unwrappedLeaderboard } from "./queries/getLeaderBoard";

import styles from "./LeaderBoard.module.scss";

const LeaderBoard = memo(() => {
	const {
		setLeaderBoards: setPrevState,
		leaderboard: prevState,
		clearLeaderBoard,
	} = useLeaderboard();
	const [leaderboardFiltered, setLeaderboardFiltered] = useState<
		{
			name: string;
			bet: number;
			winning: number;
		}[]
	>([]);

	const [isFirst, setIsFirst] = useState(true);

	const { data } = useSession();

	const handleGetLeaderboard = async () => {
		const res = await client.query({
			query: getLeaderBoard,
			variables: {
				prevState: prevState || [],
			},
			fetchPolicy: "network-only",
		});
		setPrevState(unwrappedLeaderboard(res.data));
		setLeaderboardFiltered(
			unwrappedLeaderboard(res.data)
				.sort((a, b) => b.winning - a.winning)
				.slice(0, 3),
		);
	};

	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (isFirst) {
			clearLeaderBoard();
			handleGetLeaderboard();
			setIsFirst(false);
			return;
		}
		if (prevState.length === 0) {
			handleGetLeaderboard();

			return;
		} else {
			intervalRef.current = setInterval(() => {
				handleGetLeaderboard();
			}, 3000);

			return () => {
				if (intervalRef.current) {
					clearInterval(intervalRef.current);
					intervalRef.current = null;
				}
			};
		}
	}, [handleGetLeaderboard, prevState, isFirst]);

	return (
		<div className={styles.winners}>
			<div className={styles.winnersTitle}>
				Winners <WinningIcon />
			</div>
			<div className={styles.usersContainer}>
				{prevState.map((el, i) => {
					return (
						<div className={styles.user} key={i}>
							<div className={styles.placeContainer}>
								{leaderboardFiltered[0]?.name === el.name && <FirstIcon />}
								{leaderboardFiltered[1]?.name === el.name && <SecondIcon />}
								{leaderboardFiltered[2]?.name === el.name && <ThirdIcon />}
								<p
									className={styles.nick}
									style={{
										paddingLeft: !leaderboardFiltered.find(
											(item) => item.name === el.name,
										)
											? "47px"
											: "",
										color: data?.user?.name === el.name ? "white" : "",
									}}
								>
									{el.name}
								</p>
							</div>
							<p className={styles.money}>{el.winning} AISC</p>
						</div>
					);
				})}
			</div>
		</div>
	);
});

LeaderBoard.displayName = "LeaderBoard";

export default LeaderBoard;
