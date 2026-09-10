import Link from "next/link";
import { PixelScopeHeader } from "./components";
import styles from "./pixelscope.module.css";

const canonicalUrl = "https://pbe-engineering.com/pixelscope";
const description =
  "Discover PixelScope, Precision Broadcast Engineering's iPhone-based display analysis platform combining controlled 4K test patterns, optical tracking, structured measurements, professional reporting, and a planned AI Reference Intelligence layer.";

export const metadata = {
  title: "PixelScope | Display Analysis & Support | PBE",
  description,
  alternates: {
    canonical: canonicalUrl,
  },
  keywords: [
    "PixelScope",
    "display analysis",
    "iPhone camera measurement",
    "broadcast displays",
    "optical tracking",
    "Precision Broadcast Engineering",
  ],
  openGraph: {
    title: "PixelScope | Display Analysis & Support | PBE",
    description,
    url: canonicalUrl,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "PixelScope | Display Analysis & Support | PBE",
    description,
  },
};

export default function PixelScopePage() {
  return (
    <div className={styles.psPage}>
      <PixelScopeHeader
        title="PixelScope"
        subtitle="An iPhone-based display analysis platform from Precision Broadcast Engineering. PixelScope coordinates controlled test patterns, camera-based acquisition, optical tracking, and structured reporting so a display inspection becomes documented engineering evidence for review."
      />
      <div className={styles.psArticle}>
        <section className={styles.psSection} aria-labelledby="about">
          <p className="genb-kicker">Display Analysis</p>
          <h2 id="about">What PixelScope is for</h2>
          <p>
            Looking at a display is not the same as diagnosing it. Room light,
            viewing angle, camera automation, and the difference between the
            active image and the surrounding bezel all change what an observer
            thinks they see. PixelScope treats those variables as part of the
            measurement problem.
          </p>
          <p>
            The app presents known 4K test fields on the display under test,
            follows the active image with multiplexed tracking marks, locks
            supported camera parameters, and collects frames across White,
            Black, Red, Green, and Blue. The result is a report that records
            both the measurements and the conditions under which they were
            acquired.
          </p>
          <p>
            This page is the PixelScope product and support area for Precision
            Broadcast Engineering. It is written for engineers, technicians,
            integrators, and facilities who need a portable way to inspect
            professional displays and keep a record of what was observed.
          </p>
        </section>

        <section className={styles.psSection} aria-labelledby="engineering">
          <p className="genb-kicker">Engineering Notes</p>
          <h2 id="engineering">From patterns to evidence</h2>
          <p>
            The first PixelScope engineering note follows the local Swift
            implementation: pattern sequencing, camera locks, multiplexed
            corner tracking, Black-field geometry, structured analysis, and
            report generation. It also distinguishes measurement features that
            are implemented today from the planned AI Reference Intelligence
            layer.
          </p>
          <div className={styles.psActions}>
            <Link href="/pixelscope/from-patterns-to-evidence" className="btn-secondary">
              Read Engineering Note
            </Link>
            <Link href="/pixelscope/from-patterns-to-evidence#demo" className="btn-secondary">
              Watch PixelScope in Action
            </Link>
          </div>
        </section>

        <section className={styles.psSection} id="support" aria-labelledby="support-title">
          <p className="genb-kicker">PixelScope Support</p>
          <h2 id="support-title">Contact the engineering team</h2>
          <p>
            For PixelScope questions, scan issues, or bug reports, email{" "}
            <a href="mailto:support@pbe-engineering.com?subject=PixelScope%20Support">
              support@pbe-engineering.com
            </a>
            . This address is the PixelScope support contact for Precision
            Broadcast Engineering.
          </p>
          <p>When reporting an issue, please include:</p>
          <ul>
            <li>iPhone model and iOS version</li>
            <li>PixelScope version, if shown in the app</li>
            <li>Display brand, model, and connection or adapter</li>
            <li>The scan step where the issue occurs</li>
            <li>Any on-screen message, and a short description of lighting and camera distance</li>
          </ul>
          <p>
            Before writing, confirm that the display is powered, the iPhone has
            a clear view of the active image, and both the phone and the app
            have been restarted once. Those details help the engineering team
            reconstruct the scan conditions.
          </p>
        </section>
      </div>
    </div>
  );
}
