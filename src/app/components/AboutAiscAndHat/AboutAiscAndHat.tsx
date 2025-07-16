import { Root } from "@radix-ui/react-accordion";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

import Question from "./components/Question/Question";
import { aiscData, hatData } from "./data";
import AiscImage from "./icons/AiscImage.png";
import HatImage from "./icons/HatImage.png";

import styles from "./AboutAiscAndHat.module.scss";

const AboutAiscAndHat = () => {
	const [active, setActive] = useState(true);

	return (
		<section className={styles.container}>
			<div className={styles.textContainer}>
				<h2>
					<span>AISC & HAT</span> – The Power <br /> of Smart Mining
				</h2>
				<p className={styles.text}>
					Discover a unique ecosystem where AI and blockchain work together to
					create stability, growth, and opportunity
				</p>
			</div>
			<div className={styles.contentContainer}>
				<div className={styles.buttonsContainer}>
					<button
						className={clsx(active && styles.activeButton)}
						onClick={() => setActive(true)}
					>
						AISC <br /> <span>Your Passive Income Revolution</span>
					</button>
					<button
						className={clsx(!active && styles.activeButton)}
						onClick={() => setActive(false)}
					>
						HAT <br /> <span>Play, Earn, Boost!</span>
					</button>
				</div>
				<div className={styles.bottomContainer}>
					<Root type="single" className={styles.questionsContainer}>
						{(active ? aiscData : hatData).map((el, i) => (
							<Question
								key={i}
								answer={el.text}
								icon={el.icon}
								question={el.title}
								value={el.text}
							/>
						))}
					</Root>
					<Image src={active ? AiscImage : HatImage} alt="image" />
				</div>
			</div>
		</section>
	);
};

export default AboutAiscAndHat;
