import { useNavigate } from "@solidjs/router";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Accessor, createContext, createSignal, JSX, Setter, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { auth } from "../service/firebase";
import { useLoading } from "./useLoading";
import { useToast } from "./useToast";

type IUser = {
  id?: string;
  email?: string;
};

interface SignCredentials {
  email: string;
  password: string;
}
interface AuthContextData {
  user?: IUser;
  register: (credentials: SignCredentials) => Promise<void>;
  login: (credentials: SignCredentials) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider(props: { children: JSX.Element }) {
  const { setIsLoading } = useLoading();
  const [user, setUser] = createStore<IUser>(undefined);
  const navigate = useNavigate();
  const toast = useToast();

  async function register({ email, password }: SignCredentials) {
    try {
      setIsLoading(true);
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      setUser({
        email: user.email || "",
        id: user.uid,
      });
      console.log(user);
    } catch (error) {
      console.error(error);
      toast.error("Error, please try again");
    } finally {
      setIsLoading(false);
      toast.info("Success!");
    }
  }

  async function login({ email, password }: SignCredentials) {
    try {
      setIsLoading(true);
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      setUser({
        email: user.email || "",
        id: user.uid,
      });
    } catch (error) {
      console.error(error instanceof FirebaseError);
      if (error instanceof FirebaseError) {
        toast.error(error.code);
        console.log({ error });
        return;
      }
      toast.error("Error, please try again");
    } finally {
      setIsLoading(false);
    }
  }

  async function logout() {
    try {
      setIsLoading(true);
      await signOut(auth);
      setUser({});
      navigate("/account/login");
    } catch (error) {
      toast.error("Error!");
    } finally {
      setIsLoading(false);
    }
  }

  onAuthStateChanged(auth, (fireUser) => {
    if (fireUser) {
      setUser({
        email: fireUser.email || "",
        id: fireUser.uid,
      });
      navigate("/");
    } else {
      navigate("/account/login");
    }
    setIsLoading(false);
  });

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
