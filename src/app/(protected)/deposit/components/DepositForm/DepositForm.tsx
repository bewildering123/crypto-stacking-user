"use client";

import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import Graph from "@/app/components/CalculatorSection/components/Graph/Graph";
import TotalRate from "@/app/components/CalculatorSection/components/TotalRate/TotalRate";
import { client } from "@/integrations/apollo/client";
import useExchangeAics from "@/integrations/zustand/aics/aics";
import { useCalculator } from "@/integrations/zustand/calculator/calculator";
import useUserStore from "@/integrations/zustand/user/user";
import Button from "@/shared/components/Button/Button";
import InputWithLabelWithState from "@/shared/components/InputWithLabelWithState/InputWithLabelWithState";
import Notification from "@/shared/components/Notification/Notification";
import Spinner from "@/shared/components/Spinner/Spinner";

import DepositModal from "../DepositModal/DepositModal";
import {
	confirmDepositMutation,
	createDepositMutation,
	getMinimalDeposit,
} from "./queries/createDeposit";

import styles from "./DepositForm.module.scss";

const DepositForm = () => {
	const [sum, setSum] = useState("");
	const [sumToAmount, setSumToAmount] = useState(0);

	const [view, setView] = useState(false);

	const [loading, setLoading] = useState(false);

	const [error, setError] = useState(false);
	const [viewNotification, setViewNotification] = useState(false);

	const { data, loading: sumLoading } = useQuery(getMinimalDeposit);
	const minimal_sum = (data?.MinimalDeposits?.docs || [])[0]?.minimal_sum || 50;

	const [message, setMessage] = useState("");

	const { exchange_aics } = useExchangeAics();

	const [disabled, setDisabled] = useState(false);

	const [walletAdress, setWalletAdress] = useState("");

	const handleNotification = (error: boolean, msg: string) => {
		setError(error);
		setViewNotification(true);
		setMessage(msg);
		setLoading(false);
	};

	const createDeposit = async () => {
		setLoading(true);

		const res = await client.mutate({
			mutation: createDepositMutation,
			variables: {
				amount: Number(sum),
			},
		});

		if (res.data?.createDeposit) {
			setLoading(false);
			setSumToAmount(res.data.createDeposit.amount || 0);
			setDisabled(false);
			setWalletAdress(res.data.createDeposit.wallet_adress || "");
			setView(true);
		} else {
			handleNotification(
				true,
				"An error occurred when creating a deposit request!",
			);
		}
	};

	const confirmDeposit = async () => {
		const res = await client.mutate({
			mutation: confirmDepositMutation,
		});
		if (res.data?.confirmDeposit) {
			setDisabled(true);
		} else {
			handleNotification(true, "Payment confirmation error!");
		}
	};

	// useEffect(() => {
	// 	if (disabled) {
	// 		setTimeout(() => {
	// 			setView(false);
	// 			setDisabled(false);
	// 			handleNotification(false, "");
	// 		}, 5000);
	// 	}
	// }, [disabled]);

	useEffect(() => {
		if ((Number(sum) < minimal_sum || Number(sum) > 5000) && sum !== "") {
			handleNotification(
				true,
				`You can make a deposit from ${minimal_sum} to 5,000 USDT`,
			);
		} else {
			setViewNotification(false);
		}
	}, [sum]);

	const { user } = useUserStore();

	const { activePoint, button_value, setActivePoint } = useCalculator();

	return (
		<>
			<Notification
				isSuccess={!error}
				message={message}
				setView={setViewNotification}
				view={viewNotification}
			/>
			{view && (
				<DepositModal
					confirmDeposit={confirmDeposit}
					setView={setView}
					setSum={setSum}
					sumToAmount={sumToAmount}
					disabled={disabled}
					setDisabled={setDisabled}
					handleNotification={handleNotification}
					walletAdress={walletAdress}
				/>
			)}
			<div className={styles.container}>
				<div className={styles.inputContainer}>
					{sumLoading ? (
						<Spinner />
					) : (
						<>
							<p className={styles.text}>How much do you want to top up?</p>
							<InputWithLabelWithState
								label={`You can make a deposit from ${minimal_sum} to 5,000 USDT`}
								setValue={setSum}
								value={sum}
								need_match
								error={
									(Number(sum) < minimal_sum || Number(sum) > 5000) &&
									sum !== ""
								}
							/>
							<Button
								loading={loading}
								disabled={Number(sum) < minimal_sum || Number(sum) > 5000}
								onClick={createDeposit}
							>
								Confirm
							</Button>
						</>
					)}
				</div>
				<div className={styles.graph}>
					<div className={styles.topContainer}>
						{/* <Buttons withTotalRate={false} className={styles.buttonContainer} /> */}
						<TotalRate className={styles.totalRate} hat={user?.hat || 0} />
					</div>
					<Graph
						activePoint={activePoint}
						button_value={button_value}
						currentValue="USDT"
						hatValue={user?.hat || 0}
						secondValue={Number(sum) / exchange_aics}
						setActivePoint={setActivePoint}
					/>
				</div>
			</div>
		</>
	);
};

export default DepositForm;
