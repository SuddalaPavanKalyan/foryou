import { motion, type Variants } from "framer-motion";

type Props = {
  size?: number; // px
  primary?: string;
  secondary?: string;
  className?: string;
  ariaLabel?: string;
};

const svgContainer: Variants = {
  hidden: { rotate: -10, opacity: 0 },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 }
  }
};

const ring: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (custom: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.9, delay: 0.15 * custom, ease: "easeInOut" }
  })
};

const core: Variants = {
  hidden: { scale: 0.6, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 350, damping: 22, delay: 0.5 }
  }
};

export default function Logo({
  size = 64,
  primary = "#0f172a",
  secondary = "#06b6d4",
  className = "",
  ariaLabel = "Brand logo"
}: Props) {
  const strokeWidth = Math.max(2, Math.round(size / 24));

  return (
    <motion.div
      className={`inline-block ${className}`}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      variants={svgContainer}
      style={{ width: size, height: size }}
      aria-label={ariaLabel}
      role="img"
    >
      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="g1" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={primary} stopOpacity="1" />
            <stop offset="100%" stopColor={secondary} stopOpacity="1" />
          </linearGradient>
        </defs>

        <motion.circle
          cx="32"
          cy="32"
          r="28"
          fill="none"
          stroke="url(#g1)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={ring}
          custom={1}
        />

        <motion.path
          d="M20 38c3-6 8-10 12-11s10 2 14 8"
          fill="none"
          stroke={primary}
          strokeWidth={Math.max(2, Math.round(size / 28))}
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={ring}
          custom={2}
        />

        <motion.g variants={core} style={{ originX: "50%", originY: "50%" }}>
          <circle cx="32" cy="24" r="7" fill={secondary} />

          <path
            d="M28 44c1.5-2 4-4 8-4s6.5 2 8 4"
            fill="none"
            stroke={secondary}
            strokeWidth={Math.max(1.5, Math.round(size / 36))}
            strokeLinecap="round"
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
