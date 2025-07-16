import clsx from "clsx";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { RemoveScroll } from "react-remove-scroll";

import useUserStore from "@/integrations/zustand/user/user";

import Deposit from "./icons/deposit.svg";
import Exchange from "./icons/exchange.svg";
import LogOut from "./icons/exit.svg";
import FreeCoin from "./icons/free-coin.svg";
import Profile from "./icons/profile.svg";
import Question from "./icons/question.svg";
import Referals from "./icons/refferals.svg";
import Sapper from "./icons/sapper.svg";
import Screen from "./icons/screen.svg";
import Settings from "./icons/settings.svg";
import Transactions from "./icons/transaction.svg";
import Withdraw from "./icons/withdrawal.svg";

import styles from "./MobileMenu.module.scss";

type Props = {
	setView: Dispatch<SetStateAction<boolean>>;
};

const MobileMenu = ({ setView }: Props) => {
	const navigation = usePathname();

	const { clearUser } = useUserStore();

	return (
		<RemoveScroll style={{ width: "100%", marginTop: "-20px" }}>
			<div className={styles.container}>
				<div className={clsx(styles.containerLinks)}>
					<div className={styles.linksContainer}>
						<Link
							href={"/profile"}
							className={clsx(
								styles.link,
								navigation === "/profile" && styles.active,
							)}
							onClick={() => setView(false)}
						>
							<Profile />
							Profile
						</Link>
					</div>
					<div className={styles.linksContainer}>
						<Link
							href={"/deposit"}
							className={clsx(
								styles.link,
								navigation === "/deposit" && styles.active,
							)}
							onClick={() => setView(false)}
						>
							<Deposit />
							Deposit
						</Link>
						<Link
							href={"/exchange"}
							className={clsx(
								styles.link,
								navigation === "/exchange" && styles.active,
							)}
							onClick={() => setView(false)}
						>
							<Exchange />
							Exchange
						</Link>
						<Link
							href={"/withdraw"}
							className={clsx(
								styles.link,
								navigation === "/withdraw" && styles.active,
							)}
							onClick={() => setView(false)}
						>
							<Withdraw />
							Withdraw
						</Link>
					</div>
					<div className={styles.line} />
					<div className={styles.linksContainer}>
						<Link
							href={"/screen"}
							className={clsx(
								styles.link,
								navigation === "/screen" && styles.active,
							)}
							onClick={() => setView(false)}
						>
							<Screen />
							Screen
						</Link>
						<Link
							href={"/sapper"}
							className={clsx(
								styles.link,
								navigation === "/sapper" && styles.active,
							)}
							onClick={() => setView(false)}
						>
							<Sapper />
							Sapper
						</Link>
						<Link
							href={"/guess"}
							className={clsx(
								styles.link,
								navigation === "/guess" && styles.active,
							)}
							onClick={() => setView(false)}
						>
							<Question />
							Guess
						</Link>
					</div>
					<div className={styles.line} />
					<div className={styles.linksContainer}>
						<Link
							href={"/refferals"}
							className={clsx(
								styles.link,
								navigation === "/refferals" && styles.active,
							)}
							onClick={() => setView(false)}
						>
							<Referals />
							Refferals
						</Link>
						<Link
							href={"/free-coin"}
							className={clsx(
								styles.link,
								navigation === "/free-coin" && styles.active,
							)}
							onClick={() => setView(false)}
						>
							<FreeCoin />
							Free coin
						</Link>
					</div>
					<div className={styles.line} />
					<div className={styles.linksContainer}>
						<Link
							href={"/settings"}
							className={clsx(
								styles.link,
								navigation === "/settings" && styles.active,
							)}
							onClick={() => setView(false)}
						>
							<Settings />
							Settings
						</Link>
						<Link
							href={"/transactions"}
							className={clsx(
								styles.link,
								navigation === "/transactions" && styles.active,
							)}
							onClick={() => setView(false)}
						>
							<Transactions />
							Transactions
						</Link>
						<Link
							href={"/"}
							onClick={() => {
								clearUser();
								signOut({
									callbackUrl: "/",
								});
								setView(false);
							}}
							className={clsx(
								styles.link,
								navigation === "/asdasdasdsa" && styles.active,
								styles.svg,
							)}
						>
							<LogOut />
							Log out
						</Link>
					</div>
				</div>
			</div>
		</RemoveScroll>
	);
};

export default MobileMenu;
