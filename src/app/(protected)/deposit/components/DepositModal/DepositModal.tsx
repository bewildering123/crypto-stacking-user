"use client";

import { useMutation } from "@apollo/client";
import clsx from "clsx";
import { QRCodeSVG } from "qrcode.react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";

import Back from "@/app/(protected)/withdraw/components/WithdrawalModal/components/Back/Back";
import useUserStore from "@/integrations/zustand/user/user";
import Button from "@/shared/components/Button/Button";
import EtherContainer from "@/shared/components/EtherContainer/EtherContainer";
import Spinner from "@/shared/components/Spinner/Spinner";

import Copy from "./icons/copy.svg";
import Success from "./icons/success.svg";
import { completeDepositMutation } from "./queries/completeDeposit";

import styles from "./DepositModal.module.scss";

type Props = {
	setView: Dispatch<SetStateAction<boolean>>;
	sumToAmount: number;
	disabled: boolean;
	confirmDeposit: () => Promise<void>;
	setDisabled: Dispatch<SetStateAction<boolean>>;
	handleNotification: (error: boolean, msg: string) => void;
	setSum: Dispatch<SetStateAction<string>>;
	walletAdress: string;
};

const DepositModal = ({
	setView,
	sumToAmount,
	disabled,
	confirmDeposit,
	setDisabled,
	handleNotification,
	setSum,
	walletAdress,
}: Props) => {
	const [success, setSuccess] = useState(false);

	const { user, setUser } = useUserStore();

	const [mutateFunction, { data }] = useMutation(completeDepositMutation);

	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (!disabled) return;

		intervalRef.current = setInterval(() => {
			mutateFunction();
		}, 5000);

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
		};
	}, [disabled, mutateFunction]);

	useEffect(() => {
		if (data?.completeDeposit?.status === true) {
			setView(false);
			setDisabled(false);
			setSum("");
			handleNotification(false, "");
			setUser({
				...user,
				usdt: data.completeDeposit.usdt || 0,
			});
		}
	}, [data]);

	return (
		<RemoveScroll>
			<div className={styles.container} onClick={() => setView(false)}>
				<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
					<div className={styles.topContainer}>
						<Back onClick={() => setView(false)} />
						<div className={styles.ether}>
							<EtherContainer />
						</div>
					</div>
					<p className={styles.title}>Replenishment</p>
					{disabled ? (
						<div className={styles.spinner}>
							<Spinner />
						</div>
					) : (
						<>
							<div className={styles.qr}>
								<QRCodeSVG value={walletAdress} />
							</div>
							<div className={styles.addressContainer}>
								<p className={styles.text}>
									Address for replenishment of USDT:
								</p>
								<div
									className={styles.copy}
									onClick={() => {
										navigator.clipboard.writeText(walletAdress);
										setSuccess(true);
									}}
								>
									{success ? <Success /> : <Copy />}
									<p>{walletAdress}</p>
								</div>
								<p className={styles.text}>
									Amount to deposit: <span>{sumToAmount}</span>
								</p>
								<p className={styles.text} style={{ color: "red" }}>
									You can make a deposit with a margin of error of 1 USDT
								</p>
							</div>
						</>
					)}
					<div className={styles.textAndButtonContainer}>
						{!disabled && (
							<Button
								disabled={disabled}
								handleClick={async () => {
									await confirmDeposit();
								}}
								text="Confirm payment"
							/>
						)}
						<p className={clsx(!disabled && styles.red)}>
							{!disabled
								? "Click on the button only after payment!"
								: "Payment verification, Please wait!"}
						</p>
					</div>
				</div>
			</div>
		</RemoveScroll>
	);
};

export default DepositModal;
