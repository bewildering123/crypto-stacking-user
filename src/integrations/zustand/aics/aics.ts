import { create } from "zustand";

interface ExchangeAicsStore {
	exchange_aics: number;
	setExhange: (value: number) => void;
}

const useExchangeAics = create<ExchangeAicsStore>((set) => ({
	exchange_aics: 0,
	setExhange: (value) =>
		set((store) => ({
			...store,
			exchange_aics: value,
		})),
}));

export default useExchangeAics;
