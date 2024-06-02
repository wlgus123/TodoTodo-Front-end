import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MainPage from "./page/MainPage";
import { GlobalStyle } from "./Style/styles";
import { theme } from "./Style/theme";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Suspense fallback={<div>...loading</div>}>
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
          </Suspense>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
