import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import Back from "../../WithdrawalModal/components/Back/Back";
import PlusIcon from "./icon/plus.svg";
import WalletIcon from "./icon/wallet.svg";

import styles from "./NoWalletModal.module.scss";

type Props = {
	setWalletError: Dispatch<SetStateAction<boolean>>;
};

const NoWalletModal = ({ setWalletError }: Props) => {
	return (
		<div className={styles.container} onClick={() => setWalletError(false)}>
			<div className={styles.content} onClick={(e) => e.stopPropagation()}>
				<Back onClick={() => setWalletError(false)} />
				<div className={styles.textContainer}>
					<p className={styles.title}>
						<WalletIcon /> Wallet unspecified
					</p>
					<p className={styles.text}>
						To withdraw funds, you need to add a wallet
					</p>
				</div>
				<Link href={"/settings"}>
					<PlusIcon /> Add wallet
				</Link>
			</div>
		</div>
	);
};

export default NoWalletModal;
