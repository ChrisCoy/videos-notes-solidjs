import { ThemeProvider } from "solid-styled-components";
import { globalStyle } from "./styles/global";
import { theme } from "./styles/theme";

import { AuthProvider } from "./hooks/useAuth";
import { ToastProvider } from "./hooks/useToast";
import Routes from "./Routes";
import { LoadingProvider } from "./hooks/useLoading";
import { memoryIntegration, Router } from "@solidjs/router";
import { VideosProvider } from "./hooks/useVideos";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <LoadingProvider>
          <Router source={memoryIntegration()}>
            <AuthProvider>
              <VideosProvider>
                <Routes />
                {globalStyle}
              </VideosProvider>
            </AuthProvider>
          </Router>
        </LoadingProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
