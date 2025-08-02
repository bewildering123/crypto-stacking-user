import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

import Button from "@/shared/components/Button/Button";
import image from "@/shared/components/FreeHat/icons/image.png";

import styles from "./ShowMoneyModal.module.scss";

type Props = {
	hat: number;
	aisc: number;
	setShowModal: Dispatch<SetStateAction<boolean>>;
};

const ShowMoneyModal = ({ hat, aisc, setShowModal }: Props) => {
	return (
		<div className={styles.modalContainer}>
			<div className={styles.container}>
				<div>
					<Image src={image} alt="image" />
					<div className={styles.winning}>
						<div
							className={styles.line}
							style={{ transform: "rotate(180deg)" }}
						/>
						<p>
							+
							{hat === 0
								? `${Math.floor(aisc * 10000) / 10000} AISC`
								: `${Math.floor(hat * 10000) / 10000} HAT`}
							!
						</p>
						<div className={styles.line} />
					</div>
				</div>
				<Button disabled={false} onClick={() => setShowModal(false)}>
					Claim Reward
				</Button>
			</div>
		</div>
	);
};

export default ShowMoneyModal;
