import React, { useRef } from "react";

import useUserStore from "@/integrations/zustand/user/user";

import styles from "./InputWithLabelWithState.module.scss";

type Props = {
	label: string;
	value: string;
	setValue: React.Dispatch<React.SetStateAction<any>>;
	isChanged: boolean;
	isEditing: boolean;
	setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
	setIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
	error?: boolean;
	disable?: boolean;
};

const InputWithLabelWithState = ({
	label,
	setValue,
	value,
	isEditing,
	setIsEditing,
	isChanged,
	setIsChanged,
	error = false,
	disable = false,
}: Props) => {
	const getDisplayValue = (wallet?: string) => {
		const walletValue = wallet || value;
		if (!isEditing && walletValue.length >= 8) {
			return `${walletValue.slice(0, 4)}****${walletValue.slice(-4)}`;
		}
		return walletValue;
	};
	const inputRef = useRef<HTMLInputElement>(null);

	const { user } = useUserStore();

	return (
		<div className={styles.container}>
			<label>{label}</label>

			<input
				disabled={disable}
				autoComplete="off"
				type={"text"}
				ref={inputRef}
				value={getDisplayValue()}
				onBlur={() => {
					if (!isChanged) {
						setIsEditing(false);
						setValue(getDisplayValue(user?.wallet_address || ""));
					}
				}}
				onFocus={() => {
					if (!isEditing && !isChanged) {
						setIsEditing(true);
						setValue("");
					}
				}}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setValue(e.target.value);
					setIsChanged(true);
				}}
				style={{ border: (error && "1px solid red") || "" }}
			/>
		</div>
	);
};

export default InputWithLabelWithState;
