"use client";

import { useState } from "react";

import useUserStore from "@/integrations/zustand/user/user";
import Notification from "@/shared/components/Notification/Notification";

import Input from "./Input/Input";
import InputLoader from "./Input/InputLoader";

import styles from "./CheckBoxsInputs.module.scss";

const CheckBoxsInputs = () => {
	const { user } = useUserStore();

	const [view, setView] = useState(false);
	const [error, setError] = useState(false);
	const [msg, setMsg] = useState("");

	const handleSetNotification = (error: boolean) => {
		setView(true);
		setError(error);
		setMsg("Incorrect code!");
	};

	return (
		<>
			<Notification
				message={msg}
				isSuccess={!error}
				setView={setView}
				view={view}
			/>
			<div className={styles.container}>
				{user ? (
					<>
						<Input
							initialValue={user?.confirmations_by_email || false}
							title="Confirmations of actions by e-mail"
							handleSetNotification={handleSetNotification}
							secondValue={user?.two_factor_authentification || false}
							flag={true}
						/>
						<Input
							initialValue={user?.two_factor_authentification || false}
							secondValue={user?.confirmations_by_email || false}
							handleSetNotification={handleSetNotification}
							title="Two-factor authentification"
							flag={false}
						/>
					</>
				) : (
					<>
						<InputLoader title="Confirmations of actions by e-mail" />
						<InputLoader title="Two-factor authentification" />
					</>
				)}
			</div>
		</>
	);
};

export default CheckBoxsInputs;
