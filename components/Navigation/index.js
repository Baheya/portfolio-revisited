import styled from 'styled-components';
import { motion, useCycle, AnimatePresence } from 'framer-motion';
import { NavItems } from './NavItems';

const NavWrapper = styled(motion.nav)`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 1 / 7;
  grid-column: 1 / -1;
`;

const NavBackground = styled(motion.div)`
  background-color: var(--color-computed-background);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 6;
  grid-column: 1 / -1;
  grid-row: 1 / 7;
`;

const variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: () => ({
    clipPath: 'circle(30px at -40px -40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  }),
};

const Navigation = ({ isOpen, setOpen, toggleNav }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <NavWrapper
            animate={isOpen ? 'open' : 'closed'}
            initial="closed"
            exit="closed"
          >
            <NavBackground variants={variants} />
            <NavItems toggleNav={toggleNav} />
          </NavWrapper>
        )}
      </AnimatePresence>
    </>
  );
};

export { Navigation };
