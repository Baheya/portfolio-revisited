import styled from 'styled-components';
import { motion } from 'framer-motion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const NavItemStyled = styled(motion.li)`
  list-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.color};
`;

const NavItem = ({ item, color }) => {
  return (
    <NavItemStyled
      variants={variants}
      whileHover={{ scale: 1.1 }}
      color={color}
    >
      {item}
    </NavItemStyled>
  );
};

export { NavItem };
