import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Hamburger } from './Hamburger';
import { Toggle } from './Toggle';

const HeaderStyled = styled.header`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  background: var(--color-computed-background);
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 7;
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  z-index: 7;
`;

const Header = ({ isOpen, setOpen, handleToggle, darkTheme }) => {
  return (
    <HeaderStyled>
      <HamburgerButton onClick={() => setOpen(!isOpen)}>
        <Hamburger isOpen={isOpen} />
      </HamburgerButton>
      <Toggle handleToggle={() => handleToggle()} darkTheme={darkTheme} />
    </HeaderStyled>
  );
};

export { Header };
