import React from 'react';
import {MainRoute} from "./routes";
import {ThemeProvider} from "styled-components";
import light from "./themes/light";
import GlobalStyle from "../src/themes/global"

function App() {
  return (
      <ThemeProvider theme={light}>
          <GlobalStyle />
          <MainRoute />
      </ThemeProvider>
  );
}

export default App;
