import { Segmented } from "antd";
import React, { Suspense } from "react";

import { useMobileDetect } from "@/integrations/hooks/useMobile";
import { useCalculator } from "@/integrations/zustand/calculator/calculator";
import Spinner from "@/shared/components/Spinner/Spinner";

import Graph from "./components/Graph/Graph";
import Inputs from "./components/Inputs/Inputs";
import TotalRate from "./components/TotalRate/TotalRate";

import styles from "./CalculatorSection.module.scss";

const VALUES = ["Day", "Week", "Month"];

const CalculatorSection = () => {
	const isMobile = useMobileDetect();

	const {
		setActivePoint,
		activePoint,
		hatValue,
		secondValue,
		button_value,
		selectedValue,
		setButtonValue,
	} = useCalculator();
	return (
		<section className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.top}>
					<div className={styles.topContainer}>
						<h2 className={styles.title}>Profitability Calculator</h2>
						<Segmented
							value={button_value}
							className={styles.segmented}
							onChange={setButtonValue}
							options={VALUES}
						/>
					</div>
					<div className={styles.topContainer}>
						<div className={styles.description}>
							Adjust the amount of HAT tokens and your deposit to see how your
							daily, weekly, or monthly rewards grow. The more HAT you hold, the
							higher your mining rate — and the more you earn
						</div>
						<TotalRate />
					</div>
				</div>
				<Suspense
					fallback={
						<div
							style={{
								height: isMobile ? "324px" : "552px",
								width: "100%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Spinner />
						</div>
					}
				>
					<Graph
						activePoint={activePoint}
						button_value={button_value}
						hatValue={hatValue}
						secondValue={secondValue}
						setActivePoint={setActivePoint}
						currentValue={selectedValue}
					/>
				</Suspense>
			</div>
			<Inputs />
		</section>
	);
};

export default CalculatorSection;
