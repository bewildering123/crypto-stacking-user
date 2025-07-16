"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";

import { resetCode } from "@/app/(registration)/email-verify/queries/queries";
import { client } from "@/integrations/apollo/client";
import useUserStore from "@/integrations/zustand/user/user";
import Button from "@/shared/components/Button/Button";
import InputWithLabelWithState from "@/shared/components/InputWithLabelWithState/InputWithLabelWithState";

import Back from "./components/Back/Back";
import { verifyCodeMutation } from "./queries/verifyCode";

import styles from "./ConfirmEmail.module.scss";

type Props = {
	setView: Dispatch<SetStateAction<boolean>>;
	handle: () => void;
	handleSetNotification: (error: boolean) => void;
	disableFn?: () => void;
};

const ConfirmEmail = ({
	setView,
	handle,
	handleSetNotification,
	disableFn,
}: Props) => {
	const { user } = useUserStore();

	const [code, setCode] = useState("");
	const handleSendCode = async () => {
		await client.mutate({
			mutation: resetCode,
			variables: {
				email: user?.email || "",
				confirm: true,
			},
		});
	};

	const [disabled, setDisabled] = useState(false);

	const checkCodeHandle = async () => {
		const res = await client.mutate({
			mutation: verifyCodeMutation,
			variables: {
				code,
			},
		});

		if (res.data?.verifyCode) {
			handle();
		} else {
			handleSetNotification(true);
		}
	};

	useEffect(() => {
		if (disabled) {
			setTimeout(() => {
				setDisabled(false);
			}, 60000);
		}
	}, [disabled]);

	return (
		<RemoveScroll>
			<div
				className={styles.container}
				onClick={() => {
					disableFn && disableFn();
					setView(false);
				}}
			>
				<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
					<Back
						onClick={() => {
							setView(false);
							disableFn && disableFn();
						}}
					/>
					<p className={styles.text}>
						A confirmation code has been sent to your email: <br />
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
								onClick={() => {
									handleSendCode();
									setDisabled(true);
								}}
							>
								Reset code
							</button>
							<Button
								disabled={code.length !== 6}
								handleClick={checkCodeHandle}
								text="Register"
							/>
						</div>
					</div>
				</div>
			</div>
		</RemoveScroll>
	);
};

export default ConfirmEmail;
