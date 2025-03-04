import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';

import './index.css';
import App from './App.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    background-color:  #131416;
    font-size: 16px;
    font-family: "Open Sans", serif;
    font-weight: 400;
    font-style: normal;
    color: #f2f2f2;
  }
`;
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
