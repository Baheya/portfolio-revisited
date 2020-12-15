import { motion } from 'framer-motion';
import styled from 'styled-components';
import Moon from '../public/dark-mode/moon.js';
import Sun from '../public/dark-mode/sun.js';

const ToggleWrapper = styled(motion.div)`
  width: 100px;
  height: 50px;
  border-radius: 25px;
  background-color: var(--color-text-primary);
  display: flex;
  justify-content: ${(props) => (!props.darkTheme ? `flex-start` : `flex-end`)};
  cursor: pointer;
  z-index: 8;
  grid-column: 4 / 5;
  margin: 1rem;
  position: relative;
`;

const Handle = styled(motion.div)`
  background-color: #fff;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  z-index: 9;
  margin: 5px;
`;

const spring = {
  type: 'spring',
  stiffness: 400,
  damping: 20,
};

const Toggle = ({ handleToggle, darkTheme }) => {
  return (
    <ToggleWrapper darkTheme={darkTheme} onClick={() => handleToggle()}>
      <Handle layout transition={spring} />
      {!darkTheme ? <Moon /> : <Sun />}
    </ToggleWrapper>
  );
};

export { Toggle };
