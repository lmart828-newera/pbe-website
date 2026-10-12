"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import styles from "./page.module.css";

const patterns = [
  {
    name: "BT.2111 PQ Full",
    src: "/images/gen-b/engineering-notes/hdr-sdr-signal-engineering/09-bt2111-pq-full-bars.svg",
    alt: "BT.2111 PQ Full color bars. The top band is 100% white, yellow, cyan, green, magenta, red, and blue. The tall band is the 58% comparison. Below it are grayscale steps, a ramp from code 0 to code 1023, and a bottom row of 58% BT.709 chips with near-black references and no minus 2% box.",
    description:
      "Full-range PQ reference bars. The comparison band is 58%, and black is code 0.",
    use: "Evaluates full-range PQ HDR signal paths, reference-code integrity, grayscale behavior, and highlight progression.",
  },
  {
    name: "BT.2111 PQ Narrow",
    src: "/images/gen-b/engineering-notes/hdr-sdr-signal-engineering/10-bt2111-pq-narrow-bars.svg",
    alt: "BT.2111 PQ Narrow color bars. The top band is narrow-range 100% white, yellow, cyan, green, magenta, red, and blue. The tall band is the 58% comparison. Below it are grayscale steps from sub-black to 109%, a narrow-range ramp, and a bottom row with a minus 2% near-black reference.",
    description:
      "Narrow-range PQ reference bars. Nominal black is code 64, and the comparison band is 58%.",
    use: "Evaluates narrow-range PQ HDR broadcast chains, code-value handling, ramp continuity, and near-black behavior.",
  },
  {
    name: "BT.2111 HLG Narrow",
    src: "/images/gen-b/engineering-notes/hdr-sdr-signal-engineering/11-bt2111-hlg-narrow-bars.svg",
    alt: "BT.2111 HLG Narrow color bars. The top band is narrow-range 100% white, yellow, cyan, green, magenta, red, and blue. The tall band is the brighter 75% comparison. Below it are the narrow-range grayscale steps, ramp, and bottom-row references.",
    description:
      "Narrow-range HLG reference bars. The 100% bars use codes 940 and 64, and the comparison band is 75%.",
    use: "Evaluates narrow-range HLG HDR systems, 75% comparison behavior, ramp structure, and broadcast display alignment.",
  },
];

export default function PatternIntro() {
  const [openIndex, setOpenIndex] = useState(null);
  const dialogTitleId = useId();
  const closeButtonRef = useRef(null);
  const openPattern = openIndex === null ? null : patterns[openIndex];

  useEffect(() => {
    if (openIndex === null) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenIndex(null);
      }
    };

    closeButtonRef.current?.focus();
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openIndex]);

  return (
    <>
      <div className={styles.introGrid}>
        {patterns.map((pattern, index) => (
          <article key={pattern.src} className={styles.introPanel}>
            <h3>{pattern.name}</h3>
            <button
              type="button"
              className={styles.imageButton}
              onClick={() => setOpenIndex(index)}
              aria-haspopup="dialog"
              aria-label={`Open full-size image: ${pattern.name}`}
            >
              <Image
                src={pattern.src}
                alt={pattern.alt}
                width={1920}
                height={1080}
                unoptimized
                className={styles.image}
              />
            </button>
            <p className={styles.introCopy}>{pattern.description}</p>
            <p className={styles.introUse}>
              <span>Use:</span> {pattern.use}
            </p>
          </article>
        ))}
      </div>

      {openPattern && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-labelledby={dialogTitleId}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setOpenIndex(null);
            }
          }}
        >
          <div className={styles.introLightbox}>
            <button
              ref={closeButtonRef}
              type="button"
              className={styles.lightboxClose}
              onClick={() => setOpenIndex(null)}
              aria-label="Close enlarged image"
            >
              Close
            </button>
            <h2 id={dialogTitleId} className={styles.introLightboxName}>
              {openPattern.name}
            </h2>
            <Image
              src={openPattern.src}
              alt={openPattern.alt}
              width={1920}
              height={1080}
              unoptimized
              className={styles.lightboxImage}
            />
            <p className={styles.introLightboxCopy}>{openPattern.description}</p>
            <p className={styles.introLightboxUse}>
              <span>Use:</span> {openPattern.use}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
