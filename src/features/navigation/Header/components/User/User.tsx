"use client";

import cx, { clsx } from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { client } from "@/integrations/apollo/client";
import { useMobileDetect } from "@/integrations/hooks/useMobile";
import useUserStore from "@/integrations/zustand/user/user";
import useView from "@/integrations/zustand/view/view";
import Spinner from "@/shared/components/Spinner/Spinner";

import DropDown from "./components/DropDown/DropDown";
import Balance from "./icons/balance.svg";
import Eye from "./icons/eye.svg";
import Hand from "./icons/hand.svg";
import { getMe, unwrappedUser } from "./queries/queries";

import styles from "./User.module.scss";

type Props = {
	need?: boolean;
	setMenu?: Dispatch<SetStateAction<boolean>>;
};

const User = ({ need, setMenu }: Props) => {
	const { data, status } = useSession();

	const [view, setView] = useState(false);

	const { view: viewComponent } = useView();

	const { setUser, user, clearUser } = useUserStore();

	const isMobile = useMobileDetect();

	const [eyeActive, setEyeActive] = useState(true);

	useEffect(() => {
		const getData = async () => {
			if (data?.user) {
				try {
					const userData = await client.query({
						query: getMe,
						fetchPolicy: "network-only",
					});
					setUser(unwrappedUser(userData.data));
				} catch (err) {
					clearUser();
					signOut({
						redirect: true,
						callbackUrl: "/",
					});
				}
			}
		};
		getData();
	}, [data]);

	const getValue = (num?: number, mobile?: boolean) => {
		const number = Math.floor((num || 0) * 10000) / 10000;
		if (eyeActive) {
			return mobile ? Math.floor(number) : number;
		}
		return "*".repeat(number.toString().length);
	};

	return (
		<div className={cx(styles.container, need && !user && styles.none)}>
			{(status as any) === "loading" ? (
				<Spinner />
			) : user !== null && data ? (
				<div className={styles.userContainer}>
					<div className={styles.moneyContainer}>
						<Balance />

						<div>
							<p>{getValue(user.aics)} AISC</p>
							<p className={styles.mobile}>{getValue(user.aics, true)} AISC</p>
							<span>{getValue(user.hat)} HAT</span>
							<span className={styles.mobile}>
								{getValue(user.hat, true)} HAT
							</span>
							<span>{getValue(user.usdt)} USDT </span>
							<span className={styles.mobile}>
								{getValue(user.usdt, true)} USDT{" "}
							</span>
						</div>
						<div className={styles.eye}>
							<Eye onClick={() => setEyeActive(!eyeActive)} />
						</div>
					</div>
					<Link
						href={(isMobile && "/profile") || ""}
						onMouseEnter={() => setView(true)}
						onMouseLeave={() => setView(false)}
						onClick={() => isMobile && setMenu && setMenu(false)}
						className={clsx(styles.nameContainer, need && styles.none)}
					>
						<Hand />

						<p>
							Hello <span>{data.user?.name}</span>
						</p>
					</Link>
					<AnimatePresence>
						{view && (
							<div
								onMouseEnter={() => setView(true)}
								onMouseLeave={() => setView(false)}
								className={styles.dropdownContainer}
							>
								<DropDown />
							</div>
						)}
					</AnimatePresence>
				</div>
			) : (
				(!need || viewComponent) && (
					<>
						<motion.a
							whileHover={{ scale: 1.03 }}
							href={"/register"}
							className={styles.registerButton}
						>
							Buy now
						</motion.a>
						<motion.a
							whileHover={{ scale: 1.03 }}
							href={"/sign-in"}
							className={styles.signInButton}
						>
							Sign in
						</motion.a>
					</>
				)
			)}
		</div>
	);
};

export default User;
