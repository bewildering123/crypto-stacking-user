import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./OurPartnersSection.module.scss";

import "swiper/css";
import "swiper/css/autoplay";

import ImageBottom1 from "./images/bottom/1.svg";
import ImageBottom2 from "./images/bottom/2.svg";
import ImageBottom3 from "./images/bottom/3.svg";
import ImageBottom4 from "./images/bottom/4.svg";
import ImageBottom5 from "./images/bottom/5.svg";
import ImageBottom6 from "./images/bottom/6.svg";
import ImageBottom7 from "./images/bottom/7.svg";
import ImageTop1 from "./images/top/1.svg";
import ImageTop2 from "./images/top/2.svg";
import ImageTop3 from "./images/top/3.svg";
import ImageTop4 from "./images/top/4.svg";
import ImageTop5 from "./images/top/5.svg";
import ImageTop6 from "./images/top/6.svg";
import ImageTop7 from "./images/top/7.svg";

const topSliderList = [
	<ImageTop1 />,
	<ImageTop2 />,
	<ImageTop3 />,
	<ImageTop4 />,
	<ImageTop5 />,
	<ImageTop6 />,
	<ImageTop7 />,
];

const bottomSliderList = [
	<ImageBottom1 />,
	<ImageBottom2 />,
	<ImageBottom3 />,
	<ImageBottom4 />,
	<ImageBottom5 />,
	<ImageBottom6 />,
	<ImageBottom7 />,
];

const OurPartnersSection = () => {
	return (
		<section className={styles.container}>
			<div className={styles.icon}>
				<Image src="/img/icons/sparkle.svg" width={24} height={24} alt="icon" />
			</div>
			<h2 className={styles.title}>Our Partners & Collaborators</h2>
			<div className={styles.description}>
				Trusted by real users and communities who grow, earn, and innovate with
				AISC & HAT
			</div>
			<div className={styles.slidersContainer}>
				<Swiper
					modules={[Autoplay]}
					spaceBetween={20}
					slidesPerView="auto"
					loop={true}
					speed={20000}
					autoplay={{
						delay: 0,
						disableOnInteraction: false,
						reverseDirection: false,
						pauseOnMouseEnter: false,
					}}
					breakpoints={{
						768: {
							spaceBetween: 20,
						},
						0: {
							spaceBetween: 8,
						},
					}}
					className={styles.slider}
				>
					{topSliderList.map((logo, idx) => (
						<SwiperSlide key={idx}>
							<div className={styles.sliderItem}>{logo}</div>
						</SwiperSlide>
					))}
				</Swiper>

				<Swiper
					modules={[Autoplay]}
					slidesPerView="auto"
					spaceBetween={20}
					loop={true}
					breakpoints={{
						768: {
							spaceBetween: 20,
						},
						0: {
							spaceBetween: 8,
						},
					}}
					autoplay={{
						delay: 0,
						disableOnInteraction: false,
						reverseDirection: true,
						pauseOnMouseEnter: false,
					}}
					speed={20000}
					className={styles.slider}
				>
					{bottomSliderList.map((logo, idx) => (
						<SwiperSlide key={idx}>
							<div className={styles.sliderItem}>{logo}</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default OurPartnersSection;
