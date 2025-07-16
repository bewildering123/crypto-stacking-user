import EtherIcon from "./icons/trc20.svg";

import styles from "./EtherContainer.module.scss";

const EtherContainer = () => {
	return (
		<div className={styles.etherContainer}>
			<EtherIcon />
			<p>
				Usdt <span>Tron (TRC-20) </span>
			</p>
		</div>
	);
};

export default EtherContainer;
