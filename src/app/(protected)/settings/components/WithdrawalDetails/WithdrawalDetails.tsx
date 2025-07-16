"use client";

import { useEffect, useState } from "react";

import { resetCode } from "@/app/(registration)/email-verify/queries/queries";
import { client } from "@/integrations/apollo/client";
import { checkWalletExist } from "@/integrations/tron/checkWallet";
import useUserStore from "@/integrations/zustand/user/user";
import ConfirmEmail from "@/shared/components/ConfirmEmail/ConfirmEmail";
import Notification from "@/shared/components/Notification/Notification";
import Spinner from "@/shared/components/Spinner/Spinner";

import InputWithLabelWithState from "./InputWithLabelWithState/InputWithLabelWithState";
import { changeWalletAddressMutation } from "./queries/changeWalletAddress";

import styles from "./WithdrawalDetails.module.scss";

const WithdrawalDetails = () => {
	const [trc, setTrc] = useState("");

	const { user, setUser } = useUserStore();
	const [isChanged, setIsChanged] = useState(false);
	const [isEditing, setIsEditing] = useState(false);

	const handleSendCode = async () => {
		await client.mutate({
			mutation: resetCode,
			variables: {
				email: user?.email || "",
				confirm: true,
			},
		});
		setViewEmail(true);
		setLoading(false);
	};

	const [error, setError] = useState(false);
	const [view, setView] = useState(false);
	const [viewEmail, setViewEmail] = useState(false);
	const [errorMes, setErrorMes] = useState("");

	const [loading, setLoading] = useState(false);

	const handleChangePrivateKey = async () => {
		setLoading(true);
		const isExist = await checkWalletExist(trc);
		if (isExist) {
			setIsEditing(false);
			const res = await client.mutate({
				mutation: changeWalletAddressMutation,
				variables: {
					wallet_address: trc,
				},
			});
			if (res.data?.changeWalletAddress) {
				setError(false);
				setIsChanged(false);
				setIsEditing(false);
				setUser({ ...user, wallet_address: trc });
			} else {
				setError(true);
				setErrorMes("An error occurred while saving the key!");
			}
		} else {
			setError(true);
			setErrorMes("A wallet with this key was not found on the Tron network!");
		}
		setView(true);
		setViewEmail(false);
		setLoading(false);
	};

	useEffect(() => {
		if (user?.wallet_address) {
			setTrc(user.wallet_address);
		}
	}, [user?.wallet_address]);

	return (
		<div className={styles.container}>
			{viewEmail && (
				<ConfirmEmail
					handleSetNotification={(error) => {
						setError(error);
						setErrorMes("Wrong code!");
					}}
					handle={handleChangePrivateKey}
					setView={setViewEmail}
					disableFn={() => setLoading(false)}
				/>
			)}
			<Notification
				view={view}
				isSuccess={!error}
				message={errorMes}
				setView={setView}
			/>
			<p className={styles.title}>Withdrawal details</p>
			<div className={styles.inputContainer}>
				<InputWithLabelWithState
					isEditing={isEditing}
					setIsEditing={setIsEditing}
					label="USDT TRC20 Wallet Address"
					setValue={setTrc}
					value={trc || ""}
					isChanged={isChanged}
					setIsChanged={setIsChanged}
				/>
				<button
					onClick={() => {
						setLoading(true);
						if (user?.confirmations_by_email) {
							handleSendCode();
						} else {
							handleChangePrivateKey();
						}
					}}
				>
					{loading ? <Spinner /> : "Save"}
				</button>
			</div>
		</div>
	);
};

export default WithdrawalDetails;
