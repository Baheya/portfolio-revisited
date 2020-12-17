import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavItem } from './NavItem';

const navItems = ['Home', 'About', 'Projects', 'Contact'];
const colors = ['#F8B195', '#F7727F', '#C16C84', '#6B5C7B', '#355C7D'];

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const NavListStyled = styled(motion.ul)`
  padding: 0;
  position: fixed;
  font-size: 70px;
  z-index: 7;
`;

const NavItems = ({ isOpen, toggleNav }) => {
  return (
    <NavListStyled variants={variants}>
      {navItems.map((item, i) => (
        <NavItem key={i} item={item} toggleNav={toggleNav} />
      ))}
    </NavListStyled>
  );
};

export { NavItems };
