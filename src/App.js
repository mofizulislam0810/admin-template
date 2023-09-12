import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./utils/theme";
import { Route, Routes } from "react-router-dom";
import { memo } from "react";
import Topbar from "./layout/Topbar";
import Dashboard from "./pages/dashboard";
import { MyProSidebarProvider } from "./layout/sidebar/sidebarContext";

const Main = memo(() => {
  console.log("Main");

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <main>
        <Topbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/bubbles" element={<Bubbles />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/form" element={<Form />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/line" element={<Line />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/geography" element={<Geography />} /> */}
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
