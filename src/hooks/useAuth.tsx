import { Accessor, createContext, createSignal, JSX, Setter, useContext } from "solid-js";
import { createStore } from "solid-js/store";

interface AuthContextData {
  user?: IUser;
}

type IUser = {
  id: string;
  email?: string;
} | undefined;

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider(props: { children: JSX.Element }) {
  const [user, setUser] = createStore<IUser>(undefined);

  return <AuthContext.Provider value={{user}}>{props.children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
