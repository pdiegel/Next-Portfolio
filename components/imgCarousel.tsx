"use client";
import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import styles from "@/styles/Projects.module.css";

export default function ImageCarousel({
	images,
	projectName,
}: {
	images: StaticImageData[];
	projectName: string;
}) {
	const [index, setIndex] = useState(0);

	const disabledPrev = index === 0;
	const disabledNext = index === images.length - 1;

	return (
		<div className={styles.previewCarousel}>
			<div key={index} className={styles.previewImgContainer}>
				<Image
					src={images[index]}
					alt={`${projectName} preview image ${index + 1}`}
					width={1000}
					height={500}
					className={styles.previewImg}
					quality={100}
					placeholder="blur"
				/>
				{images.length > 1 && (
					<button
						onClick={() => {
							setIndex(index - 1);
						}}
						className={`primary-button ${disabledPrev ? "disabled" : ""}`}
						disabled={disabledPrev}
						aria-label="Previous Image"
						type="button"
					>
						{"<"}
					</button>
				)}
				{images.length > 1 && (
					<button
						onClick={() => {
							setIndex(index + 1);
						}}
						className={`primary-button ${disabledNext ? "disabled" : ""}`}
						disabled={disabledNext}
						aria-label="Next Image"
						type="button"
					>
						{">"}
					</button>
				)}
			</div>
		</div>
	);
}
