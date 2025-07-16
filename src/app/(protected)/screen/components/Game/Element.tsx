"úse client";

import React from "react";

import FirstElement from "../../icons/first.svg";

import styles from "./Game.module.scss";

type Props = {
	i: number;
	x: number;
	y: number;
	length: number;
	score: number;
};

const Element = ({ i, x, y, length, score }: Props) => {
	return (
		<>
			{i === length - 1 ? (
				<>
					{score !== 0 && (
						<p
							className={styles.text}
							style={{
								left: `${x}px`,
								top: `${y - 20}px`,
								opacity: `${1 - (length - i) / length}`,
							}}
						>
							{score}
						</p>
					)}
					<div
						key={i}
						style={{
							left: `${x}px`,
							top: `${y}px`,
							position: "absolute",
						}}
					>
						<FirstElement />
					</div>
				</>
			) : (
				<>
					{score !== 0 && (
						<p
							className={styles.text}
							style={{
								left: `${x}px`,
								top: `${y - 20}px`,
								opacity: `${1 - (length - i) / length}`,
							}}
						>
							{score}
						</p>
					)}
					<div
						key={i}
						style={{
							left: `${x}px`,
							top: `${y}px`,
							opacity: `${1 - (length - i) / length}`,
						}}
						className={styles.point}
					/>
				</>
			)}
		</>
	);
};

export default Element;
