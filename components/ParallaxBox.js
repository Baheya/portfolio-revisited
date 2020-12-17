import { useRef, useState, useEffect, useMemo, useContext } from 'react';
import { useViewportScroll, useTransform, motion } from 'framer-motion';
import styled from 'styled-components';
import { IntersectionContext } from './IntersectionObserver';

const StyledMotionDiv = styled(motion.div)`
  width: 300px;
  height: 300px;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  position: absolute;
  background-image: ${(props) => `url(${props.img})`};
  background-size: contain;
  background-repeat: no-repeat;
  z-index: ${(props) => props.zIndex};
`;

export const ParallaxBox = ({
  children,
  yOffset = 1000, // number > 0
  easing = [0.42, 0, 0.58, 1],
  // easing = "easeInOut", // [number, number, number, number] | "linear" | "easeIn" |
  //"easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" |
  //"backInOut" | "anticipate" | EasingFunction;
  triggerPoint = 0.5, // value between 0 and 1 (top and bottom of the window), point to start animation
  fadeOut = false, // true | false fade an element out on end of the animation
  img,
  top,
  right,
  left,
  bottom,
  zIndex,
  initialValue,
  ...rest
}) => {
  const { scrollY } = useViewportScroll();
  const ref = useRef();
  const [elementTop, setElementTop] = useState(0);
  const [elementBottom, setElementBottom] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const { inView } = useContext(IntersectionContext);

  useEffect(() => {
    if (!ref.current) return;

    const setValues = () => {
      setElementTop(ref.current.offsetTop);
      setElementBottom(ref.current.offsetTop + ref.current.offsetHeight);
      setClientHeight(window.innerHeight);
    };
    if (inView) {
      setValues();
    }
    document.addEventListener('load', setValues);
    window.addEventListener('resize', setValues);

    return () => {
      document.removeEventListener('load', setValues);
      window.removeEventListener('resize', setValues);
    };
  }, [ref, yOffset, inView]);

  // const transformInitialValue =
  //   elementTop - window.innerHeight <= 0 ? 0 : elementTop - window.innerHeight;
  const transformInitialValue = initialValue
    ? elementTop - yOffset * triggerPoint
    : 0;

  const transformFinalValue = elementTop + yOffset * triggerPoint;

  const yRange = [transformInitialValue, transformFinalValue];

  const y = useTransform(scrollY, yRange, [0, -yOffset], easing);

  const opacityInitialValue = fadeOut ? 0 : 1;
  const opacityRange = useMemo(() => [opacityInitialValue, 1], [
    opacityInitialValue,
  ]);

  // const yOpacityRange = [transformInitialValue, transformFinalValue];
  const yOpacityRange = [elementBottom, transformFinalValue - yOffset];
  const opacity = useTransform(
    scrollY,
    yOpacityRange,
    opacityRange,
    'anticipate'
  );

  return (
    <StyledMotionDiv
      ref={ref}
      initial={{ y: 0 }}
      style={{ y, opacity }}
      img={img}
      top={top}
      right={right}
      left={left}
      bottom={bottom}
      zIndex={zIndex}
      {...rest}
    >
      {children}
    </StyledMotionDiv>
  );
};
