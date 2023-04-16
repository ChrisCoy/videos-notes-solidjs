import { Component, JSX, useContext } from "solid-js";
import { Route, Navigate } from "@solidjs/router";
import { useAuth } from "../../hooks/useAuth";

interface ProtectedRouteProps {
  path: string;
  element: JSX.Element;
}

const ProtectedRoute: Component<ProtectedRouteProps> = (props: ProtectedRouteProps) => {
  const { user } = useAuth();

  return (
    <Route
      {...props}
      path={props.path}
      element={() => {
        if (user?.id) return props.element;
        else return <Navigate href={"/"} />;
      }}
    />
  );
};

export { ProtectedRoute };
