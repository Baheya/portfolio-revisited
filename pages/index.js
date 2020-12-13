import Head from 'next/head';
import styled from 'styled-components';
import { Navigation } from '../components';
import { useEffect, useState } from 'react';
import Typed from 'typed.js';

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 300vh;
  background-color: ${(props) => props.bgColor};
  padding: 6rem 2rem;
`;
const AboutText = styled.h1`
  color: #f8b195;
  margin: 0;
  font-size: 96px;
  max-width: 900px;
`;

const strings = [
  'a fullstack web developer',
  'a collage artist',
  'a plant admirer',
];

export default function Home() {
  const [bgColor, setBgColor] = useState(`rgb(53, 92, 125)`);
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const fraction = window.scrollY / 450;
      const r = (107 - 53) * fraction + 53;
      const g = (92 - 92) * fraction + 92;
      const b = (123 - 125) * fraction + 125;
      setBgColor(`rgb(${r}, ${g}, ${b})`);
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
    <Background bgColor={bgColor}>
      <Navigation />
      <AboutText>
        Hi! My name is Baheya Khalifa and I'm <span id="about"></span>
      </AboutText>
    </Background>
  );
}
