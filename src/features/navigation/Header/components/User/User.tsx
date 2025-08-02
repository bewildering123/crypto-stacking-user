"use client";

import { Dropdown, MenuProps } from "antd";
import cx from "clsx";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { client } from "@/integrations/apollo/client";
import useUserStore from "@/integrations/zustand/user/user";
import useView from "@/integrations/zustand/view/view";
import Button from "@/shared/components/Button/Button";
import Spinner from "@/shared/components/Spinner/Spinner";

import UserBalance from "./components/UserBalance/UserBalance";
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

	const items: MenuProps["items"] = [
		{
			key: "1",
			label: (
				<Link href={"/profile"}>
					<Image
						src="/img/icons/user-square.svg"
						width={20}
						height={20}
						alt="user"
					/>
					Profile
				</Link>
			),
		},
		{
			key: "2",
			label: (
				<Link href={"/transactions"}>
					<Image
						src="/img/icons/form.svg"
						width={20}
						height={20}
						alt="transaction"
					/>
					Transaction History
				</Link>
			),
		},
		{
			key: "3",
			label: (
				<Link href={"/settings"}>
					<Image
						src="/img/icons/form.svg"
						width={20}
						height={20}
						alt="transaction"
					/>
					Settings
				</Link>
			),
		},
		{
			key: "4",
			label: (
				<Link
					href={"/"}
					onClick={() => {
						clearUser();
						signOut({
							callbackUrl: "/",
						});
					}}
				>
					<Image
						src="/img/icons/box-arrow-right.svg"
						width={20}
						height={20}
						alt="log out"
					/>
					Log Out
				</Link>
			),
		},
	];

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

	return (
		<div className={cx(styles.container)}>
			{(status as any) === "loading" ? (
				<Spinner />
			) : user !== null && data ? (
				<div className={styles.userContainer}>
					<UserBalance />
					<Dropdown
						open={view}
						menu={{ items }}
						className={styles.userDropdown}
					>
						<Button
							className={`${styles.userButton}`}
							onClick={() => setView(!view)}
						>
							<Image
								src="/img/icons/user-check-circle.svg"
								width={20}
								height={20}
								alt="user"
							/>
							<div className={`${styles.userButtonName}`}>
								@{data.user?.name}
							</div>
							<Image
								src="/img/icons/chevron.svg"
								width={24}
								height={24}
								alt="chevron"
								className={`${styles.userButtonArrow} ${view ? "active" : ""}`}
							/>
						</Button>
					</Dropdown>
				</div>
			) : (
				<>
					<Button href="/sign-in">Sign in</Button>
					<Button href="/register" color="green">
						Registration
					</Button>
				</>
			)}
		</div>
	);
};

export default User;
