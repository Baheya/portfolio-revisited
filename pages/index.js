import Head from 'next/head';
import styled from 'styled-components';
import { Navigation } from '../components';
import { useEffect, useState } from 'react';
import Typed from 'typed.js';
import { CollageOne } from '../components/Collage/CollageOne';
import { changeBgColor, strings } from '../utils';

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

export default function Home() {
  const [bgColor, setBgColor] = useState(`rgb(192, 196, 220)`);
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const Bg = changeBgColor([192, 196, 220], [248, 177, 149]);
      setBgColor(`rgb(${Bg.join(',') + ')'}`);
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
