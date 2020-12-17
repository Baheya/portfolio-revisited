import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ParallaxBox } from '../ParallaxBox';
import { IntersectionObserver } from '../IntersectionObserver';

const CollageWrapper = styled(motion.div)`
  width: 300px;
  height: 300px;
  position: relative;
  display: flex;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;

const CollageOne = () => {
  return (
    <CollageWrapper animate={{ y: [-300, 0], opacity: [0.5, 1], duration: 1 }}>
      <ParallaxBox
        img="/collage1/layer1desktop.png"
        zIndex={1}
        triggerPoint={1}
      />
      <ParallaxBox
        img="/collage1/layer2desktop.png"
        yOffset={800}
        zIndex={2}
        triggerPoint={0.5}
      />
      <ParallaxBox
        img="/collage1/layer3desktop.png"
        yOffset={600}
        zIndex={3}
        triggerPoint={0.4}
      ></ParallaxBox>
      <ParallaxBox
        img="/collage1/layer4desktop.png"
        yOffset={500}
        zIndex={4}
        triggerPoint={0.8}
        right="-15%"
      ></ParallaxBox>
      <ParallaxBox
        img="/collage1/layer5desktop.png"
        yOffset={700}
        zIndex={5}
        triggerPoint={0.3}
      ></ParallaxBox>
    </CollageWrapper>
  );
};

export { CollageOne };
