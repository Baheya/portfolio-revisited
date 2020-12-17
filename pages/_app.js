// import '../styles/globals.css';
// import '../styles/themes.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useState } from 'react';

const GlobalStyles = createGlobalStyle`
	:root {
	--color-primary-background: rgb(208, 224, 235);
  --color-secondary-background: rgb(248, 177, 149);
  --color-text-primary: rgb(53, 92, 125);
    --color-computed-background: rgb(208, 224, 235);
	}
	[data-theme="dark"] {
      --color-primary-background: rgb(44, 28, 51);
  --color-secondary-background: rgb(0, 0, 0);
  --color-text-primary: rgb(192, 99, 112);
      --color-computed-background: rgb(44, 28, 51);
	}

	html,
	body {
		font-family: "'Abril Fatface', cursive";
		margin: 0;
    padding: 0;
    background-color: var(--color-computed-background);
    scroll-behavior: smooth;
	}


	h1,
	h2,
	h3,
	h4 {
		margin: 0;
	}
h1:target { 
  margin-top: -12px; 
  padding-top: 60px; 
 
}
	a {
		text-decoration: none;
		color: inherit;
		cursor: pointer;
		&:visited {
			text-decoration: none;
		}
		&:hover {
			text-decoration: underline;
		}
	}
	* {
    box-sizing: border-box;
  }
`;

function MyApp({ Component, pageProps }) {
  const [themeObject, setThemeObject] = useState({ theme: undefined });

  const getCSSVarValue = (variable) => {
    if (typeof window !== 'undefined') {
      return getComputedStyle(document.body).getPropertyValue(variable);
    }
    return undefined;
  };

  const changeThemeVariant = (theme) => {
    setThemeObject({ theme });
  };

  const themeForContext = {
    ...themeObject,
    getCSSVarValue,
    changeThemeVariant,
  };

  return (
    <>
      <ThemeProvider theme={themeForContext}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
