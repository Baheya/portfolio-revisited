import { motion } from 'framer-motion';

const Hamburger = ({ isOpen = false, ...props }) => {
  const variant = isOpen ? 'opened' : 'closed';
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  };
  const lineProps = {
    stroke: 'var(--color-text-primary)',
    strokeWidth: 4,
    vectorEffect: 'non-scaling-stroke',
    initial: 'closed',
    animate: variant,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
    strokeLinecap: 'round',
  };

  return (
    <motion.svg
      viewBox="0 0 6 6"
      overflow="visible"
      preserveAspectRatio="none"
      width="24px"
      height="24px"
      {...props}
    >
      <motion.line x1="0" x2="6" y1="0" y2="0" variants={top} {...lineProps} />
      <motion.line
        x1="0"
        x2="6"
        y1="2"
        y2="2"
        variants={center}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2="6"
        y1="4"
        y2="4"
        variants={bottom}
        {...lineProps}
      />
    </motion.svg>
  );
};

export { Hamburger };
