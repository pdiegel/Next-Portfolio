"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "@/styles/Projects.module.css";

export default function ImageCarousel({
  images,
}: {
  images: StaticImageData[];
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const disabledPrev = index === 0;
  const disabledNext = index === images.length - 1;

  return (
    <div className={styles.previewCarousel}>
      {images.length > 1 && (
        <button
          onClick={() => {
            setDirection("left");
            setIndex(index - 1);
          }}
          className={`primary-button ${disabledPrev ? "disabled" : ""}`}
          disabled={disabledPrev}
        >
          {"<"}
        </button>
      )}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{
            x: direction === "right" ? 800 : -800,
            position: "absolute",
          }}
          animate={{ x: 0 }}
          exit={{
            x: direction === "right" ? -800 : 800,
            position: "absolute",
          }}
          transition={{ duration: 0.5 }}
          className={styles.previewImgContainer}
        >
          <Image
            src={images[index]}
            alt="Project Preview"
            width={1000}
            height={500}
            className={styles.previewImg}
            quality={100}
            placeholder="blur"
          />
        </motion.div>
      </AnimatePresence>
      {images.length > 1 && (
        <button
          onClick={() => {
            setDirection("right");
            setIndex(index + 1);
          }}
          className={`primary-button ${disabledNext ? "disabled" : ""}`}
          disabled={disabledNext}
        >
          {">"}
        </button>
      )}
    </div>
  );
}
