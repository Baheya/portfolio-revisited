import Head from 'next/head';
import styled from 'styled-components';
import { Hamburger, Navigation } from '../components';

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #355c7d;
  padding: 2rem;
`;
const AboutText = styled.h1`
  color: #f8b195;
  margin: 0;
  font-size: 48px;
`;

export default function Home() {
  return (
    <Background>
      <Navigation />
      <AboutText>
        Hi! My name is Baheya Khalifa and I'm a fullstack web developer based in
        Dubai.
      </AboutText>
    </Background>
  );
}
