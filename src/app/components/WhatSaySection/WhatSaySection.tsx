import { useQuery } from "@apollo/client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useMobileDetect } from "@/integrations/hooks/useMobile";

import Feedback from "./Feedback/Feedback";
import { getFeedBack } from "./query/getFeedback";

import styles from "./WhatSaySection.module.scss";

import "swiper/css/autoplay";

const WhatSaySection = () => {
	const { data, loading } = useQuery(getFeedBack);
	const swiperRef = useRef(null);

	const feedback = data?.Feedbacks?.docs || [];

	const [open, setOpen] = useState(false);
	const [current, setCurrent] = useState(0);

	const isMobile = useMobileDetect();

	useEffect(() => {
		if (swiperRef.current && (swiperRef.current as any).swiper) {
			(swiperRef.current as any).swiper.autoplay.start();
		}
	}, []);

	return (
		<section className={styles.container}>
			<div className={styles.textContainer}>
				<h2>
					<span>what our</span> <br /> community says
				</h2>
				<p className={styles.text}>
					Real experiences from users who are earning, learning, and growing
					with AISC & HAT
				</p>
			</div>
			{!loading && (
				<>
					<Swiper
						spaceBetween={16}
						ref={swiperRef}
						navigation
						pagination={{ clickable: true }}
						className={styles.swiper}
						loop={true}
						modules={[Autoplay]}
						autoplay={{ delay: 1000, disableOnInteraction: false }}
						slidesPerView={isMobile ? 1 : 6}
					>
						{feedback.map((el, i) => (
							<SwiperSlide className={styles.slider} key={i}>
								<Feedback
									{...el}
									icon={
										<Image
											src={
												process.env.NEXT_PUBLIC_BACKEND_URL +
												(el?.avatar.url || "")
											}
											width={80}
											height={80}
											alt={el?.avatar.alt || ""}
										/>
									}
									handleClick={() => {
										setCurrent(i);
										setOpen(true);
									}}
								/>
							</SwiperSlide>
						))}
					</Swiper>
					{open && (
						<div className={styles.background} onClick={() => setOpen(false)}>
							<div className={styles.content}>
								<Feedback
									{...feedback[current]}
									icon={
										<Image
											src={
												process.env.NEXT_PUBLIC_BACKEND_URL +
												(feedback[current]?.avatar.url || "")
											}
											width={80}
											height={80}
											alt={feedback[current]?.avatar.alt || ""}
										/>
									}
								/>
							</div>
						</div>
					)}
				</>
			)}
		</section>
	);
};

export default WhatSaySection;
