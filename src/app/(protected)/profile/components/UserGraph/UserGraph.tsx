"use client";

import Graph from "@/app/components/CalculatorSection/components/Graph/Graph";
import TotalRate from "@/app/components/CalculatorSection/components/TotalRate/TotalRate";
import { useMobileDetect } from "@/integrations/hooks/useMobile";
import useExchangeAics from "@/integrations/zustand/aics/aics";
import { useCalculator } from "@/integrations/zustand/calculator/calculator";
import useUserStore from "@/integrations/zustand/user/user";

import SelectValues from "./SelectValues/SelectValues";

import styles from "./UserGraph.module.scss";

const VALUES = ["Day", "Week", "Month"];

const UserGraph = () => {
	const isMobile = useMobileDetect();
	const {
		activePoint,
		setActivePoint,
		button_value,
		setButtonValue,
		setSelectedValue,
		selectedValue,
	} = useCalculator();

	const { exchange_aics } = useExchangeAics();

	const { user } = useUserStore();
	return (
		<div className={styles.container}>
			<p className={styles.title}>Income chart</p>
			<div className={styles.calculator}>
				<div className={styles.infoContainer}>
					<div className={styles.inputsContainer}>
						<SelectValues
							values={VALUES}
							setValue={setButtonValue}
							value={button_value}
						/>
						<SelectValues
							values={["AISC", "USDT"]}
							setValue={setSelectedValue}
							value={selectedValue}
						/>
					</div>
					<TotalRate hat={user?.hat} className={styles.totalRate} />
				</div>
				<Graph
					activePoint={activePoint}
					button_value={button_value}
					hatValue={user?.hat || 0}
					secondValue={
						selectedValue === "AISC"
							? user?.aics || 0
							: (user?.aics || 0) * exchange_aics
					}
					setActivePoint={setActivePoint}
					className={styles.graph}
					sizes={isMobile ? 200 : 284}
					currentValue={selectedValue}
				/>
			</div>
		</div>
	);
};

export default UserGraph;
