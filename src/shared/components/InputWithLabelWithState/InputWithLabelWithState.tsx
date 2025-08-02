import React, { useState } from "react";

import styles from "./InputWithLabelWithState.module.scss";

type Props = {
	label: string;
	type?: string;
	value: any;
	setValue: React.Dispatch<React.SetStateAction<any>>;
	disable?: boolean;
	need_match?: boolean;
	is_wallet?: boolean;
	error?: boolean;
};

const InputWithLabelWithState = ({
	label,
	type,
	setValue,
	value,
	disable = false,
	need_match = true,
	is_wallet = false,
	error = false,
}: Props) => {
	const [view, setView] = useState(false);

	const shownValue = () => {
		const wallet_address = value as string;
		return (
			wallet_address.slice(0, 10) +
			"..." +
			wallet_address.slice(wallet_address.length - 10, wallet_address.length)
		);
	};

	return (
		<div className={styles.container}>
			<label>{label}</label>
			<input
				disabled={disable}
				autoComplete="off"
				type={type === "password" && view ? "text" : type || "text"}
				value={(is_wallet && value !== "" && shownValue()) || value}
				onChange={(e) => {
					if (need_match) {
						if (
							/^\d+$.?/.test(e.target.value) ||
							e.target.value === "" ||
							e.target.value.includes(".") ||
							e.target.value.includes(",")
						) {
							setValue(e.target.value);
						}
					} else {
						setValue(e.target.value);
					}
				}}
				style={{ border: (error && "1px solid red") || "" }}
			/>
			{/* {type === "password" && (
				<Eye className={styles.eye} onClick={() => setView(!view)} />
			)} */}
		</div>
	);
};

export default InputWithLabelWithState;
