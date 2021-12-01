import React from 'react';
import {MainRoute} from "./routes";

import {ThemeProvider} from "styled-components";
import lightTheme from "./themes/light";
import darkTheme from "./themes/dark"
import GlobalStyle from "../src/themes/global"
import {useSelector} from "react-redux";
import {RootState} from "./store/store";



function App() {

    const newThemeApp = useSelector((state:RootState) => state.appTheme)

    function themeProvider() {
        if (newThemeApp === 'light'){
            return lightTheme
        }
            return darkTheme
    };

  return (
      <ThemeProvider theme={themeProvider()}>
          <GlobalStyle />
          <MainRoute />
      </ThemeProvider>
  );
};


export default App;
