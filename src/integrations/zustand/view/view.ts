import { create } from "zustand";

interface ViewStore {
	view: boolean;
	setView: (value: boolean) => void;
}

const useView = create<ViewStore>((set) => ({
	view: true,
	setView: (value) =>
		set((store) => ({
			...store,
			view: value,
		})),
}));

export default useView;
