import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ParallaxBox } from '../ParallaxBox';
import { IntersectionObserver } from '../IntersectionObserver';

const CollageWrapper = styled(motion.div)`
  width: 300px;
  height: 300px;
  position: relative;
  grid-column: 1 / 2;
  grid-row: 1 / 4;
`;

const CollageTwo = () => {
  return (
    <CollageWrapper>
      <ParallaxBox
        img="/collage-2/layer-1.png"
        zIndex={1}
        triggerPoint={0.5}
        yOffset={900}
        initialValue
      />
      <ParallaxBox
        img="/collage-2/layer-2.png"
        yOffset={1200}
        zIndex={2}
        triggerPoint={0.9}
        initialValue
      />
    </CollageWrapper>
  );
};

export { CollageTwo };
