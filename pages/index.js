import Head from 'next/head';
import styled from 'styled-components';
import { Navigation } from '../components';
import { useEffect, useState } from 'react';
import Typed from 'typed.js';
import { ParallaxBox } from '../components/ParallaxBox';
import { CollageOne } from '../components/Collage/CollageOne';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr 1fr 1fr 1fr 2rem;
  grid-template-rows: 200px 300px 300px 300px 300px;
  background-color: ${(props) => props.bgColor};
`;

const AboutText = styled.h1`
  color: #355c7d;
  margin: 0;
  font-size: 96px;
  max-width: 900px;
  grid-column: 2 / 5;
  grid-row: 2 / 3;
`;

const strings = [
  'a fullstack web developer',
  'a collage artist',
  'a plant admirer',
];

export default function Home() {
  const [bgColor, setBgColor] = useState(`rgb(248, 177, 149)`);
  useEffect(() => {
    document.addEventListener('scroll', () => {
      // const fraction = window.scrollY / 450;
      // const r = (107 - 53) * fraction + 53;
      // const g = (92 - 92) * fraction + 92;
      // const b = (123 - 125) * fraction + 125;
      // setBgColor(`rgb(${r}, ${g}, ${b})`);

      let tStart = 100; // Start transition 100px from top
      let tEnd = 700; // End at 500px
      let cStart = [248, 177, 149]; // Gold
      let cEnd = [107, 92, 123]; // Lime
      let cDiff = [
        cEnd[0] - cStart[0],
        cEnd[1] - cStart[1],
        cEnd[2] - cStart[2],
      ];

      var p = (window.scrollY - tStart) / (tEnd - tStart); // % of transition
      p = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
      var cBg = [
        Math.round(cStart[0] + cDiff[0] * p),
        Math.round(cStart[1] + cDiff[1] * p),
        Math.round(cStart[2] + cDiff[2] * p),
      ];
      setBgColor(`rgb(${cBg.join(',') + ')'}`);
    });
  }, []);

  useEffect(() => {
    const options = { strings, typeSpeed: 50, backSpeed: 50 };
    const typed = new Typed('#about', options);
    return () => {
      typed.destroy();
    };
  }, [strings]);
  return (
    <Grid bgColor={bgColor}>
      <Navigation />
      <AboutText>
        Hi! My name is Baheya Khalifa and I'm <span id="about"></span>
      </AboutText>
      <CollageOne />
    </Grid>
  );
}
