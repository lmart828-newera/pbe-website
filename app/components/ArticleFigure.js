"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

export default function ArticleFigure({
  figure,
  priority = false,
  classNames,
  id,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogTitleId = useId();
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    closeButtonRef.current?.focus();
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <figure className={classNames.figure} id={id}>
        <button
          type="button"
          className={classNames.imageButton}
          onClick={() => setIsOpen(true)}
          aria-haspopup="dialog"
          aria-label={`Open full-size image: ${figure.caption}`}
        >
          <Image
            src={figure.src}
            alt={figure.alt}
            width={figure.width}
            height={figure.height}
            priority={priority}
            unoptimized={
              figure.unoptimized ?? /\.svg(?:$|\?)/i.test(figure.src)
            }
            className={classNames.image}
          />
        </button>
        <figcaption>{figure.caption}</figcaption>
      </figure>

      {isOpen && (
        <div
          className={classNames.lightbox}
          role="dialog"
          aria-modal="true"
          aria-labelledby={dialogTitleId}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div className={classNames.lightboxPanel}>
            <h2 id={dialogTitleId} className={classNames.lightboxTitle}>
              {figure.caption}
            </h2>
            <button
              ref={closeButtonRef}
              type="button"
              className={classNames.lightboxClose}
              onClick={() => setIsOpen(false)}
              aria-label="Close enlarged image"
            >
              Close
            </button>
            <Image
              src={figure.src}
              alt={figure.alt}
              width={figure.width}
              height={figure.height}
              unoptimized
              className={classNames.lightboxImage}
            />
          </div>
        </div>
      )}
    </>
  );
}
