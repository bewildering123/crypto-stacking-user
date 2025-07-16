import { create } from "zustand";

export interface ILeaderBoard {
	name: string;
	bet: number;
	winning: number;
}

interface ILeaderBoardStore {
	leaderboard: ILeaderBoard[];
	setLeaderBoards: (data: ILeaderBoard[]) => void;
	clearLeaderBoard: () => void;
}

export const useLeaderboard = create<ILeaderBoardStore>((set) => ({
	leaderboard: [],
	clearLeaderBoard: () => set((store) => ({ ...store, leaderboard: [] })),
	setLeaderBoards: (data) => set((store) => ({ ...store, leaderboard: data })),
}));
