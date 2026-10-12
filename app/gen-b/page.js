import Image from "next/image";
import Link from "next/link";
import InteractiveGenBDiagram from "./InteractiveGenBDiagram";

const GEN_B_APP_STORE_URL =
  "https://apps.apple.com/us/app/gen-b/id6769944250";

const features = [
  {
    title: "Broadcast Test Patterns",
    text: "Professional HD patterns for fast video troubleshooting, calibration checks, and signal verification.",
  },
  {
    title: "Wired Signal Output",
    text: "Designed for iPhone USB-C video output, giving engineers a portable broadcast test source anywhere.",
  },
  {
    title: "Tone Generator",
    text: "Built-in 1 kHz stereo tone with selectable broadcast reference levels for audio testing.",
  },
  {
    title: "RasterScope & Sweep",
    text: "Advanced screen-area analysis tools to verify aspect ratio, active video area, and display behavior.",
  },
];

const highlights = [
  "Full HD broadcast test patterns",
  "Reference video clips",
  "1 kHz stereo tone generator",
  "External output status monitoring",
  "RasterScope active-area tools",
  "Sweep display analysis",
  "Broadcast workflow support",
  "Designed for iPhone",
];

const showcaseCards = [
  {
    title: "Portable Broadcast Testing",
    text: "GEN-B turns your iPhone into a professional broadcast test signal source for quick field verification, troubleshooting, and setup checks.",
  },
  {
    title: "Patterns, Video & Audio",
    text: "Access HD test patterns, ProRes reference videos, and a built-in 1 kHz tone generator with broadcast-level presets.",
  },
  {
    title: "Designed for Engineers",
    text: "Built for broadcast workflows, GEN-B helps verify signal output, display behavior, active video area, and audio reference levels with confidence.",
  },
];

const analysisHighlights = [
  {
    title: "Oscilloscope Analysis",
    text: "Monitor generated video levels and waveform characteristics before external video transmission.",
  },
  {
    title: "Vectorscope Monitoring",
    text: "Verify chroma positioning, color balance, and Rec.709 compliance.",
  },
  {
    title: "Broadcast Workflow Integration",
    text: "Built specifically for engineering, troubleshooting, and field verification tasks.",
  },
];

export default function GenBPage() {
  return (
    <section className="genb-page">
      <section className="genb-hero">
        <Image
          src="/gen-b/genb-hero-bars.png"
          alt="GEN-B broadcast color bars"
          fill
          priority
          className="genb-hero-bg"
        />
        <div className="genb-hero-overlay" />

        <div className="genb-hero-inner">
          <div className="genb-hero-copy">
            <p className="genb-kicker">Professional iPhone Test Generator</p>
            <h1>GEN-B</h1>
            <h2>
              Full High Definition Broadcast Signals Generator. Right from your
              iPhone.
            </h2>
            <p>
              GEN-B is a professional broadcast test signal generator designed for
              broadcast engineers, control rooms, production teams, and field
              troubleshooting. It provides reliable video patterns, reference
              clips, tone generation, and signal analysis tools to help validate
              displays, converters, signal paths, and real-world broadcast
              workflows.
            </p>

            <div className="genb-hero-actions">
              <a href={GEN_B_APP_STORE_URL} className="genb-store-link" aria-label="Download GEN-B on the App Store">
                <Image
                  src="/gen-b/genb-app-store-badge.png"
                  alt="Download on the App Store"
                  width={194}
                  height={75}
                  className="genb-store-badge"
                />
              </a>
              <Link href="/support" className="btn-secondary">
                Contact Support
              </Link>
              <Link href="/gen-b/wireless-output" className="btn-secondary">
                Wireless Output
              </Link>
            </div>
          </div>

          <div className="genb-hero-visual">
            <InteractiveGenBDiagram />
            <a
              href={GEN_B_APP_STORE_URL}
              aria-label="View GEN-B on the App Store"
            >
              <Image
                src="/gen-b/genb-app-icon.png"
                alt="GEN-B app icon"
                width={96}
                height={96}
                className="genb-icon-accent"
              />
            </a>
          </div>
        </div>
      </section>

      <section className="genb-about-section">
        <div className="genb-about-copy">
          <h2>Powered by Modern iPhone Performance</h2>
          <p>
            GEN-B is built to take advantage of the power inside today&apos;s
            iPhone hardware. Modern Apple silicon combines advanced processing,
            GPU-accelerated graphics, professional video handling, high-speed
            USB-C video output, and efficient media performance inside a device
            small enough to fit in your pocket.
          </p>
          <p>
            For broadcast engineers, that power matters. GEN-B uses the iPhone
            as a portable professional platform for generating Full HD test
            patterns, reference clips, audio tone, external video output, and
            signal-analysis tools in real-world field environments.
          </p>
          <p>
            The result is a compact broadcast test signal system powered by
            modern mobile hardware — fast, portable, reliable, and ready for
            engineering work wherever the signal path begins.
          </p>
        </div>

        <div className="genb-hero-visual">
          <Image
            src="/gen-b/modern-iphone-silicon.jpg"
            alt="Modern iPhone Apple silicon hardware"
            width={650}
            height={366}
            className="genb-interface-image"
          />
        </div>
      </section>

      <section className="genb-section">
        <div className="genb-section-heading">
          <p className="genb-kicker">Field-Ready Tools</p>
          <h2>GEN-B Features</h2>
        </div>

        <div className="genb-feature-grid">
          {features.map((feature) => (
            <article className="genb-feature-card" key={feature.title}>
              <span className="genb-feature-mark" />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="genb-about-section">
        <div className="genb-about-copy">
          <p className="genb-kicker">Built for Broadcast Workflows</p>
          <h2>Professional signal testing in your pocket.</h2>
          <p>
            GEN-B combines HD test patterns, reference video clips, tone
            generation, external output monitoring, RasterScope tools, and Sweep
            analysis in a simple field-ready app built for professional
            broadcast workflows.
          </p>
        </div>

        <div className="genb-about-panel">
          <a
            href={GEN_B_APP_STORE_URL}
            aria-label="View GEN-B on the App Store"
          >
            <Image
              src="/gen-b/genb-app-icon.png"
              alt="GEN-B app icon"
              width={118}
              height={118}
              className="genb-about-icon"
            />
          </a>
          <p>
            Designed to help engineers validate the real chain: source, adapter,
            converter, router, display, and room.
          </p>
        </div>
      </section>

      <section className="genb-section genb-highlights-section">
        <div className="genb-section-heading">
          <p className="genb-kicker">Technical Highlights</p>
          <h2>Broadcast tools for practical signal checks.</h2>
        </div>

        <div className="genb-highlight-grid">
          {highlights.map((highlight) => (
            <div className="genb-highlight-item" key={highlight}>
              <span />
              <p>{highlight}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="genb-section">
        <div className="genb-section-heading">
          <p className="genb-kicker">GEN-B Engineering Notes</p>
          <h2>Technical notes from the GEN-B engineering workflow.</h2>
        </div>

        <div className="genb-showcase-grid genb-notes-grid">
          <article className="genb-showcase-card">
            <span className="genb-showcase-rule" />
            <h3>
              Beyond the Smartphone: Inside GEN-B&apos;s Professional HDR and
              SDR Signal Generation Architecture
            </h3>
            <p>
              How GEN-B constructs ITU-R BT.2111 reference patterns as native
              10-bit values and keeps that HDR path separate from its BT.709
              SDR presentation.
            </p>
            <Link
              href="/gen-b/hdr-sdr-signal-engineering"
              className="btn-secondary"
            >
              Read Engineering Note
            </Link>
          </article>
          <article className="genb-showcase-card">
            <span className="genb-showcase-rule" />
            <h3>
              Beyond Mirroring: GEN-B Is Building a Controlled BT.709 Output
              Pipeline
            </h3>
            <p>
              How PBE is engineering a BT.709-targeted external output
              architecture around Metal, Apple color management, USB-C
              DisplayPort, and physical verification.
            </p>
            <Link
              href="/gen-b/bt709-output-pipeline"
              className="btn-secondary"
            >
              Read Engineering Preview
            </Link>
          </article>
          <article className="genb-showcase-card">
            <span className="genb-showcase-rule" />
            <h3>
              When the Visible Image Depends on Invisible Mathematics
            </h3>
            <p>
              Standards, history, algorithms, and the engineering logic behind
              professional test-pattern generation.
            </p>
            <Link
              href="/gen-b/standards-mathematics-television"
              className="btn-secondary"
            >
              Read Engineering Note
            </Link>
          </article>
          <article className="genb-showcase-card">
            <span className="genb-showcase-rule" />
            <h3>
              EBU Color Bars: The Hidden Mathematics Behind 75% and 100%
            </h3>
            <p>
              How a vectorscope discrepancy led PBE to replace a fixed
              normalization value with pattern-aware Rec.709 calibration
            </p>
            <Link
              href="/gen-b/ebu-color-bars-75-100"
              className="btn-secondary"
            >
              Read Engineering Note
            </Link>
          </article>
          <article className="genb-showcase-card">
            <span className="genb-showcase-rule" />
            <h3>
              SWEEP: When iOS Doesn&apos;t Give You EDID, You Build with Geometry
            </h3>
            <p>
              A technical breakdown of how GEN-B SWEEP uses timing, geometry,
              and a moving reference layer to provide useful display information
              without relying on raw EDID access.
            </p>
            <Link href="/gen-b/sweep" className="btn-secondary">
              Read Engineering Note
            </Link>
          </article>
        </div>
      </section>

      <section className="genb-section">
        <div className="genb-section-heading">
          <p className="genb-kicker">Showcase</p>
          <h2>Purpose-built screens for fast technical decisions.</h2>
        </div>

        <div className="genb-showcase-grid">
          {showcaseCards.map((card) => (
            <article className="genb-showcase-card" key={card.title}>
              <span className="genb-showcase-rule" />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="genb-analysis-section">
        <div className="genb-analysis-heading">
          <p className="genb-kicker">Signal Intelligence</p>
          <h2>Professional Signal Analysis</h2>
          <p>
            Integrated waveform and vectorscope-style analysis tools designed to
            help engineers validate video signals before transmission.
          </p>
        </div>

        <div className="genb-analysis-image-wrap">
          <Image
            src="/gen-b/genb-instruments-screen.png"
            alt="GEN-B professional signal analysis instruments screen"
            width={2796}
            height={1290}
            className="genb-analysis-image"
          />
        </div>

        <div className="genb-analysis-grid">
          {analysisHighlights.map((highlight) => (
            <article className="genb-analysis-card" key={highlight.title}>
              <span className="genb-showcase-rule" />
              <h3>{highlight.title}</h3>
              <p>{highlight.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="genb-action-section">
        <div className="genb-action-heading">
          <p className="genb-kicker">Workflow Preview</p>
          <h2>GEN-B in Action</h2>
          <p>
            See GEN-B in operation as it navigates through test patterns, video
            references, audio tone generation, RasterScope tools, and signal
            analysis features.
          </p>
          <p>
            Designed by broadcast engineers, GEN-B supports professional display
            testing workflows across USB-C video output, DisplayPort
            adapters, external displays, converters, and field signal paths.
          </p>
        </div>

        <div className="genb-action-video-wrap">
          <video
            className="genb-action-video"
            controls
            preload="metadata"
            aria-label="GEN-B in operation"
          >
            <source src="/gen-b/genb-in-action.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="genb-final-cta">
        <div>
          <p className="genb-kicker">Download GEN-B</p>
          <h2>Ready to test your signal chain?</h2>
          <p>
            Download GEN-B and carry a professional broadcast test generator in
            your pocket.
          </p>
        </div>

        <a href={GEN_B_APP_STORE_URL} className="genb-store-link" aria-label="Download GEN-B on the App Store">
          <Image
            src="/gen-b/genb-app-store-badge.png"
            alt="Download on the App Store"
            width={194}
            height={75}
            className="genb-store-badge"
          />
        </a>
      </section>
    </section>
  );
}
