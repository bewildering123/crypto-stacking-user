import { create } from "zustand";

interface CalculatorStore {
	button_value: string;
	setButtonValue: (value: string) => void;
	hatValue: number;
	setHatValue: (value: number) => void;
	secondValue: number;
	setSecondValue: (value: number) => void;
	activePoint: { x: number; y: number } | null;
	setActivePoint: (data: { x: number; y: number } | null) => void;
	selectedValue: string;
	setSelectedValue: (value: string) => void;
}

export const useCalculator = create<CalculatorStore>((set) => ({
	button_value: "Day",
	setButtonValue: (value) =>
		set((store) => ({ ...store, button_value: value })),
	hatValue: 11213,
	secondValue: 2500,
	setHatValue: (value) => set((store) => ({ ...store, hatValue: value })),
	setSecondValue: (value) => set((store) => ({ ...store, secondValue: value })),
	activePoint: null,
	setActivePoint: (data) => set((store) => ({ ...store, activePoint: data })),
	selectedValue: "USDT",
	setSelectedValue: (value) =>
		set((store) => ({ ...store, selectedValue: value })),
}));
