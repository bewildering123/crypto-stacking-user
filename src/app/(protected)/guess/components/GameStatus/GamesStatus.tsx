import React from "react";

import LoseIcon from "./icons/loseIcon.svg";
import WinIcon from "./icons/winIcon.svg";

import styles from "./GameStatus.module.scss";

type Props = {
	status: boolean;
	prize: number;
	setOpen: () => void;
	hat?: number;
	sha?: string;
	repeat?: boolean;
};

const GamesStatus = ({
	prize,
	setOpen,
	status,
	hat,
	sha,
	repeat = false,
}: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.gameStatus}>
				{status ? <WinIcon /> : <LoseIcon />}
				<div className={styles.textContainer}>
					<p className={styles.title}>{status ? "You won!" : "You lose..."}</p>
					{(status && (
						<p className={styles.prize}>
							Your prize: <br />
							<span>{Math.floor(prize * 10000) / 10000} AICS</span> <br />
							<span style={{ display: hat ? "" : "none" }}>
								{Math.floor((hat || 0) * 10000) / 10000} HAT
							</span>{" "}
							<br />
							<span style={{ display: sha ? "" : "none" }}>SHA: {sha}</span>
						</p>
					)) || (
						<p className={styles.prize} style={{ display: sha ? "" : "none" }}>
							<span>SHA: {sha}</span> <br />
							<span style={{ display: hat ? "" : "none" }}>
								{Math.floor((hat || 0) * 10000) / 10000} HAT
							</span>{" "}
						</p>
					)}
				</div>
				<button onClick={setOpen}>{repeat ? "Re-bid" : "Ok"}</button>
			</div>
		</div>
	);
};

export default GamesStatus;
