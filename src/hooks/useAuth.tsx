import { Accessor, createContext, createSignal, JSX, Setter, useContext } from "solid-js";

interface AuthContextData {
  isAuth: Accessor<boolean>;
  setIsAuth?: Setter<boolean>;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider(props: { children: JSX.Element }) {
  console.log({ props });

  const [isAuth, setIsAuth] = createSignal(true);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>{props.children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
