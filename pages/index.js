import Head from 'next/head';
import styled, { ThemeContext } from 'styled-components';
import { Navigation, Toggle } from '../components';
import { useEffect, useState, useContext } from 'react';
import Typed from 'typed.js';
import { CollageOne } from '../components/Collage/CollageOne';
import { changeBgColor, strings } from '../utils';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2rem repeat(8, 1fr) 2rem;
  grid-template-rows: 200px 300px 300px 300px 300px;
  /* background-color: var(--computed-background); */
`;

const AboutText = styled.h1`
  color: var(--color-text-primary);
  margin: 0;
  font-size: 96px;
  max-width: 900px;
  grid-column: 2 / 8;
  grid-row: 2 / 3;
`;

const Home = () => {
  const [darkTheme, setDarkTheme] = useState(undefined);
  const { changeThemeVariant, getCSSVarValue, theme } = useContext(
    ThemeContext
  );

  const handleToggle = (event) => {
    setDarkTheme(() => !darkTheme);
  };

  const storeUserSetPreference = (pref) => {
    localStorage.setItem('theme', pref);
  };

  useEffect(() => {
    const root = document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    );
    setDarkTheme(initialColorValue === 'dark');
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkTheme !== undefined) {
      if (darkTheme) {
        root.setAttribute('data-theme', 'dark');
        storeUserSetPreference('dark');
      } else {
        root.removeAttribute('data-theme');
        storeUserSetPreference('light');
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--color-computed-background',
      getCSSVarValue('--color-primary-background')
    );
  }, [darkTheme]);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const Bg = changeBgColor(
        getCSSVarValue('--color-primary-background'),
        getCSSVarValue('--color-secondary-background')
      );
      document.documentElement.style.setProperty(
        '--color-computed-background',
        `rgb(${Bg.join(',') + ')'}`
      );
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
    <Grid bgColor={getCSSVarValue('--computed-background')}>
      <Toggle handleToggle={() => handleToggle()} darkTheme={darkTheme} />
      <Navigation />
      <AboutText>
        Hi! My name is Baheya Khalifa and I'm <span id="about"></span>
      </AboutText>
      <CollageOne />
    </Grid>
  );
};

export default Home;
