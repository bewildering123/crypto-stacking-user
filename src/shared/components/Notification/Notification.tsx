import { AnimatePresence, motion } from "motion/react";
import { Dispatch, SetStateAction, useEffect } from "react";

import Close from "./icons/close.svg";
import Error from "./icons/Error.svg";
import Success from "./icons/Success.svg";

import styles from "./Notification.module.scss";

type Props = {
	message: string;
	view: boolean;
	setView: Dispatch<SetStateAction<boolean>>;
	isSuccess: boolean;
};

const Notification = ({ isSuccess, message, setView, view }: Props) => {
	useEffect(() => {
		if (view) {
			setTimeout(() => {
				setView(false);
			}, 4000);
		}
	}, [view]);

	return (
		<AnimatePresence>
			{view && (
				<motion.div
					className={styles.container}
					animate={{ x: 0, scale: 1 }}
					initial={{ x: 500, scale: 0 }}
					transition={{ type: "spring", duration: 0.7 }}
					exit={{ x: 500, scale: 0 }}
				>
					<div className={styles.contentContainer}>
						{isSuccess ? <Success /> : <Error />}
						<div className={styles.textContainer}>
							<p className={styles.title}>
								{isSuccess ? "Success!" : "Something went wrong."}
							</p>
							{!isSuccess && <p className={styles.text}>{message}</p>}
						</div>
					</div>
					<motion.div
						whileHover={{ scale: 1.2, cursor: "pointer" }}
						onClick={() => setView(false)}
					>
						<Close />
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Notification;
