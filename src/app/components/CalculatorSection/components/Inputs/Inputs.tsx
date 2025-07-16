import AiscAndUsdtInput from "./AiscAndUsdtInput";
import HatInput from "./HatInput";

import styles from "./Inputs.module.scss";

const Inputs = () => {
	return (
		<div className={styles.container}>
			<HatInput />
			<AiscAndUsdtInput />
		</div>
	);
};

export default Inputs;
