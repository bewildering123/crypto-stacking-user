import Spinner from "../Spinner/Spinner";

import styles from "./Button.module.scss";

type Props = {
	text: string;
	handleClick: () => void;
	disabled: boolean;
	loading?: boolean;
};

const Button = ({ disabled, handleClick, text, loading = false }: Props) => {
	return (
		<button disabled={disabled} onClick={handleClick} className={styles.button}>
			{loading ? <Spinner /> : text}
		</button>
	);
};

export default Button;
