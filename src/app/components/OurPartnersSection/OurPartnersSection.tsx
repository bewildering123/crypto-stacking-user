import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useMobileDetect } from "@/integrations/hooks/useMobile";

import Image1 from "./icons/1.svg";
import Image2 from "./icons/2.svg";
import Image3 from "./icons/3.svg";
import Image4 from "./icons/4.svg";
import Image5 from "./icons/5.svg";
import Image6 from "./icons/6.svg";
import Image7 from "./icons/7.svg";
import Image8 from "./icons/8.svg";
import Image9 from "./icons/9.svg";
import Image10 from "./icons/10.svg";
import Image11 from "./icons/11.svg";
import Image12 from "./icons/12.svg";
import Image13 from "./icons/13.svg";
import Image14 from "./icons/14.svg";
import Image15 from "./icons/15.svg";

import styles from "./OurPartnersSection.module.scss";

import "swiper/css/autoplay";

const OurPartnersSection = () => {
	const isMobile = useMobileDetect();

	const slides = [
		<Image1 key="image1" />,
		<Image2 key="image2" />,
		<Image3 key="image3" />,
		<Image4 key="image4" />,
		<Image5 key="image5" />,
		<Image6 key="image6" />,
		<Image7 key="image7" />,
		<Image8 key="image8" />,
		<Image9 key="image9" />,
		<Image10 key="image10" />,
		<Image11 key="image11" />,
		<Image12 key="image12" />,
		<Image13 key="image13" />,
		<Image14 key="image14" />,
		<Image15 key="image15" />,
	];

	return (
		<section className={styles.container}>
			<div className={styles.textContainer}>
				<h2>
					<span>Our</span> Partners <br /> & Collaborations
				</h2>
				<p className={styles.text}>
					Real experiences from users who are earning, learning, and growing
					with AISC & HAT
				</p>
			</div>
			<Swiper
				spaceBetween={16}
				navigation
				pagination={{ clickable: true }}
				className={styles.swiper}
				loop={true}
				modules={[Autoplay]}
				autoplay={{ delay: 1000, disableOnInteraction: false }}
				slidesPerView={isMobile ? 1 : 6}
			>
				{slides.map((el, i) => (
					<SwiperSlide className={styles.slider} key={i}>
						{el}
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default OurPartnersSection;
