"use client";

import { useQuery } from "@apollo/client";
import parse from "html-react-parser";
import Image from "next/image";

import leftLine from "@/app/icons/left_line.png";
import Footer from "@/features/navigation/Footer/Footer";
import BackHome from "@/shared/components/BackHome/BackHome";
import Spinner from "@/shared/components/Spinner/Spinner";

import { getAbout } from "./query/getAbout";

import styles from "./About.module.scss";

export default function About() {
	const { data, loading } = useQuery(getAbout);

	return (
		<>
			<div className={styles.container}>
				<div className={styles.blobOne} />
				<div className={styles.blobTwo} />
				<div className={styles.titleCont}>
					<div className={styles.titleContainer}>
						<BackHome />
					</div>
					<h1>about</h1>
				</div>

				{loading && <Spinner />}
				{!loading && (
					<div className={styles.content}>
						{[...(data?.Abouts?.docs || [])].reverse().map((el, i) => (
							<div className={styles.unparsed} key={i}>
								{parse(el?.content || "")}
							</div>
						))}
					</div>
				)}
				<div className={styles.linesContainer}>
					<Image src={leftLine} alt="line" className={styles.left} />
				</div>
			</div>
			<Footer />
		</>
	);
}
