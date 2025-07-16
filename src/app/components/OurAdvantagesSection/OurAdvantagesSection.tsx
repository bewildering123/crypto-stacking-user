import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { data } from "./data";

import styles from "./OurAdvantagesSection.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const OurAdvantagesSection = () => {
	return (
		<section className={styles.container} id="aboutaiscandhat">
			<div className={styles.textContainer}>
				<h2>
					<span>Our advantages</span> <br />
					of AI-Powered Blockchain
				</h2>
				<p className={styles.text}>
					Discover a unique ecosystem where AI and blockchain work together to
					create stability, growth, and opportunity
				</p>
			</div>
			<div className={styles.blocksContainer}>
				{data.map((el, i) => (
					<div className={styles.block} key={i}>
						{el.icon}
						<div className={styles.textCont}>
							<span>{el.title}</span>
							<p>{el.text}</p>
						</div>
					</div>
				))}
			</div>
			<Swiper
				modules={[Pagination]}
				spaceBetween={16}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				className={styles.carouselContainer}
			>
				<SwiperSlide className={styles.slide}>
					{data.slice(0, 3).map((el, i) => (
						<div className={styles.block} key={i}>
							{el.icon}
							<div className={styles.textCont}>
								<span>{el.title}</span>
								<p>{el.text}</p>
							</div>
						</div>
					))}
				</SwiperSlide>
				<SwiperSlide className={styles.slide}>
					{data.slice(3, 6).map((el, i) => (
						<div className={styles.block} key={i}>
							{el.icon}
							<div className={styles.textCont}>
								<span>{el.title}</span>
								<p>{el.text}</p>
							</div>
						</div>
					))}
				</SwiperSlide>
			</Swiper>
			<Link href={"/terms-condition"}>Terms & Conditions</Link>
		</section>
	);
};

export default OurAdvantagesSection;
