import styled from 'styled-components';
import { motion, useCycle } from 'framer-motion';
import { NavList } from './NavList';
import { Hamburger } from './Hamburger';
import { useState } from 'react';

const NavWrapper = styled(motion.nav)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  z-index: 1;
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 2;
`;

const Thing = styled(motion.div)`
  background-color: #6b5c7b;
  position: absolute;
  width: 100%;
  height: 100%;
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

const Navigation = () => {
  const [isOpen, setOpen] = useCycle(false, true);
  return (
    <>
      <HamburgerButton>
        <Hamburger isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
      </HamburgerButton>
      <NavWrapper animate={isOpen ? 'open' : 'closed'} initial="closed">
        <Thing variants={variants} />
        <NavList />
      </NavWrapper>
    </>
  );
};

export { Navigation };
