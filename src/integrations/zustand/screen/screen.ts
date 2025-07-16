import { create } from "zustand";

interface ScreenStore {
	setHatBalance: (score: number) => void;
	hatBalance: number;
	resetBalance: () => void;
	last_move: number;
	start_move: number;
	setStartMove: () => void;
	session_start: boolean;
}

const useScreen = create<ScreenStore>((set) => ({
	hatBalance: 0,
	setHatBalance: (score) =>
		set((state) => ({
			...state,
			hatBalance: score,
			last_move: Date.now(),
			session_start: true,
		})),
	resetBalance: () =>
		set((state) => ({
			...state,
			hatBalance: 0,
			last_move: 0,
			start_move: 0,
			session_start: false,
		})),
	last_move: 0,
	start_move: 0,
	setStartMove: () =>
		set((state) => ({
			...state,
			start_move: Date.now(),
		})),
	session_start: false,
}));

export default useScreen;
