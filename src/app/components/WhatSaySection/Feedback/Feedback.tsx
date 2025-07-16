import clsx from "clsx";

import Resize from "../icon/resizeIcon.svg";

import styles from "./Feedback.module.scss";

type Props = {
	icon: JSX.Element;
	feedback?: string | null;
	name?: string | null;
	age?: number | null;
	town?: string | null;
	handleClick?: () => void;
};

const Feedback = ({ icon, age, feedback, name, town, handleClick }: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.peopleContainer}>
				{icon}
				<div className={styles.nameContainer}>
					<p className={styles.name}>{name}</p>
					<p className={styles.age}>
						{age} years old, {town}
					</p>
				</div>
			</div>
			<div className={styles.reviewContainer}>
				<p className={clsx(handleClick && styles.text)}>{feedback}</p>
				{handleClick && <Resize onClick={() => handleClick()} />}
			</div>
		</div>
	);
};

export default Feedback;
