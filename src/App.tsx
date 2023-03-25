import { ThemeProvider } from "solid-styled-components";
import { globalStyle } from "./styles/global";
import { theme } from "./styles/theme";

import { AuthProvider } from "./hooks/useAuth";
import { ToastProvider } from "./hooks/useToast";
import Routes from "./Routes";
import { LoadingProvider } from "./hooks/useLoading";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LoadingProvider>
        <AuthProvider>
          <ToastProvider>
            <Routes />
          </ToastProvider>
          {globalStyle}
        </AuthProvider>
      </LoadingProvider>
    </ThemeProvider>
  );
};

export default App;
