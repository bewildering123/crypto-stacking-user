"use client";

import { useEffect, useState } from "react";

import { client } from "@/integrations/apollo/client";
import useUserStore from "@/integrations/zustand/user/user";
import Button from "@/shared/components/Button/Button";
import InputWithLabelWithState from "@/shared/components/InputWithLabelWithState/InputWithLabelWithState";
import Notification from "@/shared/components/Notification/Notification";

import WithdrawalModal from "../WithdrawalModal/WithdrawalModal";
import NoWalletModal from "./NoWalletModal/NoWalletModal";
import { createWithdrawMutation } from "./queries/createWithdraw";
import { sendWithdrawCodeMutation } from "./queries/sendWithdrawCode";

import styles from "./WithdrawalForm.module.scss";

const MIN_WITHDRAW = 100;

const WithdrawalForm = () => {
	const [sum, setSum] = useState("");
	const [view, setView] = useState(false);
	const [viewNotification, setViewNotification] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const { user, setUser } = useUserStore();
	const balance = user?.usdt || 0;

	const [errorMsg, setErrorMsg] = useState("");

	const createWithdraw = async (code: string = "") => {
		if (user?.wallet_address === "") {
			setWalletError(true);
			setLoading(false);
			return;
		}

		const res = await client.mutate({
			mutation: createWithdrawMutation,
			variables: { amount: Number(sum), code },
		});

		if (res.data?.createWithdraw) {
			setError(false);
			setView(false);
			setSum("");
			setUser({ ...user, usdt: balance - Number(sum) });
		} else {
			setError(true);
			setErrorMsg("An error occurred when creating a withdrawal request!");
		}

		setViewNotification(true);
		setLoading(false);
	};

	const [walletError, setWalletError] = useState(false);

	const sendWithdrawCode = async () => {
		const res = await client.mutate({ mutation: sendWithdrawCodeMutation });
		if (res.data?.sendWithdrawCode) setView(true);
	};

	useEffect(() => {
		if (!view) {
			setLoading(false);
		}
	}, [view]);

	useEffect(() => {
		if (Number(sum) < MIN_WITHDRAW && sum !== "") {
			setError(true);
			setErrorMsg("Minimum withdrawal amount 100 USDT");
			setViewNotification(true);
		}
	}, [sum]);

	useEffect(() => {
		if (Number(sum) > balance) {
			setError(true);
			setErrorMsg("Insufficient funds in the balance");
			setViewNotification(true);
		}
	}, [sum]);

	return (
		<>
			{walletError && <NoWalletModal setWalletError={setWalletError} />}
			<Notification
				isSuccess={!error}
				message={errorMsg}
				setView={setViewNotification}
				view={viewNotification}
			/>
			{view && (
				<WithdrawalModal createWithdraw={createWithdraw} setView={setView} />
			)}
			<div className={styles.container}>
				<p className={styles.title}>Enter how much you want to withdraw</p>
				<InputWithLabelWithState
					label="Minimum withdrawal amount 100 USDT"
					setValue={setSum}
					value={sum}
					need_match
					error={
						(Number(sum) < MIN_WITHDRAW || Number(sum) > balance) && sum !== ""
					}
				/>
				<Button
					disabled={
						Number(sum) < MIN_WITHDRAW || Number(sum) > balance || loading
					}
					onClick={() => {
						setLoading(true);
						user?.confirmations_by_email
							? sendWithdrawCode()
							: createWithdraw();
					}}
					loading={loading}
				>
					Withdraw
				</Button>
			</div>
		</>
	);
};

export default WithdrawalForm;
