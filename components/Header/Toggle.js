import { motion } from 'framer-motion';
import styled from 'styled-components';
import Moon from '../../public/dark-mode/moon.js';
import Sun from '../../public/dark-mode/sun.js';

const ToggleWrapper = styled(motion.div)`
  width: 50px;
  height: 25px;
  border-radius: 12.5px;
  background-color: var(--color-text-primary);
  display: flex;
  justify-content: ${(props) => (!props.darkTheme ? `flex-start` : `flex-end`)};
  cursor: pointer;
  z-index: 2;
  grid-column: 9 / 10;
  margin: 1rem;
  position: relative;
`;

const Handle = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  width: 20px;
  height: 20px;
  z-index: 2;
  margin: 2.5px;
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
