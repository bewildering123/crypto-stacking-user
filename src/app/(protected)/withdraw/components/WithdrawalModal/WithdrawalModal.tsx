"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";

import { resetCode } from "@/app/(registration)/email-verify/queries/queries";
import { client } from "@/integrations/apollo/client";
import useUserStore from "@/integrations/zustand/user/user";
import Button from "@/shared/components/Button/Button";
import InputWithLabelWithState from "@/shared/components/InputWithLabelWithState/InputWithLabelWithState";

import Back from "./components/Back/Back";

import styles from "./WithdrawalModal.module.scss";

type Props = {
	setView: Dispatch<SetStateAction<boolean>>;
	createWithdraw: (code?: string) => Promise<void>;
};

const WithdrawalModal = ({ setView, createWithdraw }: Props) => {
	const { user } = useUserStore();

	const [code, setCode] = useState("");

	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		if (disabled) {
			setTimeout(() => {
				setDisabled(false);
			}, 60000);
		}
	}, [disabled]);

	return (
		<RemoveScroll>
			<div className={styles.container}>
				<div className={styles.modal}>
					<Back onClick={() => setView(false)} />
					<p className={styles.text}>
						A withdrawal confirmation code has been sent to your email: <br />
						<span>{user?.email}</span>
					</p>
					<div className={styles.inputContainer}>
						<InputWithLabelWithState
							label="Code:"
							setValue={setCode}
							value={code}
							need_match
						/>
						<div className={styles.buttons}>
							<button
								className={styles.resetCodeButton}
								disabled={disabled}
								onClick={async () => {
									await client.mutate({
										mutation: resetCode,
										variables: {
											email: user?.email || "",
											confirm: true,
										},
									});
									setDisabled(true);
								}}
							>
								Reset code
							</button>
							<Button
								disabled={code.length !== 6}
								handleClick={() => createWithdraw(code)}
								text="Register"
							/>
						</div>
					</div>
				</div>
			</div>
		</RemoveScroll>
	);
};

export default WithdrawalModal;
