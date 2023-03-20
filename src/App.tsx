import { ThemeProvider } from "solid-styled-components";
import { globalStyle } from "./styles/global";
import { theme } from "./styles/theme";
import { Router, memoryIntegration, Route, Routes } from "@solidjs/router";
import { LoginView } from "./views/LoginView";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";
import { ToastProvider } from "./hooks/useToast";
import { RegisterView } from "./views/RegisterView";
import { LoginLayout } from "./layouts/LoginLayout";
import { AppLayout } from "./layouts/AppLayout";
import { CreateNoteView } from "./views/CreateNoteView";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ToastProvider>
          <Router source={memoryIntegration()}>
            <Routes>
              {/* <Route path={"/"} element={<LoginLayout />}>
                <Route path={"/"} element={<LoginView />} />
                <Route path={"/register"} element={<RegisterView />} />
              </Route> */}
              <Route path={"/"} element={<AppLayout />}>
                {/* /app */}
                <Route path={"/"} element={<CreateNoteView />} />
              </Route>
              <ProtectedRoute path={"/teste"} element={<h1>OI ESTOU LOGADO</h1>} />
            </Routes>
          </Router>
        </ToastProvider>
        {globalStyle}
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
