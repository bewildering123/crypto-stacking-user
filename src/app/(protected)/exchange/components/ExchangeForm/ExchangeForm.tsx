"use client";

import { useState } from "react";

import { client } from "@/integrations/apollo/client";
import useExchangeAics from "@/integrations/zustand/aics/aics";
import useUserStore from "@/integrations/zustand/user/user";
import InputWithLabelWithState from "@/shared/components/InputWithLabelWithState/InputWithLabelWithState";
import Notification from "@/shared/components/Notification/Notification";
import Spinner from "@/shared/components/Spinner/Spinner";

import { exchangeMutation } from "../../queries/exchange";
import Arrows from "./icons/arrows.svg";

import styles from "./ExchangeForm.module.scss";

const ExchangeForm = () => {
	const [firstValue, setFirstValue] = useState(0);
	const [secondValue, setSecondValue] = useState(0);
	const [loading, setLoading] = useState(false);
	const [switched, setSwitched] = useState(true);
	const { setUser, user } = useUserStore();
	const { exchange_aics } = useExchangeAics();
	const [view, setView] = useState(false);
	const [error, setError] = useState(false);

	const balance = switched ? user?.aics || 0 : user?.usdt || 0;

	const handleFirstValueChange = (value: number) => {
		const correctedValue = Math.min(value, balance);
		setFirstValue(correctedValue);

		setSecondValue(
			switched
				? Number((correctedValue * exchange_aics).toFixed(4))
				: Number((correctedValue / exchange_aics).toFixed(4)),
		);
	};

	const handleSecondValueChange = (value: number) => {
		setSecondValue(value);

		setFirstValue(
			switched
				? Number((value / exchange_aics).toFixed(4))
				: Number((value * exchange_aics).toFixed(4)),
		);
	};

	const toggleSwitch = () => {
		setSwitched(!switched);
		setFirstValue(secondValue);
		setSecondValue(firstValue);
	};

	const exchangeMoney = async () => {
		setLoading(true);
		setView(false);

		const res = await client.mutate({
			mutation: exchangeMutation,
			variables: {
				aics: switched ? Number(firstValue) : 0,
				usdt: switched ? 0 : Number(firstValue),
			},
		});

		if (res.data?.exchange) {
			setUser({
				...user,
				aics: res.data.exchange.aics || 0,
				usdt: res.data.exchange.usdt || 0,
			});

			setFirstValue(0);
			setSecondValue(0);
			setView(true);
			setError(false);
		} else {
			setError(true);
			setView(true);
			setFirstValue(0);
			setSecondValue(0);
		}
		setLoading(false);
	};

	return (
		<div className={styles.container}>
			<Notification
				isSuccess={!error}
				message="Couldn't make an exchange"
				setView={setView}
				view={view}
			/>
			<div className={styles.inputsContainer}>
				<InputWithLabelWithState
					label={switched ? "AISC" : "USDT"}
					setValue={handleFirstValueChange}
					value={firstValue}
					need_match={true}
					error={firstValue > balance}
				/>
				<span onClick={toggleSwitch}>
					<Arrows />
				</span>
				<InputWithLabelWithState
					label={!switched ? "AISC" : "USDT"}
					setValue={handleSecondValueChange}
					value={secondValue}
					need_match={true}
				/>
			</div>
			<button
				onClick={exchangeMoney}
				disabled={loading || firstValue === 0 || firstValue > balance}
			>
				{loading ? <Spinner /> : "Exchange"}
			</button>
		</div>
	);
};

export default ExchangeForm;
