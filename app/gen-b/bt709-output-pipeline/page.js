import Link from "next/link";
import ArticleFigure from "../../components/ArticleFigure";
import styles from "./page.module.css";

const canonicalUrl =
  "https://pbe-engineering.com/gen-b/bt709-output-pipeline";

export const metadata = {
  title: "Beyond Mirroring: GEN-B BT.709 Output Pipeline | PBE",
  description:
    "Precision Broadcast Engineering previews a new GEN-B architecture using Apple color management, Metal, USB-C DisplayPort and external measurement to pursue a controlled BT.709 output workflow from iPhone.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Beyond Mirroring: GEN-B BT.709 Output Pipeline | PBE",
    description:
      "Precision Broadcast Engineering previews a new GEN-B architecture using Apple color management, Metal, USB-C DisplayPort and external measurement to pursue a controlled BT.709 output workflow from iPhone.",
    url: canonicalUrl,
    type: "article",
  },
};

const stages = [
  {
    title: "BT.709-defined source content",
    text: "GEN-B already knows what its patterns are supposed to represent mathematically. The output path must preserve that intent rather than reinterpret it as generic UI graphics.",
  },
  {
    title: "Explicit color-space declaration",
    text: "The render target can be associated with an ITU-R BT.709 color space instead of leaving the content untagged or implicitly relying on the characteristics of the iPhone's internal display.",
  },
  {
    title: "Metal rendering",
    text: "Metal and MetalKit give GEN-B tighter control over the render target, pixel format, drawable behavior, and presentation path than conventional application UI rendering.",
  },
  {
    title: "Controlled SDR behavior",
    text: "HDR and Extended Dynamic Range are valuable technologies, but an SDR BT.709 reference must not unexpectedly become an HDR presentation merely because a connected display supports HDR. SDR/EDR behavior therefore has to be treated as an engineering parameter.",
  },
  {
    title: "External-display presentation",
    text: "The generated raster can then be presented to an external display through the iPhone's native USB-C DisplayPort capability and, where required, through a compatible HDMI adapter or cable.",
  },
];

const references = [
  {
    href: "https://support.apple.com/en-us/111828",
    label: "Apple — iPhone 15 Pro Max Technical Specifications",
  },
  {
    href: "https://support.apple.com/en-us/105099",
    label:
      "Apple — Charge and connect with the USB-C connector on your iPhone",
  },
  {
    href: "https://developer.apple.com/documentation/avfoundation/setting-color-properties-for-a-specific-resolution",
    label:
      "Apple Developer Documentation — Setting color properties for a specific resolution",
  },
  {
    href: "https://developer.apple.com/documentation/avfoundation/tagging-media-with-video-color-information",
    label:
      "Apple Developer Documentation — Tagging media with video color information",
  },
  {
    href: "https://developer.apple.com/documentation/metalkit/mtkview/colorspace",
    label: "Apple Developer Documentation — MTKView colorspace",
  },
  {
    href: "https://developer.apple.com/documentation/coregraphics/cgcolorspace/itur_709",
    label: "Apple Developer Documentation — CGColorSpace ITU-R 709",
  },
  {
    href: "https://www.itu.int/rec/R-REC-BT.709",
    label:
      "International Telecommunication Union — Recommendation ITU-R BT.709",
  },
];

const signalPathFigure = {
  src: "/images/gen-b/engineering-notes/bt709-output-pipeline/01-usbc-displayport-signal-path.png",
  alt: "GEN-B external output signal path from an iPhone through native USB-C DisplayPort and a compatible HDMI adapter to an external display.",
  width: 1672,
  height: 941,
  caption:
    "The transport is no longer the limiting idea: a modern iPhone provides a native USB-C DisplayPort path that can reach an external HDMI display through a compatible adapter.",
};

const resolutionFigure = {
  src: "/images/gen-b/engineering-notes/bt709-output-pipeline/02-resolution-is-not-colorimetry.png",
  alt: "Diagram showing that raster resolution is separate from color primaries, transfer function, RGB or Y′CbCr interpretation, video range, compositing, color management, and the physical interface.",
  width: 1672,
  height: 941,
  caption:
    "Raster dimensions describe geometry. They do not, by themselves, define colorimetry, transfer behavior, range, or the final physical video signal.",
};

const frameworksFigure = {
  src: "/images/gen-b/engineering-notes/bt709-output-pipeline/03-apple-frameworks-bt709-stack.png",
  alt: "Diagram of the Apple frameworks that define media color metadata, color space, GPU rendering, compositing, and external-display presentation.",
  width: 1672,
  height: 941,
  caption:
    "Different Apple frameworks control different parts of the problem: media color metadata, color-space definition, GPU rendering, compositing, and external-display presentation.",
};

const pipelineFigure = {
  src: "/images/gen-b/engineering-notes/bt709-output-pipeline/04-genb-controlled-output-pipeline.png",
  alt: "Diagram of the proposed GEN-B output path as separate controlled stages: source definition, color management, GPU rendering, SDR behavior, and external presentation.",
  width: 1672,
  height: 941,
  caption:
    "The proposed GEN-B path treats source definition, color management, GPU rendering, SDR behavior, and external presentation as separate controlled stages.",
};

const configuredFigure = {
  src: "/images/gen-b/engineering-notes/bt709-output-pipeline/05-configured-vs-verified-output.png",
  alt: "Diagram contrasting Configured Output, what the software explicitly requests, with Verified Output, what independent instrumentation confirms at the physical interface.",
  width: 1672,
  height: 941,
  caption:
    "Configured Output describes what the software explicitly requests. Verified Output describes what independent instrumentation confirms at the physical interface.",
};

const platformFigure = {
  src: "/images/gen-b/engineering-notes/bt709-output-pipeline/06-iphone-as-engineering-platform.png",
  alt: "Diagram of an iPhone used as an engineering platform, where the form factor changed and the engineering questions remained.",
  width: 1672,
  height: 941,
  caption: "The form factor changed. The engineering questions did not.",
};

const figureClasses = {
  figure: styles.figure,
  imageButton: styles.imageButton,
  image: styles.image,
  lightbox: styles.lightbox,
  lightboxPanel: styles.lightboxPanel,
  lightboxTitle: styles.lightboxTitle,
  lightboxClose: styles.lightboxClose,
  lightboxImage: styles.lightboxImage,
};

export default function Bt709OutputPipelinePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className="genb-kicker">GEN-B Engineering Preview</p>
            <h1>
              Beyond Mirroring: GEN-B Is Building a Controlled BT.709 Output
              Pipeline
            </h1>
            <p className={styles.subtitle}>
              A new AVFoundation-and-Metal architecture is being developed to
              move GEN-B beyond ordinary iPhone display output and toward a
              controlled, color-managed BT.709 signal path over USB-C.
            </p>
            <p className={styles.meta}>
              <span>Precision Broadcast Engineering</span>
              <span aria-hidden="true"> · </span>
              <time dateTime="2026-09-30">September 30, 2026</time>
            </p>
            <div className={styles.actions}>
              <Link href="/gen-b" className="btn-secondary">
                Back to GEN-B
              </Link>
              <Link href="/contact" className="btn-primary">
                Contact PBE
              </Link>
            </div>
          </div>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <p className={styles.lede}>
            For years, the assumption has been simple: a smartphone may be
            convenient, but a professional video generator belongs in a box.
          </p>
          <p>GEN-B was created to challenge that assumption.</p>
          <p>
            The first generation demonstrated that a modern iPhone can generate
            professional test patterns, controlled digital code values, and
            algorithmic audio references while also supporting high-quality
            12-bit 4:4:4 Apple ProRes 4444 XQ reference media inside a
            field-ready engineering platform.
          </p>
          <p>Now we are taking GEN-B to the next level.</p>
          <p>
            We already know exactly how our reference signals are generated.
            GEN-B is built around mathematically defined test patterns,
            controlled digital code values, algorithmic signal generation, and
            12-bit 4:4:4 Apple ProRes 4444 XQ reference media.
          </p>
          <p>
            The next step is the output architecture. GEN-B is now moving
            toward a deliberately controlled BT.709-targeted SDR pipeline using
            explicit color-space definition, Metal/MetalKit rendering, Core
            Animation compositing, and the iPhone’s native USB-C DisplayPort
            path — followed by independent measurement of the physical output
            signal.
          </p>
          <p>
            The generation side is already under control. The engineering work
            now moves downstream — into color-managed rendering, transport, and
            physical verification.
          </p>
        </section>

        <section className={styles.section}>
          <h2>USB-C changed the equation</h2>
          <p>
            The iPhone 15 Pro Max is not limited to wireless mirroring or a
            consumer-oriented playback path.
          </p>
          <p>
            Apple specifies that its USB-C connector supports DisplayPort and
            USB 3 data transfer at up to 10 Gb/s. Apple also documents
            external-display operation from USB-C-equipped iPhones at
            resolutions up to 4K at 60 Hz using DisplayPort, and up to 4K at
            60 Hz over HDMI when an appropriate HDMI 2.0 adapter or cable is
            used.
          </p>
          <p>That is important.</p>
          <p>
            GEN-B does not need 4K simply because the transport is capable of
            4K. A professional test raster may deliberately be 1920×1080 when
            that is the format being tested.
          </p>
          <p>
            What matters is that a modern iPhone now has a native
            high-bandwidth external-display path.
          </p>
          <p>
            And that gives us something extremely interesting to engineer
            against.
          </p>
          <ArticleFigure
            figure={signalPathFigure}
            priority
            classNames={figureClasses}
          />
        </section>

        <section className={styles.section}>
          <h2>Resolution is not colorimetry</h2>
          <p>
            A 1920×1080 or 3840×2160 image appearing on an HDMI monitor does
            not automatically make it a professional BT.709 reference.
          </p>
          <p>Resolution is only one part of the signal.</p>
          <p>Color primaries matter.</p>
          <p>The transfer function matters.</p>
          <p>RGB or Y′CbCr interpretation matters.</p>
          <p>Video range matters.</p>
          <p>Compositing matters.</p>
          <p>Operating-system color management matters.</p>
          <p>
            And the transformation between the application framebuffer and the
            physical external interface matters.
          </p>
          <p>
            That distinction is at the center of the next GEN-B architecture.
          </p>
          <ArticleFigure
            figure={resolutionFigure}
            classNames={figureClasses}
          />
        </section>

        <section className={styles.section}>
          <h2>Apple already exposes the pieces</h2>
          <p>
            Apple&apos;s AVFoundation framework provides explicit video color
            properties for HD BT.709 workflows, including ITU-R BT.709 color
            primaries, the BT.709 transfer function, and the BT.709 Y′CbCr
            matrix.
          </p>
          <p>
            Core Graphics independently exposes ITU-R BT.709 through
            CGColorSpace.
          </p>
          <p>
            Metal and MetalKit provide another critical part of the chain.
            MTKView renders through a Metal-backed presentation path and
            exposes an explicit colorspace property. Apple documents that when
            a color space is assigned to rendered content, Core Animation can
            perform the required color transformations while compositing the
            view.
          </p>
          <p>These technologies perform different jobs.</p>
          <p>AVFoundation is not an HDMI driver.</p>
          <p>Metal is not a broadcast standard.</p>
          <p>DisplayPort is not automatically BT.709.</p>
          <p>
            The engineering opportunity comes from controlling how the relevant
            stages work together.
          </p>
          <ArticleFigure
            figure={frameworksFigure}
            classNames={figureClasses}
          />
        </section>

        <section className={styles.section}>
          <h2>The new GEN-B output path</h2>
          <p>
            The architecture under development is intended to establish a
            deliberately controlled SDR output chain rather than simply placing
            a pattern on an iPhone screen and allowing the normal display
            pipeline to decide what happens next.
          </p>
          <ol className={styles.stages}>
            {stages.map((stage) => (
              <li key={stage.title}>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </li>
            ))}
          </ol>
          <p>
            The result is a fundamentally different engineering objective from
            ordinary screen mirroring.
          </p>
          <ArticleFigure
            figure={pipelineFigure}
            classNames={figureClasses}
          />
        </section>

        <section className={styles.section}>
          <h2>Configured Output and Verified Output are not the same thing</h2>
          <p>This distinction matters enough that we are giving it names.</p>
          <div className={styles.distinction}>
            <article>
              <h3>Configured Output</h3>
              <p>
                Configured Output means that GEN-B has explicitly requested the
                intended raster, pixel format, color space, transfer behavior,
                and external-display presentation using the controls made
                available by Apple&apos;s frameworks.
              </p>
            </article>
            <article>
              <h3>Verified Output</h3>
              <p>
                Verified Output means that the physical signal leaving the
                USB-C / DisplayPort / HDMI chain has been independently
                measured and confirmed against the intended engineering
                parameters.
              </p>
            </article>
          </div>
          <p>The first is software architecture.</p>
          <p>The second is metrology.</p>
          <p>Precision Broadcast Engineering intends to do both.</p>
          <p>
            GEN-B is building a BT.709-targeted, color-managed external output
            architecture.
          </p>
          <p>
            When the physical signal has been instrumentally verified, PBE will
            publish those results too.
          </p>
          <p>
            Because engineering does not become more credible by skipping the
            measurement.
          </p>
          <p>
            It becomes credible because the measurement is the final step.
          </p>
          <ArticleFigure
            figure={configuredFigure}
            classNames={figureClasses}
          />
        </section>

        <section className={styles.section}>
          <h2>Why this matters</h2>
          <p>
            For decades, professional test equipment has understandably been
            associated with dedicated hardware.
          </p>
          <p>Dedicated hardware still has enormous value.</p>
          <p>But computing architecture has changed.</p>
          <p>
            A current iPhone contains a powerful GPU, precision timing systems,
            hardware video processing, sophisticated color-management
            infrastructure, high-bandwidth USB-C, native DisplayPort output,
            and an operating system that exposes much of that capability
            through professional development frameworks.
          </p>
          <p>
            The interesting question is no longer whether an iPhone contains
            enough technology.
          </p>
          <p>It does.</p>
          <p>
            The question is whether that technology can be organized into a
            predictable engineering instrument.
          </p>
          <p>That is the problem GEN-B is attacking.</p>
        </section>

        <section className={`${styles.section} ${styles.skeptic}`}>
          <h2>For the skeptics</h2>
          <p>
            There will always be engineers who look at an iPhone and see a
            telephone.
          </p>
          <div className={styles.statements}>
            <p>We see a GPU.</p>
            <p>A high-performance computational platform.</p>
            <p>A high-bandwidth digital interface.</p>
            <p>A programmable signal generator.</p>
            <p>
              And a device that millions of engineers already carry in their
              pockets.
            </p>
          </div>
          <ArticleFigure
            figure={platformFigure}
            classNames={figureClasses}
          />
          <p>Swift does not make an engineering tool less serious.</p>
          <p>The size of the enclosure does not define signal accuracy.</p>
          <div className={styles.statements}>
            <p>The engineering does.</p>
            <p>The standards do.</p>
            <p>The measurements do.</p>
          </div>
          <p>
            And if the output passes the same tests, the electrons do not care
            whether the generator weighs twenty pounds or eight ounces.
          </p>
        </section>

        <section className={styles.section}>
          <h2>The next generation of GEN-B</h2>
          <p>
            The next phase of GEN-B is therefore not simply another group of
            patterns.
          </p>
          <p>
            It is a deeper redesign of how a software-defined generator
            controls the path between mathematical intent and the physical
            output connector.
          </p>
          <ul className={styles.terms} aria-label="Output architecture terms">
            <li>BT.709.</li>
            <li>Metal.</li>
            <li>AVFoundation.</li>
            <li>USB-C.</li>
            <li>DisplayPort.</li>
            <li>HDMI.</li>
            <li>Physical verification.</li>
          </ul>
          <div className={styles.closing}>
            <p>
              For those who believed a serious broadcast engineering instrument
              could never be built in Swift on an iPhone:
            </p>
            <p className={styles.closingLine}>Keep watching.</p>
            <p className={styles.closingLine}>We are not finished.</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>References</h2>
          <ol className={styles.references}>
            {references.map((reference) => (
              <li key={reference.href}>
                <a
                  href={reference.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {reference.label}
                </a>
              </li>
            ))}
          </ol>
          <p className={styles.closingNote}>
            <em>
              GEN-B is a professional Full HD test-signal generator and
              display-analysis platform developed by Precision Broadcast
              Engineering.
            </em>
          </p>
        </section>

        <section className={styles.callout}>
          <p className="genb-kicker">GEN-B Engineering Preview</p>
          <p>
            This preview describes a BT.709-targeted output architecture under
            development. Physical verification of the external signal has not
            yet been completed.
          </p>
        </section>

        <section className={styles.finalCta}>
          <div>
            <p className="genb-kicker">GEN-B Engineering Preview</p>
            <h2>
              Beyond Mirroring: GEN-B Is Building a Controlled BT.709 Output
              Pipeline
            </h2>
            <p>
              A new AVFoundation-and-Metal architecture is being developed to
              move GEN-B beyond ordinary iPhone display output and toward a
              controlled, color-managed BT.709 signal path over USB-C.
            </p>
          </div>
          <div className={styles.actions}>
            <Link href="/gen-b" className="btn-secondary">
              Back to GEN-B
            </Link>
            <Link href="/contact" className="btn-primary">
              Contact PBE
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
