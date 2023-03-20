import { ThemeProvider } from "solid-styled-components";
import { globalStyle } from "./styles/global";
import { theme } from "./styles/theme";
import { Router, memoryIntegration, Route, Routes } from "@solidjs/router";
import { LoginView } from "./views/LoginView";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";
import { ToastProvider } from "./hooks/useToast";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ToastProvider>
          <Router source={memoryIntegration()}>
            <Routes>
              <Route path={"/"} element={<LoginView />} />
              <Route path={"/register"} element={<LoginView />} />
              <ProtectedRoute path={"/teste"} element={<h1>OI ESTOU LOGADO</h1>} />
              {/* <Route path={"/*"} element={<h1>312321312</h1>} /> */}
            </Routes>
          </Router>
        </ToastProvider>
        {globalStyle}
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
