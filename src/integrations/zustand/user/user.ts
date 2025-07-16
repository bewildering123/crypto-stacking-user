import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface UserState {
	email?: string;
	password?: string;
	login?: string;
	name?: string;
	country?: string;
	hat?: number;
	usdt?: number;
	aics?: number;
	total_mined?: number;
	sapper_total_time?: number;
	created_by_admin?: boolean;
	total_mined_screen?: number;
	today_mined_screen?: number;
	two_factor_authentification?: boolean;
	confirmations_by_email?: boolean;
	can_get_free_coin?: boolean;
	refferal_code?: string;
	wallet_address?: string;
	id?: number;
	total_withdraw?: number;
	createdAt?: any;
}

interface UserStore {
	user: UserState | null;
	setUser: (user: UserState | null) => void;
	resetUser: () => void;
	setHat: (score: number) => void;
	setFreeCoin: () => void;
	clearUser: () => void;
}

const useUserStore = create<UserStore>()(
	persist(
		(set) => ({
			user: null,
			setUser: (user) =>
				set(() => ({
					user: user
						? {
								...user,
								usdt: Math.floor((user.usdt || 0) * 10000) / 10000,
								hat: Math.floor((user.hat || 0) * 10000) / 10000,
								aics: Math.floor((user.aics || 0) * 10000) / 10000,
							}
						: null,
				})),
			resetUser: () => set(() => ({ user: null })),
			setHat: (score) =>
				set((state) => ({
					user: state.user
						? {
								...state.user,
								hat: Number(((state.user.hat || 0) + score).toFixed(4)),
								today_mined_screen:
									(state.user.today_mined_screen || 0) + score,
								total_mined_screen:
									(state.user.total_mined_screen || 0) + score,
							}
						: null,
				})),
			setFreeCoin: () =>
				set((state) => ({
					user: state.user ? { ...state.user, can_get_free_coin: false } : null,
				})),
			clearUser: () => set((store) => ({ ...store, user: null })),
		}),
		{
			name: "user",
			partialize: (state) => ({ user: state.user }),
			storage: {
				getItem: (key) => {
					const storedValue = localStorage.getItem(key);
					return storedValue ? JSON.parse(storedValue) : null;
				},
				setItem: (key, value) => {
					localStorage.setItem(key, JSON.stringify(value));
				},
				removeItem: (key) => {
					localStorage.removeItem(key);
				},
			},
		},
	),
);

export default useUserStore;
