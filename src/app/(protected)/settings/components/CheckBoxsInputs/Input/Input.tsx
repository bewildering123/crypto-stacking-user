import clsx from "clsx";
import React, { useState } from "react";

import { resetCode } from "@/app/(registration)/email-verify/queries/queries";
import { client } from "@/integrations/apollo/client";
import useUserStore from "@/integrations/zustand/user/user";
import ConfirmEmail from "@/shared/components/ConfirmEmail/ConfirmEmail";
import Spinner from "@/shared/components/Spinner/Spinner";

import CheckMark from "../icons/arrow.svg";
import { changeSettings } from "../queries/changeSettings";

import styles from "./Input.module.scss";

type Props = {
	title: string;
	initialValue: boolean;
	handleSetNotification: (error: boolean) => void;
	secondValue: boolean;
	flag: boolean;
};

const Input = ({
	title,
	initialValue,
	handleSetNotification,
	secondValue,
	flag,
}: Props) => {
	const [loading, setLoading] = useState(false);
	const { user, setUser } = useUserStore();
	const [viewConfirm, setViewConfirm] = useState(false);
	const [value, setValue] = useState(initialValue);
	const handleSendCode = async () => {
		await client.mutate({
			mutation: resetCode,
			variables: {
				email: user?.email || "",
				confirm: true,
			},
		});
		setViewConfirm(true);
	};

	const handleChangeSettings = async () => {
		const variables = {
			confirmations_by_email: flag ? value : secondValue,
			two_factor_authentification: !flag ? value : secondValue,
		};
		const res = await client.mutate({
			mutation: changeSettings,
			variables,
		});
		if (res.data) {
			handleSetNotification(false);
		} else {
			handleSetNotification(true);
		}
		setUser({
			...user,
			...variables,
		});
		setViewConfirm(false);
		setLoading(false);
	};

	// useEffect(() => {}, [viewConfirm])

	return (
		<>
			{viewConfirm && (
				<ConfirmEmail
					handle={() => handleChangeSettings()}
					setView={setViewConfirm}
					handleSetNotification={handleSetNotification}
					disableFn={() => {
						setLoading(false);
					}}
				/>
			)}
			<div className={styles.container}>
				<div className={styles.input} onClick={() => user && setValue(!value)}>
					<div className={clsx(styles.checkbox, value && styles.active)}>
						{user ? value && <CheckMark /> : <Spinner />}
					</div>
					<p>{title}</p>
				</div>
				<button
					onClick={() => {
						setLoading(true);
						if (initialValue) {
							handleSendCode();
						} else {
							handleChangeSettings();
						}
					}}
				>
					{loading ? <Spinner /> : "Save"}
				</button>
			</div>
		</>
	);
};

export default Input;
