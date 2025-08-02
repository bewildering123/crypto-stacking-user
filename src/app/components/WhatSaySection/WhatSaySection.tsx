import { useQuery } from "@apollo/client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { getFeedBack } from "./query/getFeedback";

import styles from "./WhatSaySection.module.scss";

import "swiper/css/autoplay";

import Button from "@/shared/components/Button/Button";

const WhatSaySection = () => {
	const { data, loading } = useQuery(getFeedBack);
	const swiperRef = useRef(null);

	const [feedback, setFeedback] = useState<any[]>([]);
	console.log(data);

	useEffect(() => {
		if (data && !loading) {
			setFeedback(
				(data?.Feedbacks?.docs || []).map((item: any) => ({
					...item,
					showFeedback: false,
				})),
			);
		}
	}, [data, loading]);

	useEffect(() => {
		if (swiperRef.current && (swiperRef.current as any).swiper) {
			(swiperRef.current as any).swiper.autoplay.start();
		}
	}, []);

	return (
		<section className={styles.container}>
			<div className={styles.top}>
				<div className={styles.topContainer}>
					<div className={styles.icon}>
						<Image
							src="/img/icons/message-lines.svg"
							width={24}
							height={24}
							alt="icon"
						/>
					</div>
					<div>
						<h2 className={styles.title}>What Our Community Says</h2>
						<div className={styles.description}>
							Insights from real users earning and growing with AISC & HAT
						</div>
					</div>
				</div>
				<div className={styles.sliderButtons}>
					<Button className={`${styles.sliderButton} wss-button-prev`}>
						<Image
							src="/img/icons/chevron-left.svg"
							width={24}
							height={24}
							alt="left"
						/>
					</Button>
					<Button className={`${styles.sliderButton} wss-button-next`}>
						<Image
							src="/img/icons/chevron-left.svg"
							width={24}
							height={24}
							alt="right"
						/>
					</Button>
				</div>
			</div>
			{!loading && (
				<>
					<Swiper
						ref={swiperRef}
						modules={[Navigation]}
						spaceBetween={20}
						slidesPerView={2.5}
						loop={true}
						breakpoints={{
							320: {
								slidesPerView: 1.5,
								spaceBetween: 16,
							},
							768: {
								slidesPerView: 1.5,
								spaceBetween: 20,
							},
							1024: {
								slidesPerView: 2.5,
								spaceBetween: 24,
							},
						}}
						navigation={{
							nextEl: ".wss-button-next",
							prevEl: ".wss-button-prev",
						}}
						className={styles.sliderContainer}
					>
						{feedback.map((el, i) => (
							<SwiperSlide key={i}>
								<div className={styles.sliderItem}>
									<div className={styles.sliderItemTop}>
										<Image
											src={
												process.env.NEXT_PUBLIC_BACKEND_URL +
												(el?.avatar.url || "")
											}
											width={64}
											height={64}
											className={styles.sliderItemAvatar}
											alt={el?.avatar.alt || ""}
										/>
										<div>
											<h4 className={styles.sliderItemTitle}>{el?.name}</h4>
											<div className={styles.sliderItemDescription}>
												{el?.age} years old, {el?.town}
											</div>
										</div>
									</div>
									<div
										className={`${styles.sliderItemFeedback} ${el?.showFeedback ? "active" : ""}`}
									>
										{el?.feedback}
									</div>
									<button
										className={styles.sliderItemButton}
										onClick={() =>
											setFeedback((prev) =>
												prev.map((el, x) =>
													i === x
														? { ...el, showFeedback: !el.showFeedback }
														: el,
												),
											)
										}
									>
										{el?.showFeedback ? "Hide" : "Show"} full review{" "}
										<Image
											src="/img/icons/chevron-left.svg"
											width={20}
											height={20}
											alt="arrow"
										/>
									</button>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<div className={styles.bottom}>
						<div className={styles.sliderButtons}>
							<Button className={`${styles.sliderButton} wss-button-prev`}>
								<Image
									src="/img/icons/chevron-left.svg"
									width={24}
									height={24}
									alt="left"
								/>
							</Button>
							<Button className={`${styles.sliderButton} wss-button-next`}>
								<Image
									src="/img/icons/chevron-left.svg"
									width={24}
									height={24}
									alt="right"
								/>
							</Button>
						</div>
					</div>
				</>
			)}
		</section>
	);
};

export default WhatSaySection;
