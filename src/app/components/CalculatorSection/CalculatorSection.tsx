import React from "react";

import Calculator from "./components/Calculator/Calculator";

import styles from "./CalculatorSection.module.scss";

const CalculatorSection = () => {
	return (
		<section className={styles.container}>
			<h2>
				Profitability <span>calculator</span>
			</h2>
			<Calculator />
		</section>
	);
};

export default CalculatorSection;
