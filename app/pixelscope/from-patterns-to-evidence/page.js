import Link from "next/link";
import ArticleFigure from "../../components/ArticleFigure";
import { PixelScopeHeader, SwiftExcerpt } from "../components";
import styles from "../pixelscope.module.css";
import excerpts from "./excerpts.json";

const canonicalUrl =
  "https://pbe-engineering.com/pixelscope/from-patterns-to-evidence";
const title =
  "PixelScope: Turning the iPhone Camera into an Intelligent Display Analysis System";
const description =
  "Discover PixelScope, Precision Broadcast Engineering's iPhone-based display analysis platform combining controlled 4K test patterns, optical tracking, structured measurements, professional reporting, and AI-assisted reference intelligence.";

export const metadata = {
  title: `${title} | PBE`,
  description,
  alternates: {
    canonical: canonicalUrl,
  },
  keywords: [
    "PixelScope",
    "display analysis",
    "iPhone camera",
    "4K test patterns",
    "optical tracking",
    "AE AF AWB lock",
    "display uniformity",
    "professional reporting",
    "Precision Broadcast Engineering",
  ],
  openGraph: {
    title,
    description,
    url: canonicalUrl,
    type: "article",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

const phases = [
  ["P0 / B0", "All four visible", "Establish corner observations"],
  ["P1 / B1", "Top-left hidden", "Sample the uncovered top-left area"],
  ["P2 / B2", "Top-right hidden", "Sample the uncovered top-right area"],
  ["P3 / B3", "Bottom-right hidden", "Sample the uncovered bottom-right area"],
  ["P4 / B4", "Bottom-left hidden", "Sample the uncovered bottom-left area"],
  ["P5 / B5", "All four hidden", "Carry forward the last trusted geometry"],
];

const imageBase = "/images/pixelscope";

const figures = {
  acquisition: {
    src: `${imageBase}/pixelscope-acquisition-concept.png`,
    alt: "Controlled 4K test field on a display, iPhone camera capture, five sealed color fields, analysis, and a PixelScope report",
    width: 1672,
    height: 941,
    unoptimized: true,
    caption:
      "A known 4K test field on the display, the iPhone as the measuring instrument, the White–Black–Red–Green–Blue sequence, and the path from sealed frames to a report.",
  },
  workflow: {
    src: `${imageBase}/pixelscope-ai-assisted-workflow.png`,
    alt: "Five-step PixelScope path from a known field and locked iPhone capture through sealed collections, analysis, and a shareable report",
    width: 1669,
    height: 942,
    unoptimized: true,
    caption:
      "The intended PixelScope path: a known field, locked iPhone capture of the five rasters, sealed collections, then analysis and a shareable report. Manufacturer-reference comparison and AI-assisted interpretation are later layers, not a shipping intelligence engine.",
  },
  multiplexed: {
    src: `${imageBase}/pixelscope-multiplexed-tracking.png`,
    alt: "Green cross and L corner markers with the six-phase P0 through P5 visibility sequence",
    width: 1672,
    height: 941,
    unoptimized: true,
    caption:
      "The six-phase corner sequence. Each marker is a green cross with a companion L. Visible marks stay excluded from photometric sampling; the final phase hides all four.",
  },
  black: {
    src: `${imageBase}/pixelscope-black-screen-tracking.png`,
    alt: "Black-screen tracking using visible, estimated, and inherited corner states when the active image merges with bezel and room",
    width: 1672,
    height: 941,
    unoptimized: true,
    caption:
      "On a black field, the active image can merge with bezel and room. Alignment is kept with visible, estimated, and inherited corner states rather than rediscovering four unmarked corners.",
  },
  aiReference: {
    src: `${imageBase}/pixelscope-ai-reference-intelligence.png`,
    alt: "Planned AI Reference Intelligence flow from measured scan evidence through verified context to interpretation only where sources exist",
    width: 1672,
    height: 941,
    unoptimized: true,
    caption:
      "The planned AI Reference Intelligence layer: measured scan evidence first, verified context second, and interpretation only where those sources exist. Missing references stay empty.",
  },
  reporting: {
    src: `${imageBase}/pixelscope-reporting-documentation.png`,
    alt: "PixelScope reporting path from a measured session to in-app preview, generated PDF, and share destinations",
    width: 1672,
    height: 941,
    unoptimized: true,
    caption:
      "One report model feeds the in-app preview and the PDF. The saved package can be shared through the destinations already on the phone.",
  },
};

const figureClasses = {
  figure: styles.psFigure,
  imageButton: styles.psImageButton,
  image: styles.psFigureImage,
  lightbox: styles.psLightbox,
  lightboxPanel: styles.psLightboxPanel,
  lightboxTitle: styles.psLightboxTitle,
  lightboxClose: styles.psLightboxClose,
  lightboxImage: styles.psLightboxImage,
};

export default function PixelScopeEngineeringNotePage() {
  return (
    <div className={styles.psPage}>
      <PixelScopeHeader
        article
        title={title}
        subtitle="How controlled 4K test patterns, multiplexed optical tracking, and camera-based acquisition turn a display inspection into documented engineering evidence."
      />
      <article className={styles.psArticle}>
        <section className={styles.psSection} aria-labelledby="introduction">
          <h2 id="introduction">A display is harder to diagnose than it looks.</h2>
          <p>
            A professional display can look acceptable from one chair and
            defective from another. Room light, viewing angle, the bezel around
            the active image, and the observer&apos;s own visual memory all
            change the result. A handheld camera adds another layer: autofocus,
            auto-exposure, and auto white balance will happily rewrite the
            scene as the test color changes.
          </p>
          <p>
            PixelScope exists because those variables are not side issues. They
            are the measurement. The product is an iPhone-based display analysis
            system: it presents known test fields, keeps a geometric hold on the
            active image, locks supported camera parameters, collects many
            observations instead of one snapshot, and writes a report that can
            be reviewed later.
          </p>
          <p>
            This note follows the local Swift implementation reviewed on
            September 9, 2026. Every code block is a short, contiguous excerpt
            from that source, with its original file, line numbers, and source
            text. The excerpts are portions of the app, not standalone sample
            programs.
          </p>
        </section>

        <section className={styles.psSection} id="demo" aria-labelledby="demo-title">
          <p className="genb-kicker">Workflow Preview</p>
          <h2 id="demo-title">PixelScope in action</h2>
          <p>
            The recording below shows a PixelScope scan in operation. Use the
            player controls to pause at pattern transitions. The implementation
            behind those transitions is what the rest of this note explains.
          </p>
          <figure className={styles.psVideoFigure}>
            <video
              className={styles.psVideo}
              controls
              playsInline
              preload="none"
              poster="/images/pixelscope/pixelscope-demo-poster.png"
              width={1920}
              height={1080}
              aria-label="PixelScope demonstration recording"
              aria-describedby="demo-caption"
            >
              <source src="/videos/pixelscope/pixelscope-demo.mp4" type="video/mp4" />
              Your browser does not support embedded video. Open the recording using the link below.
            </video>
            <figcaption className={styles.psCaption} id="demo-caption">
              PixelScope demonstration recording. The demo uses native browser controls and does not autoplay.
            </figcaption>
          </figure>
          <p>
            <a href="/videos/pixelscope/pixelscope-demo.mp4">
              Open the original MP4 recording
            </a>
          </p>
        </section>

        <section className={styles.psSection} id="pattern-sequence">
          <h2>Known fields, not guessed colors</h2>
          <p>
            PixelScope does not ask the camera to interpret an unknown picture
            on the wall. It drives the display under test with controlled 4K
            measurement rasters — White, Black, Red, Green, and Blue at
            3840×2160 — and then asks a much narrower question: what did the
            locked camera record from that known field?
          </p>
          <p>
            White comes first for a reason. It is the acquisition reference: a
            bright, full-area field on which the session can stabilize, lock
            supported camera parameters, and establish geometry before the
            darker and saturated fields begin. The measurement sequence then
            visits White, Black, Red, Green, and Blue in that order. Each entry
            pairs a settling state with a capture state so the transition is
            explicit in the workflow.
          </p>
          <SwiftExcerpt excerpt={excerpts.sequence} />
          <p>
            The session uses the same multiplexed acquisition routine for all
            five fields. It seals each collection of frames before moving on.
            Analysis, master-image writing, and report construction happen
            after the five collections are complete. Capturing first keeps the
            heavier work out of the timed pattern sequence.
          </p>
          <ArticleFigure
            id="illustration-acquisition-concept"
            figure={figures.acquisition}
            classNames={figureClasses}
          />
        </section>

        <section className={styles.psSection} id="camera-locks">
          <h2>A consistent camera reference</h2>
          <p>
            If focus, exposure, and white balance were allowed to hunt as the
            screen changed from white to black to red, the report would mix
            display behavior with camera behavior. PixelScope therefore locks
            the supported AE, AF, and AWB settings after the initial white
            stabilization interval, then holds that reference across the rest
            of the scan.
          </p>
          <SwiftExcerpt excerpt={excerpts.locks} />
          <p>
            Custom exposure is used where the device supports it; otherwise the
            controller falls back to exposure lock. White-balance gains are
            clamped to the device range before lock. Focus position, exposure
            duration, ISO, gains, and camera modes are stored with the scan
            metadata. After the session, supported continuous automatic modes
            are restored.
          </p>
        </section>

        <section className={styles.psSection} id="capture-dwell">
          <h2>One snapshot is not a measurement.</h2>
          <p>
            A single still can be sharp, blurred, slightly moved, or caught
            during a camera adjustment. PixelScope treats dwell time as a
            collection window, not as the exposure of one frame. During each
            pattern-specific dwell and capture phase, the app copies frames
            into its own memory, attaches the current pattern, tracking phase,
            geometry, and camera settings, and later decides which frames are
            fit for analysis.
          </p>
          <SwiftExcerpt excerpt={excerpts.dwell} />
          <p>
            The reviewed source configures distinct windows for the shared
            multiplex phases. Those values describe the implementation that was
            inspected. They are not a published acquisition specification, and
            they can change as the app develops.
          </p>
          <SwiftExcerpt excerpt={excerpts.timing} />
          <p>
            A timed window does not guarantee a fixed number of usable frames.
            The pipeline records observed, accepted, and rejected counts.
            Analysis can then qualify its findings from the actual acquisition
            rather than from elapsed time alone. That is why controlled
            acquisition matters: the report can say not only what was measured,
            but how much evidence supported the measurement.
          </p>
        </section>

        <section className={styles.psSection} id="corner-tracking">
          <h2>Green crosses are engineering references, not decoration.</h2>
          <p>
            Handheld capture moves. The display does not always fill the frame,
            and the active image is not the same thing as the plastic or metal
            around it. PixelScope therefore places tracking marks at the
            corners of the generated field: a green cross with an inward-facing
            L-shaped companion. Those marks exist so the software can keep a
            quadrilateral on the active image while the operator or the phone
            moves.
          </p>
          <p>
            A marker that helps geometry also contaminates photometry. The
            cross is extra light and extra structure on the very region being
            measured. PixelScope resolves that conflict in time. The field
            cycles through six visibility phases: all corners on, one corner
            off at a time, then all corners off.
          </p>
          <SwiftExcerpt excerpt={excerpts.phases} />
          <p>
            The one-corner-off phases proceed clockwise from the top-left.
            While one corner is uncovered for sampling, the other three remain
            visible so tracking can continue. Visible markers are excluded from
            photometric sampling. The exclusion covers the cross and the L
            together, with additional margin for detector uncertainty.
          </p>
          <SwiftExcerpt excerpt={excerpts.mask} />
          <div className={styles.psTableWrap} tabIndex={0} role="region" aria-label="Multiplexed tracking phase table">
            <table className={styles.psTable}>
              <thead>
                <tr>
                  <th scope="col">Phase</th>
                  <th scope="col">Corner markers</th>
                  <th scope="col">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {phases.map(([phase, visible, purpose]) => (
                  <tr key={phase}>
                    <th scope="row">{phase}</th>
                    <td>{visible}</td>
                    <td>{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ArticleFigure
            id="illustration-multiplexed-tracking"
            figure={figures.multiplexed}
            classNames={figureClasses}
          />
        </section>

        <section className={styles.psSection} id="black-tracking">
          <h2>Black is the geometry problem that looking cannot solve.</h2>
          <p>
            On a black test field, dark display pixels, a black bezel, and a
            dim room can merge into one silhouette. A human observer often
            cannot say where the active image ends. A camera has the same
            difficulty, and it is worse if the tracking marks are also off:
            there is then no bright corner reference left to observe.
          </p>
          <p>
            PixelScope does not pretend to rediscover four corners from an
            unmarked black field. Live cross tracking runs through the phases
            that still show markers. The final all-off phase inherits the last
            trusted display quadrilateral. Black uses the same multiplex engine
            as White and RGB, but it keeps its own B0–B5 report keys so the
            documentation can describe that field in the language already used
            for Black.
          </p>
          <SwiftExcerpt excerpt={excerpts.black} />
          <p>
            Continuity is preserved without rewriting the evidence. Each
            trusted quad records how it was obtained: visible crosses, an
            estimated missing corner, a held hidden corner, or an inherited
            quadrilateral. Per-corner state is equally explicit. A visible
            observation is not the same thing as an estimated corner or an
            inherited one.
          </p>
          <SwiftExcerpt excerpt={excerpts.trackingSources} />
          <SwiftExcerpt excerpt={excerpts.cornerStates} />
          <p>
            That distinction matters when the report is read later. Inherited
            geometry can keep the measurement aligned through the unmarked
            black interval. It is not presented as a fresh cross detection.
            Estimated corners can keep a moving camera in contact with the
            panel without claiming that every corner was directly seen in that
            frame.
          </p>
          <ArticleFigure
            id="illustration-black-screen-tracking"
            figure={figures.black}
            classNames={figureClasses}
          />
        </section>

        <section className={styles.psSection} id="analysis-reporting">
          <h2>Structured measurements, not a single impression</h2>
          <p>
            After the five collections are sealed, analysis runs on the master
            images. The engine computes channel means, luma variation, sample
            counts, and pattern-dependent anomaly statistics. The point is not
            to replace an engineer with a score. It is to put numbers next to
            the conditions that produced them.
          </p>
          <SwiftExcerpt excerpt={excerpts.analyze} />
          <p>Those measurements are organized around the questions a display inspection actually asks:</p>
          <ul>
            <li>
              <strong>Uniformity</strong> — how luma varies across the accepted
              samples of a known field.
            </li>
            <li>
              <strong>Black behavior</strong> — whether the black field stays
              dark, or whether leakage and structure appear once geometry is held.
            </li>
            <li>
              <strong>Color-channel behavior</strong> — independent Red, Green,
              and Blue response rather than a single mixed impression.
            </li>
            <li>
              <strong>Localized panel anomalies</strong> — clusters and
              persistent low-response samples that survive across frames and
              bright fields.
            </li>
            <li>
              <strong>Edge and corner behavior</strong> — abnormal rows and
              columns, where tracking marks would otherwise hide the very
              regions that matter.
            </li>
            <li>
              <strong>Backlight or panel irregularities</strong> — spatial
              structure in the master images that is worth investigating, not
              automatically a named defect.
            </li>
          </ul>
          <p>
            Findings are qualified by acquisition quality. For Black,
            insufficient quality suppresses the anomaly counts rather than
            presenting empty statistics as a clean bill of health.
          </p>
          <SwiftExcerpt excerpt={excerpts.analysis} />
          <p>
            Zeroed counts must be read with that rule in mind: they can mean a
            finding was withheld. A low-response sample in a rectified camera
            image is evidence to inspect, not a one-to-one count of physical
            panel pixels.
          </p>
          <ArticleFigure
            id="illustration-ai-assisted-workflow"
            figure={figures.workflow}
            classNames={figureClasses}
          />
        </section>

        <section className={styles.psSection} id="ai-reference">
          <h2>Measurement first, interpretation second</h2>
          <p>
            PixelScope already captures monitor identity — brand, model, and
            manufacture year — and it already records measured facts from the
            scan. What it does not yet do is apply model-specific manufacturer
            tolerances or an aggregated PixelScope reference library. Those
            sources are explicitly marked unavailable. Missing references stay
            false; they are not filled with invented limits.
          </p>
          <SwiftExcerpt excerpt={excerpts.report} />
          <p>
            The planned PixelScope AI Reference Intelligence layer sits after
            that measurement chain. The report pipeline already reserves a
            later interpretation stage. In the reviewed source, that stage
            advances progress and then builds the report from measured
            analysis. It is a place in the workflow, not a shipping
            intelligence engine.
          </p>
          <SwiftExcerpt excerpt={excerpts.reportPhases} />
          <p>
            The intended layer would combine PixelScope measured evidence with
            context the measurement alone cannot supply: monitor brand, model,
            manufacture year, display architecture where known, manufacturer
            technical documentation, credible engineering references, and
            peer-reviewed or technical literature where it applies. Accumulated
            diagnostic context from prior PixelScope work would enter only as
            identified reference material, not as anonymous authority.
          </p>
          <p>
            The design constraint is the same as the current report model:
            measurement comes first. AI-assisted interpretation comes second,
            and only where the supporting references exist. When they do not,
            the system should disclose uncertainty rather than fabricate
            model-specific knowledge. A confident sentence that cannot be
            sourced is worse than a measured result with an empty reference
            field.
          </p>
          <ArticleFigure
            id="illustration-ai-reference"
            figure={figures.aiReference}
            classNames={figureClasses}
          />
        </section>

        <section className={styles.psSection} id="reporting">
          <h2>A scan should leave documentation behind.</h2>
          <p>
            PixelScope turns a diagnostic session into a record. One report
            model feeds the in-app preview and the PDF renderer, so the two
            views cannot drift apart. The saved package includes the report,
            the PDF, and pattern thumbnails. Temporary 4K masters are not kept
            in that archive.
          </p>
          <SwiftExcerpt excerpt={excerpts.pdf} />
          <p>The document is built to be read by people who were not holding the phone:</p>
          <ul>
            <li>measurements from the five known fields</li>
            <li>observations qualified by accepted and rejected frames</li>
            <li>monitor identity when it was captured</li>
            <li>findings and analysis, with acquisition quality attached</li>
            <li>methodology, including tracking sources and camera locks</li>
            <li>an in-app report preview and a shareable PDF</li>
          </ul>
          <p>
            Export uses the standard iOS share sheet, so the PDF can be sent
            through the destinations already on the phone. That matters in the
            field. The point of the workflow is not only to see something on
            the display. It is to leave a file that an engineering manager, an
            integrator, a facility, a service organization, or an equipment
            owner can reopen without repeating the scan.
          </p>
          <ArticleFigure
            id="illustration-reporting"
            figure={figures.reporting}
            classNames={figureClasses}
          />
          <p>
            Used that way, PixelScope is a portable instrument for people who
            already work with professional displays: field technicians checking
            a room, engineering managers reviewing a finding, integrators
            documenting a handover, and owners who need more than a photograph
            of a screen.
          </p>
        </section>

        <section className={styles.psSection} id="source-notes">
          <h2>Implementation notes</h2>
          <p>
            Excerpts were verified against PixelScope source revision{" "}
            <code>3d37101f57cb</code>. File paths in the captions are relative
            to the PixelScope project. They identify the reviewed source; the
            website does not require the Xcode project at runtime.
          </p>
          <p>
            Some in-app report sentences still contain older dwell wording.
            This article describes controlled acquisition windows and
            pattern-specific dwell and capture phases. It does not treat those
            older sentences as a timing specification.
          </p>
          <div className={styles.psActions}>
            <Link href="/pixelscope" className="btn-secondary">
              Back to PixelScope
            </Link>
            <Link href="/pixelscope#support" className="btn-primary">
              Contact PixelScope Support
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
