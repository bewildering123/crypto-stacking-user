import clsx from "clsx";
import { Suspense } from "react";

import { useMobileDetect } from "@/integrations/hooks/useMobile";
import { useCalculator } from "@/integrations/zustand/calculator/calculator";
import Spinner from "@/shared/components/Spinner/Spinner";

import Buttons from "../Buttons/Buttons";
import Graph from "../Graph/Graph";
import Inputs from "../Inputs/Inputs";

import styles from "./Calculator.module.scss";

type Props = {
	mainClassName?: string;
};

const Calculator = ({ mainClassName }: Props) => {
	const isMobile = useMobileDetect();

	const {
		setActivePoint,
		activePoint,
		hatValue,
		secondValue,
		button_value,
		selectedValue,
	} = useCalculator();

	return (
		<div className={clsx(styles.container, mainClassName)}>
			<div className={styles.topContainer}>
				<Buttons />
				<Suspense
					fallback={
						<div
							style={{
								height: isMobile ? "200px" : "400px",
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
		</div>
	);
};

export default Calculator;
