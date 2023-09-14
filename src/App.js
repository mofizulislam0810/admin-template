import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./utils/theme";
import { Route, Routes } from "react-router-dom";
import { memo } from "react";
import Topbar from "./layout/Topbar";
import Dashboard from "./pages/dashboard";
import { MyProSidebarProvider } from "./layout/sidebar/sidebarContext";

const Main = memo(() => {

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <main>
        <Topbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
});


function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
        <Main />
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
