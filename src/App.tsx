import { ThemeProvider } from "solid-styled-components";
import { globalStyle } from "./styles/global";
import { theme } from "./styles/theme";

import { AuthProvider } from "./hooks/useAuth";
import { ToastProvider } from "./hooks/useToast";
import Routes from "./Routes";
import { LoadingProvider } from "./hooks/useLoading";
import { memoryIntegration, Router } from "@solidjs/router";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <LoadingProvider>
          <Router source={memoryIntegration()}>
            <AuthProvider>
              <Routes />
              {globalStyle}
            </AuthProvider>
          </Router>
        </LoadingProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
