export const getBoard = (
	created_by_admin: boolean,
	sapper_total_time: number,
) => {
	const board = new Array(50).fill(5);

	for (let i = 1; i < 50; i++) {
		if (board[i - 1] === 1) {
			board[i] = 5;
		} else {
			board[i] = board[i - 1] - 1;
		}
	}

	if (
		(created_by_admin && sapper_total_time) ||
		(0 <= 300 && Math.random() < 0.3)
	) {
		board[board.length - 1] = 3;
		board[board.length - 2] = 2;
		board[board.length - 3] = 5;
		board[board.length - 4] = 1;
		board[board.length - 5] = 1;
	}

	return board;
};
