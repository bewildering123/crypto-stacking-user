"use client";

import React, { useState } from "react";

import { client } from "@/integrations/apollo/client";
import InputWithLabelWithState from "@/shared/components/InputWithLabelWithState/InputWithLabelWithState";
import Notification from "@/shared/components/Notification/Notification";

import { changePassword } from "./queries/changePassword";

import styles from "./ChangePassword.module.scss";

function hasUpperAndLowerCase(str: string) {
	const hasUpperCase = /[A-Z]/.test(str);
	const hasLowerCase = /[a-z]/.test(str);
	return hasUpperCase && hasLowerCase;
}

const ChangePassword = () => {
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
	const [oldPassword, setOldPassword] = useState("");

	const [view, setView] = useState(false);
	const [error, setError] = useState(false);
	const [errMsg, setErrmsg] = useState("");

	const handleSetNotification = (error: boolean, msg: string) => {
		setView(true);
		setErrmsg(msg);
		setError(error);
	};

	const handleChangePassword = async () => {
		if (password !== repeatPassword) {
			handleSetNotification(true, "Passwords don't match");
			return;
		}

		if (password.length < 8) {
			handleSetNotification(
				true,
				"The minimum password length is 8 characters!",
			);
			return;
		}

		if (!hasUpperAndLowerCase(password)) {
			handleSetNotification(
				true,
				"The password must contain 1 uppercase and one small letter!",
			);
			return;
		}
		const res = await client.mutate({
			mutation: changePassword,
			variables: {
				new_password: password,
				old_password: oldPassword,
			},
		});

		if (res.data?.changePassword === true) {
			setOldPassword("");
			setPassword("");
			setRepeatPassword("");
			handleSetNotification(false, "");
		} else {
			handleSetNotification(true, "Wrong current password!");
		}
	};

	return (
		<div className={styles.container}>
			<Notification
				view={view}
				setView={setView}
				isSuccess={!error}
				message={errMsg}
			/>
			<p className={styles.title}>Change password</p>

			<div className={styles.inputContainer}>
				<InputWithLabelWithState
					disable={false}
					label="Password:"
					setValue={setOldPassword}
					value={oldPassword}
					type="password"
					need_match={false}
				/>
				<InputWithLabelWithState
					disable={false}
					label="New password:"
					setValue={setPassword}
					value={password}
					need_match={false}
					type="password"
				/>
				<InputWithLabelWithState
					disable={false}
					label="Repeat new password:"
					setValue={setRepeatPassword}
					value={repeatPassword}
					type="password"
					need_match={false}
				/>
			</div>
			<button onClick={handleChangePassword}>Change</button>
		</div>
	);
};

export default ChangePassword;
