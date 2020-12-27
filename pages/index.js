import Head from 'next/head';
import styled, { ThemeContext } from 'styled-components';
import {
  Navigation,
  Header,
  HomeSection,
  Projects,
  Contact,
} from '../components';
import { useEffect, useState, useContext } from 'react';
import Typed from 'typed.js';
import { changeBgColor, strings } from '../utils';
import { useCycle } from 'framer-motion';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2rem repeat(8, 1fr) 2rem;
  grid-template-rows: 3rem repeat(5, 100vh);
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
`;

const Index = () => {
  const [darkTheme, setDarkTheme] = useState(undefined);
  const [isOpen, setOpen] = useCycle(false, true);
  const { changeThemeVariant, getCSSVarValue, theme } = useContext(
    ThemeContext
  );

  const toggleNav = () => setOpen(!isOpen);
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
      <Header
        isOpen={isOpen}
        setOpen={setOpen}
        handleToggle={handleToggle}
        darkTheme={darkTheme}
      />
      <Navigation toggleNav={toggleNav} isOpen={isOpen} />
      <HomeSection />
      <Projects />
      <Contact />
    </Grid>
  );
};

export default Index;
