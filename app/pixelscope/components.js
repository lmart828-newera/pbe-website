import Link from "next/link";
import { tokenizeSwift } from "./renderSwiftExcerpt";
import styles from "./pixelscope.module.css";

export function PixelScopeHeader({ title, subtitle, article = false }) {
  return (
    <header className={styles.psHero}>
      <div className={styles.psHeroInner}>
        <p className="genb-kicker">
          {article ? "PixelScope Engineering Note" : "PixelScope · Overview & Support"}
        </p>
        <h1>{title}</h1>
        <p className={styles.psSubtitle}>{subtitle}</p>
        {article && (
          <p className={styles.psMeta}>
            Precision Broadcast Engineering · <time dateTime="2026-09-09">September 9, 2026</time>
          </p>
        )}
        <div className={styles.psActions}>
          <Link
            href={article ? "/pixelscope" : "/pixelscope/from-patterns-to-evidence"}
            className="btn-secondary"
          >
            {article ? "Back to PixelScope" : "Read Engineering Note"}
          </Link>
          <Link href="/pixelscope#support" className="btn-primary">PixelScope Support</Link>
        </div>
      </div>
    </header>
  );
}

const TOKEN_CLASS = {
  keyword: "psSwiftKeyword",
  type: "psSwiftType",
  number: "psSwiftNumber",
  string: "psSwiftString",
  comment: "psSwiftComment",
};

export function SwiftExcerpt({ excerpt }) {
  const lines = tokenizeSwift(excerpt.code);
  const lineNoWidth = String(excerpt.end).length;

  return (
    <figure className={styles.psCodeFigure}>
      <div
        className={styles.psEditor}
        tabIndex={0}
        aria-label={`Swift excerpt: ${excerpt.title}`}
      >
        <div className={styles.psEditorBar} aria-hidden="true">
          <span className={styles.psTraffic}>
            <span className={styles.psTrafficRed} />
            <span className={styles.psTrafficYellow} />
            <span className={styles.psTrafficGreen} />
          </span>
          <span className={styles.psEditorPath}>{excerpt.file}</span>
        </div>
        <pre className={styles.psEditorBody}>
          <code className={styles.psEditorSource}>
            {lines.map((tokens, index) => (
              <span className={styles.psCodeLine} key={`${excerpt.start + index}`}>
                <span className={styles.psCodeLineNo} style={{ width: `${lineNoWidth}ch` }}>
                  {excerpt.start + index}
                </span>
                <span className={styles.psCodeLineText}>
                  {tokens.length === 0
                    ? "\n"
                    : tokens.map((token, tokenIndex) => {
                        const className = TOKEN_CLASS[token.kind]
                          ? styles[TOKEN_CLASS[token.kind]]
                          : undefined;
                        return className ? (
                          <span className={className} key={tokenIndex}>
                            {token.text}
                          </span>
                        ) : (
                          token.text
                        );
                      })}
                </span>
              </span>
            ))}
          </code>
        </pre>
      </div>
      <figcaption className={styles.psCaption}>
        Swift · {excerpt.file}, lines {excerpt.start}–{excerpt.end}. {excerpt.title}.
      </figcaption>
    </figure>
  );
}

