import Spinner from "@/shared/components/Spinner/Spinner";

import styles from "./Input.module.scss";

type Props = {
	title: string;
};

const InputLoader = ({ title }: Props) => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.input}>
					<Spinner />
					<p>{title}</p>
				</div>
				<button>Save</button>
			</div>
		</>
	);
};

export default InputLoader;
