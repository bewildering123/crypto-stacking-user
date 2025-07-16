import { motion } from "motion/react";
import { signOut } from "next-auth/react";
import Link from "next/link";

import useUserStore from "@/integrations/zustand/user/user";

import LogOut from "./icons/logout.svg";
import Profile from "./icons/profile.svg";
import Settings from "./icons/settings.svg";
import Transaction from "./icons/transaction.svg";

import styles from "./DropDown.module.scss";

const DropDown = () => {
	const { clearUser } = useUserStore();

	return (
		<motion.div
			className={styles.cont}
			initial={{ scale: 0, zIndex: -1, y: -100, opacity: 0 }}
			animate={{ scale: 1, zIndex: 1, y: 0, opacity: 1 }}
			transition={{ type: "spring", duration: 0.7 }}
			exit={{ scale: 0, zIndex: -1, y: -100, opacity: 0 }}
		>
			<div className={styles.container}>
				<Link href={"/profile"}>
					<Profile /> Profile
				</Link>
				<Link href={"/settings"}>
					<Settings /> Settings
				</Link>
				<Link href={"/transactions"}>
					<Transaction /> Transaction
				</Link>
				<Link
					href={"/"}
					onClick={() => {
						clearUser();
						signOut({
							callbackUrl: "/",
						});
					}}
				>
					<LogOut />
					Log out
				</Link>
			</div>
		</motion.div>
	);
};

export default DropDown;
