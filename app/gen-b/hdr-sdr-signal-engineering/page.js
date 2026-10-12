import Image from "next/image";
import Link from "next/link";
import ArticleFigure from "../../components/ArticleFigure";
import PatternIntro from "./PatternIntro";
import styles from "./page.module.css";

const canonicalUrl =
  "https://pbe-engineering.com/gen-b/hdr-sdr-signal-engineering";

const GEN_B_APP_STORE_URL =
  "https://apps.apple.com/us/app/gen-b/id6769944250";

export const metadata = {
  title:
    "Beyond the Smartphone: GEN-B HDR and SDR Signal Generation | PBE",
  description:
    "How GEN-B generates mathematical 10-bit BT.709 SDR and BT.2100 HDR reference patterns and presents them through Metal.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title:
      "Beyond the Smartphone: GEN-B HDR and SDR Signal Generation | PBE",
    description:
      "Mathematical 10-bit BT.709 and BT.2100 reference patterns, Metal presentation, and separate SDR and HDR policies in GEN-B.",
    url: canonicalUrl,
    type: "article",
  },
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

const figures = {
  architecture: {
    src: "/images/gen-b/engineering-notes/hdr-sdr-signal-engineering/01-dual-sdr-hdr-metal-architecture.svg",
    alt: "Diagram of GEN-B mathematical architecture: SDRTenBitPatternEngine produces a 10-bit BT.709 raster with EDR off; twelve HDR patterns use separate BT.2100 PQ and HLG policies with EDR on; a mathematical video engine is marked planned and is not implemented.",
    width: 1600,
    height: 900,
    caption:
      "GEN-B generates mathematical SDR and HDR reference signals and presents them through Metal. SDR uses a 10-bit BT.709 policy. HDR uses separate BT.2100 PQ and HLG policies. A mathematical video engine is a planned extension for frame scheduling and temporal generation.",
  },
  packing: {
    src: "/images/gen-b/engineering-notes/hdr-sdr-signal-engineering/02-bgr10a2-packing.svg",
    alt: "Bit diagram of a 32-bit bgr10a2Unorm word: alpha in bits 30-31, red in bits 20-29, green in bits 10-19, and blue in bits 0-9, with opaque alpha equal to 3.",
    width: 1600,
    height: 900,
    caption:
      "Every mathematical SDR and HDR pixel is one 32-bit word. Ten-bit red, green, and blue codes occupy the Metal bgr10a2Unorm fields, and alpha is the opaque value 3.",
  },
  pq: {
    src: "/images/gen-b/engineering-notes/hdr-sdr-signal-engineering/03-pq-eotf.svg",
    alt: "PQ inverse electro-optical transfer function and electro-optical transfer function with the exact ST 2084 constants, plus the BT.2100 narrow-range rounding rule.",
    width: 1600,
    height: 900,
    caption:
      "The PQ equations relate normalized signal and absolute luminance. GEN-B evaluates the inverse electro-optical transfer function only in the Color Volume generator.",
  },
  hlg: {
    src: "/images/gen-b/engineering-notes/hdr-sdr-signal-engineering/04-hlg-transfer.svg",
    alt: "Hybrid Log-Gamma opto-electronic transfer function: square root of 3E below one twelfth, and the logarithmic piece above it, with constants a, b, and c.",
    width: 1600,
    height: 900,
    caption:
      "Hybrid Log-Gamma is a relative scene-light system. GEN-B HLG Narrow stores the prescribed Table 2 codes and does not evaluate this transfer function again.",
  },
  geometry: {
    src: "/images/gen-b/engineering-notes/hdr-sdr-signal-engineering/05-bt2111-geometry.svg",
    alt: "Scaled diagram of the BT.2111 1920 by 1080 color-bar raster with band heights 90, 540, 90, 90, and 270, bar widths 206, 206, 206, 204, 206, 206, and 206, and ramp widths for PQ Full and narrow range.",
    width: 1600,
    height: 900,
    caption:
      "Table 1 geometry at 0.36 scale. Swatches identify regions. The stored 10-bit codes come from each variant's own table, not from these fills.",
  },
  grayscale: {
    src: "/images/gen-b/engineering-notes/hdr-sdr-signal-engineering/06-eleven-step-grayscale.svg",
    alt: "Table of the eleven PQ Narrow grayscale codes 64 through 940 and their nominal luminances from 0 to 10000 candelas per square meter, with a logarithmic plot of steps 1 through 10. The 40 percent step shows 876 times 0.4 equals 350.4, then 414.4 rounds to 414. The 70 percent step shows 876 times 0.7 equals 613.2, then 677.2 rounds to 677.",
    width: 1600,
    height: 900,
    caption:
      "GEN-B stores the digital codes. The candela-per-square-meter column is the nominal PQ interpretation of those codes, not a value written into the raster and not a measured display luminance.",
  },
  windows: {
    src: "/images/gen-b/engineering-notes/hdr-sdr-signal-engineering/07-multi-window-peak-white.svg",
    alt: "Layout of six peak-white windows on a 1920 by 1080 raster, sized 64 by 64, 128 by 128, 256 by 256, 384 by 384, 512 by 512, and 624 by 524, using code 723 on code 64.",
    width: 1600,
    height: 900,
    caption:
      "The six windows are the stored artwork rectangles. Each is neutral code 723. Their areas sum to 822,592 pixels.",
  },
  inventory: {
    src: "/images/gen-b/engineering-notes/hdr-sdr-signal-engineering/08-hdr-pattern-inventory.svg",
    alt: "Inventory separating three BT.2111 color-bar patterns, PQ Full, PQ Narrow, and HLG Narrow, from nine GEN-B PQ Narrow diagnostic patterns.",
    width: 1600,
    height: 900,
    caption:
      "Three patterns are the BT.2111-3 color-bar figures. The other nine are GEN-B diagnostics on the HDR PQ path.",
  },
  rp219: {
    src: "/images/gen-b/engineering-notes/hdr-sdr-signal-engineering/12-smpte-rp219-hd-color-bars.svg",
    alt: "SMPTE RP 219-1:2014 HD color bars and PLUGE at 1920 by 1080. Pattern 1 is 630 lines of 40 percent gray, 75 percent white, and 75 percent color bars. Pattern 2 is 100 percent cyan, 75 percent white, and 100 percent blue. Pattern 3 is 100 percent yellow, black, a narrow ramp from code 64 to 940, 100 percent white, and 100 percent red. Pattern 4 is 15 percent gray, black, 100 percent white, and PLUGE at minus 2 percent, plus 2 percent, and plus 4 percent.",
    width: 2140,
    height: 1488,
    caption:
      "SMPTE RP 219 — HD Color Bars + PLUGE, generated from the same 1920 × 1080 definition as SDRTenBitRP219Pattern. Band heights follow Table C.5. Bar widths follow Tables C.1(b) and C.2(b). Fills are the 8-bit preview of the stored narrow-range 10-bit codes.",
  },
};

const references = [
  {
    href: "https://www.itu.int/rec/R-REC-BT.709",
    label:
      "Recommendation ITU-R BT.709, Parameter values for the HDTV standards for production and international programme exchange.",
  },
  {
    href: "https://www.itu.int/rec/R-REC-BT.1886",
    label:
      "Recommendation ITU-R BT.1886, Reference electro-optical transfer function for flat panel displays used in HDTV studio production.",
  },
  {
    href: "https://www.itu.int/rec/R-REC-BT.2020",
    label:
      "Recommendation ITU-R BT.2020, Parameter values for ultra-high definition television systems for production and international programme exchange.",
  },
  {
    href: "https://www.itu.int/rec/R-REC-BT.2100",
    label:
      "Recommendation ITU-R BT.2100-3 (2025), Image parameter values for high dynamic range television for use in production and international programme exchange.",
  },
  {
    href: "https://www.itu.int/rec/R-REC-BT.2111",
    label:
      "Recommendation ITU-R BT.2111-3 (05/2025), Specification of colour bar test pattern for high dynamic range television systems. Approved 25 May 2025.",
  },
  {
    href: "https://www.itu.int/pub/R-REP-BT.2408",
    label:
      "Report ITU-R BT.2408-9 (03/2026), Guidelines for operational practices in high dynamic range television production.",
  },
  {
    href: "https://doi.org/10.5594/SMPTE.ST2084.2014",
    label:
      "SMPTE ST 2084:2014, High Dynamic Range Electro-Optical Transfer Function of Mastering Reference Displays.",
  },
  {
    href: "https://doi.org/10.5594/SMPTE.RP219-1.2014",
    label:
      "SMPTE RP 219-1:2014, High-Definition, Standard-Definition Compatible Color Bar Signal.",
  },
  {
    href: "https://www.itu.int/rec/R-REC-BT.601",
    label:
      "Recommendation ITU-R BT.601, Studio encoding parameters of digital television for standard 4:3 and wide-screen 16:9 aspect ratios.",
  },
  {
    href: "https://developer.apple.com/documentation/metal/using-color-spaces-to-display-hdr-content",
    label: "Apple Developer Documentation, Using color spaces to display HDR content.",
  },
  {
    href: "https://developer.apple.com/documentation/metal/mtlpixelformat",
    label: "Apple Developer Documentation, MTLPixelFormat.",
  },
  {
    href: "https://developer.apple.com/documentation/quartzcore/cametallayer",
    label: "Apple Developer Documentation, CAMetalLayer.",
  },
  {
    href: "https://developer.apple.com/documentation/coregraphics/cgcolorspace/itur_709",
    label: "Apple Developer Documentation, CGColorSpace.itur_709.",
  },
  {
    href: "https://developer.apple.com/documentation/coregraphics/cgcolorspace/itur_2100_pq",
    label: "Apple Developer Documentation, CGColorSpace.itur_2100_PQ.",
  },
  {
    href: "https://developer.apple.com/documentation/coregraphics/cgcolorspace/itur_2100_hlg",
    label: "Apple Developer Documentation, CGColorSpace.itur_2100_HLG.",
  },
];

function Figure({ figure, priority = false }) {
  return (
    <ArticleFigure
      figure={figure}
      priority={priority}
      classNames={figureClasses}
    />
  );
}

export default function HdrSdrSignalEngineeringPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className="genb-kicker">GEN-B Engineering Journal</p>
            <h1>
              Beyond the Smartphone: Inside GEN-B&apos;s Professional HDR and
              SDR Signal Generation Architecture
            </h1>
            <p className={styles.subtitle}>
              Mathematical 10-bit BT.709 and BT.2100 reference patterns,
              presented through Metal with separate SDR and HDR policies.
            </p>
            <p className={styles.meta}>
              <span>Precision Broadcast Engineering</span>
              <span aria-hidden="true"> · </span>
              <time dateTime="2026-10-11">October 2026</time>
            </p>
            <div className={styles.actions}>
              <Link href="/gen-b" className="btn-secondary">
                Back to GEN-B
              </Link>
              <a
                href={GEN_B_APP_STORE_URL}
                className="genb-store-link"
                aria-label="Download GEN-B on the App Store"
              >
                <Image
                  src="/gen-b/genb-app-store-badge.png"
                  alt="Download on the App Store"
                  width={194}
                  height={75}
                  className="genb-store-badge"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>1. A reference generator is defined by its signals</h2>
          <PatternIntro />
          <p>
            For decades, professional video reference signals have been
            associated with dedicated broadcast test equipment: rack-mounted
            signal generators, waveform monitors, calibration instruments, and
            specialized hardware designed to produce precisely defined digital
            and analog video signals.
          </p>
          <p>Modern computing architectures have changed what is technically possible.</p>
          <p>
            A contemporary iPhone integrates a central processing unit (CPU), a
            programmable graphics processing unit (GPU), high-performance
            memory, display-processing facilities, and external audiovisual
            connectivity, including USB-C (Universal Serial Bus Type-C) with
            DisplayPort output, the digital video interface carried on that
            connector.
          </p>
          <p>
            GEN-B, developed by Precision Broadcast Engineering (PBE), uses
            those facilities for television engineering. Its purpose is not to
            display pictures, simulate broadcast test cards as ordinary images,
            or apply visual effects. GEN-B selects a reference pattern and
            presents it through an explicit rendering path.
          </p>
          <p>
            The reference-signal architecture is native mathematical generation,
            presented through Metal.
          </p>
          <ul>
            <li>
              Mathematical Standard Dynamic Range (SDR).{" "}
              <code>SDRTenBitPatternEngine</code> generates explicit 10-bit
              R&prime;G&prime;B&prime; component values in a 1920 &times; 1080
              raster. Presentation uses ITU-R BT.709 with Extended Dynamic
              Range (EDR) disabled. ITU-R is the International Telecommunication
              Union Radiocommunication Sector.
            </li>
            <li>
              Mathematical High Dynamic Range (HDR). Twelve patterns use
              ITU-R BT.2100 Perceptual Quantization (PQ) or Hybrid Log-Gamma
              (HLG). PQ and HLG are separate presentation policies. The set
              includes the color-bar figures of ITU-R BT.2111-3.
            </li>
            <li>
              Mathematical video is a planned architectural extension. It will
              reuse these reference-pattern definitions and add frame
              scheduling and temporal signal generation. It is not implemented.
            </li>
          </ul>
          <p>
            Each mathematical pattern stores explicit 10-bit red, green, and
            blue component values. <code>SDRTenBitPatternEngine</code> generates
            the established SDR definitions: GreyScale, Luma, SMPTE RP 219,
            color fields, European Broadcasting Union (EBU) bars, and
            mathematical ramps. The twelve HDR patterns use BT.2100 PQ or HLG.
          </p>
          <p>
            This article describes that architecture: the raster, the pixel
            format, the color-space tag, and the codes GEN-B stores. Report
            ITU-R BT.2408-9 discusses operational display of PQ signals,
            including displays whose peak luminance is below the encoded
            reference. GEN-B does not implement that report as a processing
            stage, and it does not change reference codes to suit a particular
            television.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. BT.709, BT.1886, BT.2100, and BT.2111</h2>
          <h3>ITU-R BT.709, the SDR foundation</h3>
          <p>
            ITU-R BT.709 specifies fundamental image parameters for
            high-definition television (HDTV), including color primaries, the
            reference white point, and signal characteristics. It is the
            foundation for conventional high-definition SDR workflows.
          </p>
          <p>
            BT.709 is often confused with related but separate ideas: the
            encoding transfer that relates linear light to a nonlinear signal;
            the display electro-optical transfer function (EOTF), which relates
            a video signal to displayed light; the Y&prime;CbCr component
            form, in which Y&prime; is luma and Cb and Cr are the
            blue-difference and red-difference chroma signals, used on many
            interfaces; and the legal or nominal digital ranges
            used in transmission. Those ideas are related. They are not
            interchangeable.
          </p>
          <p>
            ITU-R BT.1886 is also relevant to SDR reference viewing because it
            describes a reference EOTF for flat-panel displays in HDTV studio
            production. GEN-B does not implement BT.1886 in its shader. SDR
            presentation tags the Metal layer as ITU-R BT.709 and disables
            EDR. The SDR drawable is <code>bgr10a2Unorm</code>. The fragment
            shader returns the sampled red, green, and blue values and writes
            alpha 1. It does not apply a transfer. BGRA, used by ProRes
            playback, names the memory order blue, green, red, and alpha.
            Alpha is opacity.
          </p>
          <h3>ITU-R BT.2100, the HDR framework</h3>
          <p>
            ITU-R BT.2100 establishes image parameters for HDR television
            production and international programme exchange. It includes two
            transfer systems.
          </p>
          <p>
            Perceptual Quantization is an absolute, luminance-oriented
            system. Its electro-optical transfer function is also specified by
            Society of Motion Picture and Television Engineers (SMPTE) ST 2084.
          </p>
          <p>
            Hybrid Log-Gamma is a relative HDR system intended for
            production and distribution, including operational compatibility
            considerations.
          </p>
          <p>
            BT.2100 uses the wide-gamut primaries of ITU-R BT.2020. HDR is not
            SDR with a higher peak brightness. The relationship among digital
            codes, displayed luminance, color encoding, and the viewing system
            is different. In GEN-B, BT.2020 primaries are carried by the
            BT.2100 PQ or HLG layer color space. The shader does not apply a
            separate primary-conversion matrix.
          </p>
          <h3>ITU-R BT.2111-3, HDR reference color bars</h3>
          <p>
            ITU-R BT.2111 defines reference color-bar test patterns for HDR
            television systems compatible with BT.2100. The edition implemented
            here is BT.2111-3, approved on 25 May 2025. Its official title is
            &quot;Specification of colour bar test pattern for high dynamic
            range television systems.&quot;
          </p>
          <p>The recommendation specifies three variants:</p>
          <ol>
            <li>HLG Narrow Range.</li>
            <li>PQ Narrow Range.</li>
            <li>PQ Full Range.</li>
          </ol>
          <p>
            These are distinct signal specifications. The recommendation
            describes construction for 2K, 4K, and 8K formats. GEN-B implements
            the 2K raster, 1920 &times; 1080. It does not generate 4K or 8K
            BT.2111 rasters. HLG Full is not a BT.2111-3 pattern and is not
            implemented.
          </p>
          <p>
            BT.2111-3 itself says the color-bar pattern is not the signal to
            use for black-level adjustment. That adjustment uses a PLUGE
            signal. PLUGE means Picture Line-Up Generation Equipment. GEN-B&apos;s
            near-black diagnostic, described later, is a separate pattern. The
            BT.2111 figure does not replace PLUGE.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Mathematical signal architecture</h2>
          <p>
            Metal is Apple&apos;s graphics and compute framework. A shader is the
            program the GPU runs while rendering. The external reference surface
            is one paused Metal view. It draws when the pattern or the drawable
            size changes. <code>ExternalStillPresentation</code> has three
            cases: SDR BT.709, HDR PQ, and HDR HLG. Mathematical SDR and HDR
            share the 10-bit drawable. Color space and EDR select the rendering
            policy.
          </p>
          <div className={styles.tableWrap}>
            <table>
              <caption>
                Mathematical reference presentation. SDR uses BT.709. PQ and HLG
                use separate BT.2100 policies.
              </caption>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Mathematical SDR</th>
                  <th>HDR PQ</th>
                  <th>HDR HLG</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Reference raster</td>
                  <td>1920 &times; 1080</td>
                  <td>1920 &times; 1080</td>
                  <td>1920 &times; 1080</td>
                </tr>
                <tr>
                  <td>Drawable</td>
                  <td>
                    <code>bgr10a2Unorm</code>
                  </td>
                  <td>
                    <code>bgr10a2Unorm</code>
                  </td>
                  <td>
                    <code>bgr10a2Unorm</code>
                  </td>
                </tr>
                <tr>
                  <td>Components</td>
                  <td>10-bit R&prime;G&prime;B&prime;</td>
                  <td>10-bit R&prime;G&prime;B&prime;</td>
                  <td>10-bit R&prime;G&prime;B&prime;</td>
                </tr>
                <tr>
                  <td>Color space</td>
                  <td>ITU-R BT.709</td>
                  <td>ITU-R BT.2100 PQ</td>
                  <td>ITU-R BT.2100 HLG</td>
                </tr>
                <tr>
                  <td>EDR</td>
                  <td>Disabled</td>
                  <td>Enabled</td>
                  <td>Enabled</td>
                </tr>
                <tr>
                  <td>Sampling</td>
                  <td>Nearest</td>
                  <td>Nearest</td>
                  <td>Nearest</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Unorm means unsigned normalized. The GPU sees integer codes as
            values in a normalized numeric interval. Sampling a 10-bit UNORM
            texture returns code/1023. Writing that value back to a matching
            attachment stores the code again when the sampler does not blend
            neighbors.
          </p>
          <p>
            <code>bgra8Unorm_srgb</code> is intentionally unused. That format
            would apply the sRGB transfer on write or sample, which is not the
            BT.709 transfer and would stop the drawable from holding the
            authored codes.
          </p>
          <p>
            Figure 01 is this architecture. Mathematical SDR uses BT.709 with
            EDR off. Mathematical HDR uses BT.2100 PQ or BT.2100 HLG, with EDR
            on. Bundled ProRes playback is a separate decode: its texture and
            drawable are <code>bgra8Unorm</code>, tagged BT.709, with EDR off.
            Sampling that 8-bit texture returns code/255. That playback is not
            the mathematical video engine in Figure 01. The engine is planned.
            It will reuse these reference-pattern definitions and add frame
            scheduling and temporal signal generation.
          </p>
          <Figure figure={figures.architecture} priority />
          <pre className={styles.code}>
            <code>{`var drawablePixelFormat: MTLPixelFormat {
    switch self {
    case .sdrBT709:
        return MetalOutputConfiguration.drawablePixelFormat
    case .hdrPQ, .hdrHLG:
        return .bgr10a2Unorm
    }
}`}</code>
          </pre>
          <p className={styles.codeCaption}>
            ExternalStillPresentation.swift. MetalOutputConfiguration.drawablePixelFormat
            is bgr10a2Unorm, the format PQ and HLG return directly. ProRes
            playback uses bgra8Unorm in MetalVideoPolicy.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Native 10-bit SDR</h2>
          <p>
            <code>SDRTenBitPatternEngine</code> is the generator for SDR
            patterns whose 10-bit R&prime;G&prime;B&prime; definition is
            established. Colorimetry is ITU-R BT.709. The engine does not apply
            a transfer, a Y&prime;CbCr matrix, PQ, or HLG. Integer coding uses
            the 10-bit forms of the studio equations also used by ITU-R BT.601
            and ITU-R BT.2020:
          </p>
          <p className={styles.formula}>
            Full D = Round(1023 &times; E&prime;)
          </p>
          <p className={styles.formula}>
            Narrow D = Round(876 &times; E&prime; + 64)
          </p>
          <p>
            E&prime; is the encoded nonlinear component, not emitted light.
            Full-range black is 0 and full-range white is 1023. Narrow-range
            black is 64 and narrow-range reference white is 940. Positive
            rounding is half away from zero, implemented as integer division
            (numerator + denominator / 2) / denominator.
          </p>
          <p>
            Each component is a 10-bit value held in a <code>UInt16</code>, then
            packed with the same <code>bgr10a2Unorm</code> word used by the HDR
            rasters. Alpha is the opaque value 3. The external pixel source is
            recorded as procedural and mathematical.{" "}
            <code>MetalOutputRenderer</code> uploads that word buffer into a
            texture cached per pattern. A later selection of the same pattern
            reuses the texture.
          </p>
          <p>
            The layer color space is <code>kCGColorSpaceITUR_709</code>. EDR is
            off. Because these codes are the reference, the draw forces
            nearest-neighbor sampling even when the fitted scale would
            otherwise be linear. Nearest-neighbor selects one source sample.
            Linear sampling would blend neighboring codes.
          </p>
          <p>
            <code>SDRTenBitPatternEngine</code> is the reusable foundation for
            these procedural signals. Established definitions include GreyScale,
            Luma, SMPTE RP 219, defined color fields, EBU bars, and mathematical
            ramps. Further reference signals use the same quantization, packing,
            color space, and sampling when their 10-bit definition is
            established.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. SMPTE RP 219 and PLUGE</h2>
          <p>
            The SDR broadcast reference is{" "}
            <code>SDRTenBitRP219Pattern</code>, titled SMPTE RP 219 — HD Color
            Bars + PLUGE. The edition implemented is RP 219-1:2014,
            High-Definition, Standard-Definition Compatible Color Bar Signal.
          </p>
          <p>
            The raster is 1920 &times; 1080, narrow-range BT.709. GEN-B uses
            the Section 4.1 defaults: sub-pattern *1 is 40% gray, *2 is 75%
            white, and *3 is 0% black. Sub-patterns *5 and *6 stay at 0% black
            and 100% white. The optional sub-black valley and super-white peak
            are not generated. Heights follow Table C.5 for the 1920 &times;
            1080 system: pattern 1 is 630 lines, patterns 2 and 3 are 90 lines
            each, and pattern 4 is 270 lines.
          </p>
          <div className={styles.tableWrap}>
            <table>
              <caption>
                RP 219-1:2014 segmentation at 1920 &times; 1080. Rows are
                numbered from the top.
              </caption>
              <thead>
                <tr>
                  <th>Band</th>
                  <th>Rows</th>
                  <th>Contents</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pattern 1</td>
                  <td>0&ndash;629</td>
                  <td>40% gray, 75% white, 75% color bars, 40% gray</td>
                </tr>
                <tr>
                  <td>Pattern 2</td>
                  <td>630&ndash;719</td>
                  <td>100% cyan, 75% white, 100% blue</td>
                </tr>
                <tr>
                  <td>Pattern 3</td>
                  <td>720&ndash;809</td>
                  <td>100% yellow, black, narrow ramp, 100% white, 100% red</td>
                </tr>
                <tr>
                  <td>Pattern 4</td>
                  <td>810&ndash;1079</td>
                  <td>15% gray sides, black, 100% white, and PLUGE</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Pattern 1 widths are the even integers of Table C.1(b): 240, 206,
            206, 206, 204, 206, 206, 206, and 240 pixels. The outer 240-pixel
            columns are 40% gray. The seven 75% bars occupy the centered
            1440-pixel 4:3 area. Pattern 4 uses Table C.2(b) inside that same
            1440-pixel center, with 240-pixel 15% gray side panels. The PLUGE
            excursions are &minus;2%, +2%, and +4% on 0% black.
          </p>
          <Figure figure={figures.rp219} />
          <p>
            Annex B of RP 219-1 publishes Y&prime;C<sub>B</sub>C<sub>R</sub>{" "}
            codes. It does not publish R&prime;G&prime;B&prime;. GEN-B stores
            the component codes produced by the narrow-range equation. Neutral
            bars and the 75% and 100% primaries and secondaries use that
            equation directly. Those stored triples forward-map, with BT.709
            coefficients K<sub>R</sub> = 0.2126 and K<sub>B</sub> = 0.0722, to
            the Annex B 10-bit Y&prime;C<sub>B</sub>C<sub>R</sub> values. The
            shader does not apply the matrix. The Y&prime;C<sub>B</sub>C
            <sub>R</sub> column below is the interpretation of the stored
            components, not a second raster.
          </p>
          <div className={styles.tableWrap}>
            <table>
              <caption>
                Narrow-range 10-bit R&prime;G&prime;B&prime; stored by GEN-B,
                and the Annex B Y&prime;C<sub>B</sub>C<sub>R</sub> values those
                triples forward-map to.
              </caption>
              <thead>
                <tr>
                  <th>Reference</th>
                  <th>R&prime;</th>
                  <th>G&prime;</th>
                  <th>B&prime;</th>
                  <th>Y&prime;</th>
                  <th>C<sub>B</sub></th>
                  <th>C<sub>R</sub></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0% black</td>
                  <td>64</td>
                  <td>64</td>
                  <td>64</td>
                  <td>64</td>
                  <td>512</td>
                  <td>512</td>
                </tr>
                <tr>
                  <td>100% white</td>
                  <td>940</td>
                  <td>940</td>
                  <td>940</td>
                  <td>940</td>
                  <td>512</td>
                  <td>512</td>
                </tr>
                <tr>
                  <td>75% white</td>
                  <td>721</td>
                  <td>721</td>
                  <td>721</td>
                  <td>721</td>
                  <td>512</td>
                  <td>512</td>
                </tr>
                <tr>
                  <td>75% yellow</td>
                  <td>721</td>
                  <td>721</td>
                  <td>64</td>
                  <td>674</td>
                  <td>176</td>
                  <td>543</td>
                </tr>
                <tr>
                  <td>75% cyan</td>
                  <td>64</td>
                  <td>721</td>
                  <td>721</td>
                  <td>581</td>
                  <td>589</td>
                  <td>176</td>
                </tr>
                <tr>
                  <td>75% green</td>
                  <td>64</td>
                  <td>721</td>
                  <td>64</td>
                  <td>534</td>
                  <td>253</td>
                  <td>207</td>
                </tr>
                <tr>
                  <td>75% magenta</td>
                  <td>721</td>
                  <td>64</td>
                  <td>721</td>
                  <td>251</td>
                  <td>771</td>
                  <td>817</td>
                </tr>
                <tr>
                  <td>75% red</td>
                  <td>721</td>
                  <td>64</td>
                  <td>64</td>
                  <td>204</td>
                  <td>435</td>
                  <td>848</td>
                </tr>
                <tr>
                  <td>75% blue</td>
                  <td>64</td>
                  <td>64</td>
                  <td>721</td>
                  <td>111</td>
                  <td>848</td>
                  <td>481</td>
                </tr>
                <tr>
                  <td>40% gray</td>
                  <td>414</td>
                  <td>414</td>
                  <td>414</td>
                  <td>414</td>
                  <td>512</td>
                  <td>512</td>
                </tr>
                <tr>
                  <td>15% gray</td>
                  <td>195</td>
                  <td>195</td>
                  <td>195</td>
                  <td>195</td>
                  <td>512</td>
                  <td>512</td>
                </tr>
                <tr>
                  <td>PLUGE &minus;2%</td>
                  <td>46</td>
                  <td>46</td>
                  <td>46</td>
                  <td>46</td>
                  <td>512</td>
                  <td>512</td>
                </tr>
                <tr>
                  <td>PLUGE +2%</td>
                  <td>82</td>
                  <td>82</td>
                  <td>82</td>
                  <td>82</td>
                  <td>512</td>
                  <td>512</td>
                </tr>
                <tr>
                  <td>PLUGE +4%</td>
                  <td>99</td>
                  <td>99</td>
                  <td>99</td>
                  <td>99</td>
                  <td>512</td>
                  <td>512</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            An active 75% channel is 721. An inactive channel is 64, the same
            integer as 0% black. One hundred percent cyan is (64, 940, 940),
            100% yellow is (940, 940, 64), 100% red is (940, 64, 64), and 100%
            blue is (64, 64, 940). Pattern 3 places 100% yellow in the left 240
            pixels, 0% black until x = 446, a narrow ramp from code 64 at x =
            446 to code 940 at x = 1473, 100% white until x = 1680, and 100%
            red in the right 240 pixels.
          </p>
          <p>
            Pattern 4, from the left, is 240 pixels of 15% gray, then black,
            100% white, black, PLUGE &minus;2%, black, PLUGE +2%, black, PLUGE
            +4%, black, and 240 pixels of 15% gray. The &minus;2% code 46 is
            below nominal black. It is a black-level reference inside this
            SMPTE figure. It is not the HDR near-black diagnostic, and it is
            not the optional Annex B sub-black valley at Y&prime; code 4.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. GreyScale and Luma</h2>
          <p>
            GreyScale and Luma are mathematically complete. GreyScale is 5 of
            5: GreyScale Composite Ramp, Grey Bars, Step Ramp, Grey Ramp, and
            GreyScale Logarithmic. Luma is 12 of 12: Luma Black Legal Range,
            Clipping Target, Full Black, Legal White, Luma Grad Step, Luma Gray
            Scale Steps, Luma Grey Black, Luma Grey Legal Range 235, Mid Grey,
            Luma RGB Primary Ramp, Luma White 191 75, and Luma White 255. Each
            raster is procedural full-range or narrow-range BT.709, as its
            definition requires. The examples below are representative. They
            are not a dump of every internal field.
          </p>
          <h3>Eleven-step grayscale</h3>
          <p>
            Luma Gray Scale Steps and Grey Bars share one full-range
            definition: eleven vertical bars, E&prime; = index / 10, from code
            0 through code 1023. Bar index covers floor(index &times; 1920 /
            11) up to the next edge. The edges are 0, 174, 349, 523, 698, 872,
            1047, 1221, 1396, 1570, 1745, and 1920. Those edges match the HDR
            eleven-step geometry in Section 11. The codes do not. These SDR
            bars are full-range, from code 0 through code 1023. The HDR pattern
            stores the BT.2111 PQ Narrow Table 3 codes.
          </p>
          <div className={styles.tableWrap}>
            <table>
              <caption>
                Full-range 10-bit neutral codes for the SDR eleven-step bars.
                D = Round(1023 &times; index / 10).
              </caption>
              <thead>
                <tr>
                  <th>Step</th>
                  <th>E&prime;</th>
                  <th>R&prime; = G&prime; = B&prime;</th>
                  <th>Starts at x</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                <tr><td>1</td><td>0.1</td><td>102</td><td>174</td></tr>
                <tr><td>2</td><td>0.2</td><td>205</td><td>349</td></tr>
                <tr><td>3</td><td>0.3</td><td>307</td><td>523</td></tr>
                <tr><td>4</td><td>0.4</td><td>409</td><td>698</td></tr>
                <tr><td>5</td><td>0.5</td><td>512</td><td>872</td></tr>
                <tr><td>6</td><td>0.6</td><td>614</td><td>1047</td></tr>
                <tr><td>7</td><td>0.7</td><td>716</td><td>1221</td></tr>
                <tr><td>8</td><td>0.8</td><td>818</td><td>1396</td></tr>
                <tr><td>9</td><td>0.9</td><td>921</td><td>1570</td></tr>
                <tr><td>10</td><td>1</td><td>1023</td><td>1745</td></tr>
              </tbody>
            </table>
          </div>
          <h3>Mid Grey</h3>
          <p>
            Mid Grey is a uniform full-range field at the encoded-signal
            midpoint, E&prime; = 0.5. Then R&prime; = G&prime; = B&prime; =
            Round(1023 &times; 0.5) = 512. That is the midpoint of the 10-bit
            code range. It is not a statement that a display emits 50% of its
            peak luminance.
          </p>
          <h3>Clipping Target</h3>
          <p>
            Clipping Target is a GEN-B diagnostic, not an SMPTE, EBU, or ITU
            pattern. It draws two bullseyes on a 1920 &times; 1080 full-range
            field. Centers are (512, 540) and (1408, 540). Radii are 128, 256,
            and 384. A pixel is inside radius r when dx&sup2; + dy&sup2; &le;
            r&sup2; + r. The concentric levels use V = 0, 12, 25, 127, 229,
            242, and 255. Each stored code is Round(1023 &times; V / 255).
          </p>
          <div className={styles.tableWrap}>
            <table>
              <caption>
                Clipping Target codes. The left bullseye descends toward black.
                The right bullseye ascends toward white. The field is code 509.
              </caption>
              <thead>
                <tr>
                  <th>Region</th>
                  <th>Source level V</th>
                  <th>Stored 10-bit code</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Left outer</td><td>0</td><td>0</td></tr>
                <tr><td>Left middle</td><td>12</td><td>48</td></tr>
                <tr><td>Left inner</td><td>25</td><td>100</td></tr>
                <tr><td>Background</td><td>127</td><td>509</td></tr>
                <tr><td>Right inner</td><td>229</td><td>919</td></tr>
                <tr><td>Right middle</td><td>242</td><td>971</td></tr>
                <tr><td>Right outer</td><td>255</td><td>1023</td></tr>
              </tbody>
            </table>
          </div>
          <h3>Mathematical ramps</h3>
          <p>
            A linear encoded-signal ramp changes the code in proportion to
            horizontal position. The full-range GreyScale ramp uses
          </p>
          <p className={styles.formula}>
            D(x) = Round(1023 &times; x / 1919)
          </p>
          <p>
            so x = 0 is code 0 and x = 1919 is code 1023. The narrow SDR gray
            ramp uses the same construction from 64 to 940. Equal code steps
            across the raster are not equal steps of displayed light.
          </p>
          <p>
            GreyScale linear steps are 32 equal bars, E&prime; = index / 31,
            full range, each 60 pixels wide. The logarithmic chart is a
            different progression. Five rows hold 8, 16, 32, 64, and 128 equal
            bars. Each row is 200 lines, separated by a 20-line black rule. For
            a bar after the first,
          </p>
          <p className={styles.formula}>
            E&prime; = 255<sup>index / (count &minus; 1)</sup> / 255
          </p>
          <p>
            The first bar is E&prime; = 1/255, which quantizes to code 4. The
            last bar of each row is code 1023. Early bars therefore stay near
            black, and later bars climb toward white. That is a power of the
            encoded magnitude. It is not a statement that the row is linear in
            candelas.
          </p>
          <p>
            The composite ramp stacks four 270-line bands: 16 steps up, a
            linear ramp up, a linear ramp down, and 16 steps down. Step
            E&prime; = index / 15. Luma Grad Step uses the same band height
            with an ascending ramp, eleven steps up, eleven steps down, and a
            descending ramp. The primary-color ramp fills the top 720 rows with
            full-range red, green, and blue in 640-pixel thirds, the next 180
            rows with black and white halves, and the bottom 180 rows with the
            neutral ramp from 0 to 1023.
          </p>
          <p>
            Several Luma names record an earlier level number. Luma White 191 75
            is full-range 75%, code 767. Luma Grey Legal Range 235 is
            narrow-range white, code 940. Full Legal White is a split field:
            full-range white 1023 on the left and narrow-range white 940 on
            the right. Luma Grey Black is narrow black 64 beside full black 0.
            The external integers are the 10-bit definitions.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Building a 10-bit HDR raster</h2>
          <p>
            Each HDR red, green, and blue component is a 10-bit unsigned
            integer from 0 through 1023, which is 1,024 levels. Swift stores
            each component in a <code>UInt16</code>. That 16-bit container
            holds a 10-bit value without changing its precision. The components
            are then packed into 32-bit words for Metal&apos;s{" "}
            <code>bgr10a2Unorm</code> format.
          </p>
          <div className={styles.tableWrap}>
            <table>
              <caption>Bit fields of one packed pixel. Bit 0 is the least significant bit.</caption>
              <thead>
                <tr>
                  <th>Bits</th>
                  <th>Field</th>
                  <th>Width</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0&ndash;9</td>
                  <td>Blue</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>10&ndash;19</td>
                  <td>Green</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>20&ndash;29</td>
                  <td>Red</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>30&ndash;31</td>
                  <td>Alpha</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={styles.formula}>
            P = B + (G &lt;&lt; 10) + (R &lt;&lt; 20) + (3 &lt;&lt; 30)
          </p>
          <p>
            The symbol &lt;&lt; is a left bit shift. Alpha 3 is the maximum
            2-bit value, used for an opaque reference pixel. Each component is
            masked to 10 bits before it is shifted.
          </p>
          <p>
            The raster contains 1920 &times; 1080 = 2,073,600 pixels. At four
            bytes per pixel the buffer is 8,294,400 bytes, about 7.91 mebibytes
            (MiB). One MiB is 1,048,576 bytes. Row 0 is the top of the picture.
          </p>
          <p>
            The GPU samples that texture and presents it through a matching
            10-bit drawable. The fragment shader does not apply PQ, HLG, a
            matrix, or a range map. BT.2111 color-bar values are already
            encoded reference codes. Running the transfer function again would
            change the signal.
          </p>
          <p>
            The texture and the drawable both use{" "}
            <code>bgr10a2Unorm</code>. HDR selects the BT.2100 PQ or HLG color
            space and enables EDR. SDR selects BT.709 and leaves EDR disabled.
            Mastering-display metadata is not attached to this layer
            configuration.
          </p>
          <Figure figure={figures.packing} />
          <pre className={styles.code}>
            <code>{`static func word(red: UInt16, green: UInt16, blue: UInt16, alpha: UInt16 = 3) -> UInt32 {
    let redBits = UInt32(red) & 0x3FF
    let greenBits = UInt32(green) & 0x3FF
    let blueBits = UInt32(blue) & 0x3FF
    let alphaBits = UInt32(alpha) & 0x3
    return blueBits | (greenBits << 10) | (redBits << 20) | (alphaBits << 30)
}`}</code>
          </pre>
          <p className={styles.codeCaption}>
            BGR10A2UnormPacking in BT2111PQFullPattern.swift. The same packer
            is used by mathematical SDR and HDR rasters.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. PQ, HLG, and narrow-range quantization</h2>
          <h3>A nit is a candela per square metre</h3>
          <p>
            A nit is the everyday name for one candela per square metre:
          </p>
          <p className={styles.formula}>1 nit = 1 cd/m&sup2;</p>
          <p>
            The candela is the International System of Units (SI) base unit of
            luminous intensity. Luminance is luminous intensity per unit of
            projected area in a stated direction. A lumen measures luminous
            flux, not luminance.
          </p>
          <h3>The PQ transfer functions</h3>
          <p>
            PQ relates a normalized encoded signal to absolute luminance. The
            inverse EOTF encodes luminance into a PQ signal:
          </p>
          <p className={styles.formula}>
            V = [(c<sub>1</sub> + c<sub>2</sub> &middot; Y<sup>m&#8321;</sup>) / (1 + c<sub>3</sub> &middot; Y<sup>m&#8321;</sup>)]<sup>m&#8322;</sup>
          </p>
          <p className={styles.formula}>Y = L / 10000</p>
          <p>
            L is luminance in cd/m&sup2;. V is the normalized PQ signal. The
            constants, in the form used by GEN-B&apos;s Color Volume generator
            and in the equivalent reduced fractions, are:
          </p>
          <div className={styles.tableWrap}>
            <table>
              <thead>
                <tr>
                  <th>Constant</th>
                  <th>Value in narrowCode(nits:)</th>
                  <th>Equivalent fraction</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>m1</td>
                  <td>2610 / 16384</td>
                  <td>2610 / 16384</td>
                </tr>
                <tr>
                  <td>m2</td>
                  <td>(2523 / 4096) &times; 128</td>
                  <td>2523 / 32</td>
                </tr>
                <tr>
                  <td>c1</td>
                  <td>3424 / 4096</td>
                  <td>3424 / 4096</td>
                </tr>
                <tr>
                  <td>c2</td>
                  <td>(2413 / 4096) &times; 32</td>
                  <td>2413 / 128</td>
                </tr>
                <tr>
                  <td>c3</td>
                  <td>(2392 / 4096) &times; 32</td>
                  <td>2392 / 128</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>The EOTF recovers luminance from the normalized signal:</p>
          <p className={styles.formula}>
            L = 10000 &middot; [max(V<sup>1/m&#8322;</sup> &minus; c<sub>1</sub>, 0) / (c<sub>2</sub> &minus; c<sub>3</sub> &middot; V<sup>1/m&#8322;</sup>)]<sup>1/m&#8321;</sup>
          </p>
          <p>
            The encoding can represent references up to 10,000 cd/m&sup2;. That
            does not mean a display produces 10,000 cd/m&sup2;. Tone mapping
            and panel limits are display behavior. BT.2408-9 discusses that
            operational problem. GEN-B&apos;s reference codes stay fixed.
          </p>
          <Figure figure={figures.pq} />
          <h3>Narrow-range quantization</h3>
          <p>
            For the diagnostics that compute a narrow-range code, GEN-B uses
            the BT.2100 10-bit relationship
          </p>
          <p className={styles.formula}>D = Round(64 + 876&middot;V)</p>
          <p>with the Table 9 rounding rule</p>
          <p className={styles.formula}>
            Round(x) = Sign(x) &times; Floor(|x| + 0.5)
          </p>
          <p>
            Nominal black is code 64. Nominal white is code 940. For V = 0.5,
          </p>
          <p className={styles.formula}>
            D = Round(64 + 876 &times; 0.5) = Round(502) = 502
          </p>
          <p>
            On these nonnegative values, that rule matches the half-away-from-zero
            rounding used inside <code>narrowCode(nits:)</code>. The unit tests
            for the 11-step and Color Tracking patterns treat the floor form as
            the authority.
          </p>
          <p>
            Full range is a different assignment. PQ Full uses the whole 10-bit
            scale, including codes 0 and 1023. It does not use the narrow
            interval 64 to 940. Inactive channels in PQ Full are 0. Inactive
            channels in the narrow-range patterns are 64.
          </p>
          <h3>HLG is not PQ with different numbers</h3>
          <p>
            The HLG opto-electronic transfer function (OETF) is piecewise. For
            normalized scene-linear light E:
          </p>
          <p className={styles.formula}>E&prime; = &radic;(3E) &nbsp; for 0 &le; E &le; 1/12</p>
          <p className={styles.formula}>
            E&prime; = a &middot; ln(12E &minus; b) + c &nbsp; for 1/12 &lt; E
            &le; 1
          </p>
          <p>
            with a = 0.17883277, b = 1 &minus; 4a, and c = 0.5 &minus; a
            &middot; ln(4a). Displayed light still depends on the system
            transfer and the display. GEN-B does not evaluate this OETF. HLG
            Narrow stores the Table 2 codes and tags the layer{" "}
            <code>itur_2100_HLG</code>. A shared integer such as 940 is not a
            PQ luminance when the color space is HLG.
          </p>
          <Figure figure={figures.hlg} />
          <pre className={styles.code}>
            <code>{`static func narrowCode(nits: Double) -> UInt16 {
    precondition(nits >= 0 && nits <= 10000)
    let m1 = 2610.0 / 16384.0
    let m2 = (2523.0 / 4096.0) * 128.0
    let c1 = 3424.0 / 4096.0
    let c2 = (2413.0 / 4096.0) * 32.0
    let c3 = (2392.0 / 4096.0) * 32.0
    let normalized = nits / 10000.0
    let powered = pow(normalized, m1)
    let signal = pow((c1 + c2 * powered) / (1.0 + c3 * powered), m2)
    let code = Int((64.0 + 876.0 * signal).rounded())
    precondition((64 ... 940).contains(code))
    return UInt16(code)
}`}</code>
          </pre>
          <p className={styles.codeCaption}>
            HDRColorVolumeRec2020PQNarrowPattern.narrowCode(nits:). This is the
            HDR generator that evaluates the PQ inverse EOTF. The color-bar
            generators do not.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. The three BT.2111 color-bar figures</h2>
          <p>
            GEN-B implements all three BT.2111-3 variants. A shared walker
            places geometry. Each variant passes its own code table. The walker
            does not convert one table into another.
          </p>
          <p>
            The color bars occupy horizontal pixels 240 through 1679. The
            boundary at 1680 is the start of the right side column, not a bar
            pixel. The seven widths are 206, 206, 206, 204, 206, 206, and 206.
            Green is the 204-wide bar, and its left edge is x = 858. The
            vertical bands are b/12, b/2, b/12, b/12, and b/4, which are 90,
            540, 90, 90, and 270 rows.
          </p>
          <Figure figure={figures.geometry} />
          <h3>PQ Full, Table 4 and ramp Table 6</h3>
          <p>
            A 100% white bar is R&prime; = 1023, G&prime; = 1023, B&prime; =
            1023. Full-scale red is 1023, 0, 0. The other 100% bars put 1023 on
            each active channel and 0 on each inactive channel. The 58% bars
            use 594 on active channels and 0 on inactive channels. Forty
            percent gray is 409. The grayscale steps are 0, 102, 205, 307, 409,
            512, 614, 716, 818, 921, and 1023. Near-black references are 0 for
            0%, 19 for +2%, and 41 for +4%. There is no &minus;2% box.
          </p>
          <p>
            The 58% BT.709 comparison triples are yellow 589, 593, 370; cyan
            491, 586, 592; green 479, 585, 355; magenta 552, 348, 584; red 545,
            335, 225; and blue 296, 201, 582.
          </p>
          <p>
            The ramp is 1680 pixels wide, starting at x = 240: 618 pixels at
            code 0, then one pixel per code from 1 through 1022, then 40 pixels
            at 1023. The widths 618 + 1022 + 40 equal 1680. The code on a
            rising pixel is <code>(x &minus; risingOrigin + 1) + floorCode</code>.
          </p>
          <h3>PQ Narrow, Table 3 and ramp Table 5</h3>
          <div className={styles.tableWrap}>
            <table>
              <caption>PQ Narrow reference anchors stored by GEN-B. Inactive color channels use 64, not 0.</caption>
              <thead>
                <tr>
                  <th>Reference</th>
                  <th>10-bit code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>&minus;7%</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>&minus;2% black</td>
                  <td>48</td>
                </tr>
                <tr>
                  <td>Nominal black, 0%</td>
                  <td>64</td>
                </tr>
                <tr>
                  <td>+2% black</td>
                  <td>80</td>
                </tr>
                <tr>
                  <td>+4% black</td>
                  <td>99</td>
                </tr>
                <tr>
                  <td>40% gray</td>
                  <td>414</td>
                </tr>
                <tr>
                  <td>58% active channel</td>
                  <td>573</td>
                </tr>
                <tr>
                  <td>Nominal white, 100%</td>
                  <td>940</td>
                </tr>
                <tr>
                  <td>109%</td>
                  <td>1019</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            One hundred percent bars use 940 on active channels and 64 on
            inactive channels. The source identifies code 4 as the BT.2100
            narrow minimum and code 1019 as the narrow maximum. Codes 0 and
            1023 are not used. The 58% BT.709 triples are yellow 569, 572, 381;
            cyan 485, 566, 571; green 474, 565, 368; magenta 537, 362, 564; red
            531, 351, 257; and blue 318, 236, 563.
          </p>
          <p>
            The narrow ramp is flat at code 4 for 559 pixels, then one code per
            pixel from 5 through 1018 (1014 pixels), then flat at 1019 for 107
            pixels. Those widths sum to 1680. Code 64, the 0% level, lands on
            the left edge of green.
          </p>
          <h3>HLG Narrow, Table 2 and ramp Table 5</h3>
          <p>
            HLG Narrow uses the same Table 1 geometry and a 75% comparison
            band, not 58%. An active 75% component is code 721. An inactive
            component is code 64. One hundred percent digital bars use 940 and
            64, the same integers as PQ Narrow 100% bars, stored as Table 2
            values rather than computed from PQ. The grayscale steps from
            &minus;7% through 109% use the same integers as the PQ Narrow
            steps: 4, 64, 152, 239, 327, 414, 502, 590, 677, 765, 852, 940, and
            1019. The ramp widths and endpoints match the PQ Narrow ramp. The
            layer color space is HLG.
          </p>
          <p>
            The 75% BT.709 triples are yellow 713, 719, 316; cyan 538, 709,
            718; green 512, 706, 296; magenta 651, 286, 705; red 639, 269, 164;
            and blue 227, 147, 702.
          </p>
          <p>
            The tests named for Tables 2, 3, 4, 5, and 6 lock these integers,
            the geometry, the ramp progression, and the presence of low-order
            bits that an 8-bit quantizer would remove. This article reports
            those stored values and those tests.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Twelve mathematical HDR patterns</h2>
          <p>
            Three of the twelve HDR patterns are the BT.2111 color-bar figures.
            The other nine are GEN-B diagnostics. They use BT.2100 PQ narrow
            coding and, where noted, individual BT.2111 code anchors. Their
            geometry is not the BT.2111 color-bar figure. All twelve external
            rasters are procedural.
          </p>
          <Figure figure={figures.inventory} />
          <div className={styles.tableWrap}>
            <table>
              <thead>
                <tr>
                  <th>Pattern</th>
                  <th>Class</th>
                  <th>What the generator writes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BT.2111 PQ Full</td>
                  <td>Standard color bars</td>
                  <td>Table 4 codes, Table 6 ramp, HDR PQ</td>
                </tr>
                <tr>
                  <td>BT.2111 PQ Narrow</td>
                  <td>Standard color bars</td>
                  <td>Table 3 codes, Table 5 ramp, HDR PQ</td>
                </tr>
                <tr>
                  <td>BT.2111 HLG Narrow</td>
                  <td>Standard color bars</td>
                  <td>Table 2 codes, 75% comparison, HDR HLG</td>
                </tr>
                <tr>
                  <td>11-step grayscale</td>
                  <td>GEN-B diagnostic</td>
                  <td>Table 3 neutral steps, 0% through 100% only</td>
                </tr>
                <tr>
                  <td>Gray ramp</td>
                  <td>GEN-B diagnostic</td>
                  <td>Encoded codes from 64 to 940 across x</td>
                </tr>
                <tr>
                  <td>Multi-window PQ</td>
                  <td>GEN-B diagnostic</td>
                  <td>Background 64, windows 723</td>
                </tr>
                <tr>
                  <td>HDR clipping</td>
                  <td>GEN-B diagnostic</td>
                  <td>Twelve bands, neutral half and red half</td>
                </tr>
                <tr>
                  <td>Color tracking</td>
                  <td>GEN-B diagnostic</td>
                  <td>7 &times; 7 grid, E&prime; = k/8</td>
                </tr>
                <tr>
                  <td>Near black detail</td>
                  <td>GEN-B diagnostic</td>
                  <td>Eighteen codes around nominal black</td>
                </tr>
                <tr>
                  <td>Highlight roll-off</td>
                  <td>GEN-B diagnostic</td>
                  <td>Code ramp 509 to 940, then twelve bands</td>
                </tr>
                <tr>
                  <td>Color volume</td>
                  <td>GEN-B diagnostic</td>
                  <td>Inverse EOTF, then narrow quantization</td>
                </tr>
                <tr>
                  <td>Saturation sweep</td>
                  <td>GEN-B diagnostic</td>
                  <td>Component sweeps from neutral 723 toward 64</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            The SDR gray ramp, described with the native SDR patterns, runs
            from code 64 to code 940. It is a separate construction from this
            HDR diagnostic.
          </p>
        </section>

        <section className={styles.section}>
          <h2>11. HDR eleven-step grayscale: stored PQ codes and nominal light</h2>
          <p>
            The 11-step HDR pattern is eleven full-height neutral columns,
            R&prime; = G&prime; = B&prime;, across 1920 &times; 1080. Column
            edges are floor(i &times; 1920 / 11) for i from 0 through 11. The
            resulting edges are 0, 174, 349, 523, 698, 872, 1047, 1221, 1396,
            1570, 1745, and 1920. The 50% column is x = 872 through 1046. The
            SDR eleven-step bars use these same edges with full-range codes 0
            through 1023. This pattern does not. It stores PQ Narrow codes.
          </p>
          <p>
            The percentages are tenths of the normalized PQ signal, E&prime; =
            k/10. They are not linear percentages of emitted light. The
            generator copies the BT.2111 PQ Narrow Table 3 steps for 0% through
            100%. It does not include sub-black code 4 or super-white code
            1019, and it does not run ST 2084 while filling pixels.
          </p>
          <p>
            The test <code>testSignalTenthsFollowBT2100NarrowQuantization</code>{" "}
            derives the same integers without reading the production array
            first:
          </p>
          <p className={styles.formula}>
            D = Round(64 + 876 &times; k/10), using Round(x) = Sign(x) &times;
            Floor(|x| + 0.5)
          </p>
          <p>
            For 40%, 876 &times; 0.4 = 350.4 and 64 + 350.4 = 414.4. Then
            Floor(414.4 + 0.5) = Floor(414.9) = 414. For 70%, 876 &times; 0.7 =
            613.2 and 64 + 613.2 = 677.2. Then Floor(677.2 + 0.5) = Floor(677.7)
            = 677.
            Successive codes differ by 87 or 88. The nominal luminance
            steps do not.
          </p>
          <div className={styles.tableWrap}>
            <table>
              <caption>
                Stored 10-bit codes, and the nominal PQ luminance recorded for
                those codes. GEN-B writes only the code column into the raster.
              </caption>
              <thead>
                <tr>
                  <th>Step</th>
                  <th>Encoded PQ</th>
                  <th>Stored R&prime; = G&prime; = B&prime;</th>
                  <th>Nominal luminance</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>0</td><td>0%</td><td>64</td><td>0 cd/m&sup2;</td></tr>
                <tr><td>1</td><td>10%</td><td>152</td><td>0.33 cd/m&sup2;</td></tr>
                <tr><td>2</td><td>20%</td><td>239</td><td>2.42 cd/m&sup2;</td></tr>
                <tr><td>3</td><td>30%</td><td>327</td><td>10.07 cd/m&sup2;</td></tr>
                <tr><td>4</td><td>40%</td><td>414</td><td>32.29 cd/m&sup2;</td></tr>
                <tr><td>5</td><td>50%</td><td>502</td><td>92.25 cd/m&sup2;</td></tr>
                <tr><td>6</td><td>60%</td><td>590</td><td>245.07 cd/m&sup2;</td></tr>
                <tr><td>7</td><td>70%</td><td>677</td><td>619.57 cd/m&sup2;</td></tr>
                <tr><td>8</td><td>80%</td><td>765</td><td>1,558.44 cd/m&sup2;</td></tr>
                <tr><td>9</td><td>90%</td><td>852</td><td>3,889.14 cd/m&sup2;</td></tr>
                <tr><td>10</td><td>100%</td><td>940</td><td>10,000 cd/m&sup2;</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            The luminance column is the nominal PQ interpretation documented
            with this pattern. It is not computed by the generator, it is not
            stored in the texture, and it is not a photometric measurement. A
            display with limited peak luminance can keep the darker divisions
            distinct and still compress the brighter ones. That behavior
            belongs to the display and the signal path. It is not a reason to
            change the reference codes.
          </p>
          <Figure figure={figures.grayscale} />
          <pre className={styles.code}>
            <code>{`static let stepPercents = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

static let signalCodes: [UInt16] = stepPercents.map { percent in
    let code = BT2111PQNarrowSignalValues.step(percent)
    precondition(code.red == code.green && code.green == code.blue)
    return code.red
}`}</code>
          </pre>
          <p className={styles.codeCaption}>
            HDRGrayscale11StepPQNarrowPattern.swift. The percentages select
            already-encoded Table 3 codes.
          </p>
        </section>

        <section className={styles.section}>
          <h2>12. Multi-window peak white</h2>
          <p>
            The multi-window pattern places six rectangles on nominal black.
            The background code is 64. Every window is the neutral triple 723,
            723, 723. For a neutral pixel, <code>narrowCode(nits: 1000)</code>{" "}
            is 723, and the generator stores 723 as that narrow-range value.
            The frame loop does not evaluate PQ. It writes one of those two
            codes.
          </p>
          <p>
            Code 723 corresponds to the 1,000 cd/m&sup2; neutral reference only
            when R&prime; = G&prime; = B&prime;. A color such as (723, 64, 64)
            is not a 1,000 cd/m&sup2; red. That distinction matters again in
            the saturation sweep.
          </p>
          <div className={styles.tableWrap}>
            <table>
              <caption>Stored window rectangles. Areas sum to 822,592 pixels. The rectangles do not overlap.</caption>
              <thead>
                <tr>
                  <th>Window</th>
                  <th>Origin</th>
                  <th>Size</th>
                  <th>Area</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>(288, 238)</td><td>64 &times; 64</td><td>4,096</td></tr>
                <tr><td>2</td><td>(896, 206)</td><td>128 &times; 128</td><td>16,384</td></tr>
                <tr><td>3</td><td>(1472, 142)</td><td>256 &times; 256</td><td>65,536</td></tr>
                <tr><td>4</td><td>(128, 618)</td><td>384 &times; 384</td><td>147,456</td></tr>
                <tr><td>5</td><td>(704, 554)</td><td>512 &times; 512</td><td>262,144</td></tr>
                <tr><td>6</td><td>(1288, 548)</td><td>624 &times; 524</td><td>326,976</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Different illuminated areas can provoke different behavior in a
            display that uses automatic brightness limiting (ABL), local
            dimming, or another power limit. The pattern holds the encoded
            white constant so that
            area can be the variable under observation. The layout is GEN-B
            geometry, not a BT.2111 figure.
          </p>
          <Figure figure={figures.windows} />
        </section>

        <section className={styles.section}>
          <h2>13. The other HDR diagnostics</h2>
          <h3>Gray ramp</h3>
          <p>
            The gray ramp is neutral and continuous in encoded code, not in
            cd/m&sup2;. Every row is the same. Integer division gives
          </p>
          <p className={styles.formula}>
            code(x) = 64 + ((876 &times; x + 959) / 1919)
          </p>
          <p>
            Here 876 is 940 &minus; 64, 1919 is the last column, and 959 is
            1919 / 2. The endpoints are the PQ Narrow nominal black and nominal
            white codes.
          </p>
          <h3>Near black detail</h3>
          <p>
            Eighteen columns use these codes, left to right: 4, 16, 32, 48, 56,
            60, 62, 63, 64, 65, 66, 68, 72, 80, 88, 99, 112, and 128. Codes
            below 64 are written unchanged. The area below each bar&apos;s
            stored active height is code 64. Codes 4, 48, 64, 80, and 99 match
            BT.2111 narrow anchors. The other codes are GEN-B diagnostic
            levels. This staircase is not the BT.2111 color-bar figure and it
            is not a PLUGE signal.
          </p>
          <h3>Highlight roll-off</h3>
          <p>
            The top 540 rows are a neutral ramp that is linear in code:
          </p>
          <p className={styles.formula}>
            D(x) = 509 + ((431 &times; x + 959) / 1919)
          </p>
          <p>
            The span 431 is 940 &minus; 509. The lower half stores twelve
            neutral codes: 509, 571, 636, 674, 701, 723, 761, 789, 827, 855,
            893, and 940. The source also lists descriptive cd/m&sup2; anchors
            beside those bands. Those anchors are not used to generate pixels,
            and the raster loop does not evaluate ST 2084.
          </p>
          <h3>HDR clipping</h3>
          <p>
            Twelve horizontal bands, each 90 rows, are split at x = 960. The
            left half is neutral, R&prime; = G&prime; = B&prime; = D. The right
            half is R&prime; = D, G&prime; = B&prime; = 64. It is not (D, 0, 0).
            From top to bottom, D is 614, 682, 751, 785, 820, 854, 871, 888,
            906, 923, 937, and 940. Comments in the source give a descriptive
            luminance for the neutral half. Those comments are not recomputed
            while the raster is filled. The red half uses the same R&prime;
            with the other channels at narrow zero, so it is not the same
            photometric luminance.
          </p>
          <h3>Color tracking</h3>
          <p>
            Seven columns, left to right, are gray, red, green, blue, cyan,
            magenta, and yellow. Seven rows use E&prime; = k/8 for k = 1
            through 7, which is 12.5% through 87.5% of the normalized PQ
            signal. The stored codes are 174, 283, 393, 502, 612, 721, and
            831. Inactive channels are 64. Column edges are 0, 274, 548, 822,
            1096, 1370, 1644, and 1920. Row edges are 0, 154, 308, 462, 616,
            770, 924, and 1080. The test derives the codes from D = Round(64 +
            876 &times; k/8) using the Table 9 rule, including the half cases
            173.5, 392.5, 611.5, and 830.5, which round to 174, 393, 612, and
            831.
          </p>
          <h3>Color volume</h3>
          <p>
            Color Volume is the diagnostic that evaluates the PQ inverse EOTF
            during generation, then quantizes with D = Round(64 + 876V). The
            pattern peak used here is 1,000 cd/m&sup2;, code 723. Full-width
            hue rows are 1,000, 203, and 100 cd/m&sup2;, producing component
            codes 723, 573, and 509. Neutral patches are 0, 26, 100, 162, 203,
            and 1,000 cd/m&sup2;, producing 64, 397, 509, 552, 573, and 723.
            An active channel carries that code. Inactive channels stay at 64.
            A red patch is BT.2020 red at that red-component code. It is not an
            equal-luminance color.
          </p>
          <div className={styles.tableWrap}>
            <table>
              <caption>Neutral and component codes produced by narrowCode(nits:).</caption>
              <thead>
                <tr>
                  <th>Input luminance</th>
                  <th>Narrow PQ code</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>0 cd/m&sup2;</td><td>64</td></tr>
                <tr><td>26 cd/m&sup2;</td><td>397</td></tr>
                <tr><td>100 cd/m&sup2;</td><td>509</td></tr>
                <tr><td>162 cd/m&sup2;</td><td>552</td></tr>
                <tr><td>203 cd/m&sup2;</td><td>573</td></tr>
                <tr><td>1,000 cd/m&sup2;</td><td>723</td></tr>
              </tbody>
            </table>
          </div>
          <h3>Saturation sweep</h3>
          <p>
            Six bands, red, green, blue, cyan, magenta, and yellow, are each
            180 rows. Every band starts at the neutral triplet 723, 723, 723.
            The decreasing component is
          </p>
          <p className={styles.formula}>
            inactive(x) = 723 &minus; ((659 &times; x + 959) / 1919)
          </p>
          <p>
            The span 659 is 723 &minus; 64. The right edge reaches code 64 on
            the decreasing channels while the active channels remain 723. This
            is an encoded-component sweep. It is not constant-luminance, not
            perceptually uniform, and not a hue-saturation-value conversion.
            HSV means Hue, Saturation, Value. GEN-B does not use that model
            here.
          </p>
        </section>

        <section className={styles.section}>
          <h2>14. Sampling and the fixed Full HD raster</h2>
          <p>
            The source pattern is defined at 1920 &times; 1080 even when the
            connected display has another native resolution. Presentation is a
            centered aspect-fit of that raster. The picture is not stretched,
            cropped, or filled by GEN-B. Unused drawable area is black. Exact
            1:1 is reported only when the fitted rectangle is 1920 &times; 1080.
            A 3840 &times; 2160 drawable is an integer scale of 2.
          </p>
          <p>
            Mathematical SDR and HDR reference rasters are presented with
            nearest-neighbor sampling, including when the fitted scale is not
            an integer. Nearest-neighbor selects one source sample, so the
            stored code is not blended with its neighbors. A linear sampler
            exists in the general presentation policy for other catalog images.
            It is not used on the mathematical reference path.
          </p>
          <pre className={styles.code}>
            <code>{`let preserveReferenceCodes = catalogSourcePrecision == .nativeTenBitBT709`}</code>
          </pre>
          <p className={styles.codeCaption}>
            MetalOutputRenderer.draw(in:). When the bound raster is mathematical
            BT.709, this flag selects nearestSampler.
          </p>
          <pre className={styles.code}>
            <code>{`drawTexturedQuad(
    encoder: encoder,
    pipelineState: hdrPipelineState,
    texture: proceduralTexture,
    sampler: nearestSampler,
    fit: fit,
    drawableSize: drawableSize
)`}</code>
          </pre>
          <p className={styles.codeCaption}>
            MetalOutputRenderer.draw(in:). The HDR path passes nearestSampler
            directly.
          </p>
        </section>

        <section className={styles.section}>
          <h2>15. Switching paths and caching textures</h2>
          <p>
            The layer is rewritten only when the pixel format, the EDR flag, or
            the color-space name changes. Moving from one PQ pattern to another
            PQ pattern leaves the 10-bit PQ configuration in place and replaces
            the bound texture. Moving from PQ to HLG changes the color space
            and keeps the 10-bit format. Returning to SDR keeps{" "}
            <code>bgr10a2Unorm</code>, writes the BT.709 color space, and turns
            EDR off. A pattern from <code>SDRTenBitPatternEngine</code> then
            binds its cached mathematical texture.
          </p>
          <p>
            Each mathematical HDR pattern has its own texture cache. The first
            build of a missing HDR texture runs off the caller thread. A later
            selection of the same pattern reuses the texture instead of
            rebuilding all 2,073,600 pixels. Native SDR textures are cached the
            same way, per pattern, when the raster is first generated. A
            generation counter rejects a completion that belongs to an older
            request. Selecting HDR does not change the presented pattern until
            the matching frame is acknowledged. The loading indicator appears
            only when an external display is connected, a mathematical HDR
            pattern is requested, and the current surface has no valid
            presented frame.
          </p>
          <pre className={styles.code}>
            <code>{`static let assignsCurrentMode = false
static let externalModePolicy = "ADAPTIVE"`}</code>
          </pre>
          <p className={styles.codeCaption}>
            ExternalDisplayAdaptationPolicy. The internal raster stays 1920
            &times; 1080. The transport mode is negotiated outside GEN-B.
          </p>
        </section>

        <section className={styles.section}>
          <h2>16. What this architecture is for</h2>
          <p>
            The technical identity of GEN-B is explicit international code
            tables, procedural 10-bit HDR rasters, native 10-bit BT.709 SDR,
            color-space tags that match the selected system, nearest sampling
            of those mathematical textures, and tests that lock the integers
            and the renderer state.
          </p>
          <p>
            Those tests lock RP 219 geometry, GreyScale and Luma codes, packed
            words, PQ versus HLG layer configuration, stale-request rejection,
            and nearest sampling of the mathematical rasters.
          </p>
          <p>
            The patterns support visual examination of signal-path
            configuration, color-component behavior, encoded ramps, near-black
            handling, highlight separation, and the difference between a
            reference code and what a particular display can reproduce.
          </p>
        </section>

        <section className={styles.section}>
          <h2>17. Conclusion</h2>
          <p>
            GEN-B combines ITU-R and SMPTE reference mathematics with Metal.
            Native 10-bit SDR stores explicit BT.709 codes. HDR stores
            prescribed or computed 10-bit codes under BT.2100 PQ or BT.2100
            HLG. The shader does not reinterpret those codes. ProRes playback
            remains a separate 8-bit BGRA decode and is not the planned
            mathematical video engine.
          </p>
          <div className={styles.closing}>
            <p className={styles.closingLine}>
              GEN-B does not redefine broadcast engineering standards.
            </p>
            <p className={styles.closingSupport}>
              It implements established reference values as precise digital
              codes on a computer that fits in your pocket.
            </p>
          </div>
          <p className={styles.attribution}>
            Developed by Precision Broadcast Engineering LLC.
          </p>
          <footer className={styles.signature}>
            <p className={styles.signatureLabel}>Written by</p>
            <p className={styles.signatureName}>Luis A. Mart&iacute;nez</p>
            <p className={styles.signatureRole}>Founder &amp; Principal Engineer</p>
            <p className={styles.signatureOrg}>Precision Broadcast Engineering LLC</p>
          </footer>
        </section>

        <section className={styles.section}>
          <h2>References</h2>
          <ol className={styles.references}>
            {references.map((reference) => (
              <li key={reference.href}>
                <a href={reference.href} target="_blank" rel="noopener noreferrer">
                  {reference.label}
                </a>
              </li>
            ))}
          </ol>
          <p className={styles.closingNote}>
            <em>
              Nominal 11-step luminances are the values recorded in GEN-B&apos;s
              engineering note HDR-Grayscale-Display-Luminance-Limitations.md.
              Source excerpts are from the GEN-B implementation on branch
              feature/metal-output-pipeline, commit a84788e.
            </em>
          </p>
        </section>

        <section className={styles.callout}>
          <p className="genb-kicker">Engineered for digital precision</p>
          <p>
            GEN-B implements mathematically defined reference signals through
            dedicated SDR BT.709 and HDR BT.2100 rendering architectures. Its
            Metal pipeline preserves the intended digital component values,
            applies the corresponding color-space configurations, and uses the
            advanced graphics capabilities of modern Apple hardware for
            professional reference-signal presentation.
          </p>
        </section>

        <section className={styles.finalCta}>
          <div>
            <p className="genb-kicker">GEN-B</p>
            <h2>Carry the reference generator with you.</h2>
            <p>
              GEN-B is a professional Full HD test-signal generator and
              display-analysis platform from Precision Broadcast Engineering.
            </p>
          </div>
          <div className={`${styles.actions} ${styles.storeRow}`}>
            <a
              href={GEN_B_APP_STORE_URL}
              className="genb-store-link"
              aria-label="Download GEN-B on the App Store"
            >
              <Image
                src="/gen-b/genb-app-store-badge.png"
                alt="Download on the App Store"
                width={194}
                height={75}
                className="genb-store-badge"
              />
            </a>
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
