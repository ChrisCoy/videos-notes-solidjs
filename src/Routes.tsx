import { Router, memoryIntegration, Route, Routes as AllRoutes } from "@solidjs/router";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AppLayout } from "./layouts/AppLayout";
import { LoginLayout } from "./layouts/LoginLayout";
import { CreateNoteView } from "./views/CreateNoteView";
import { DetailsNoteView } from "./views/DetailsNoteView";
import { EditNoteView } from "./views/EditNoteView";
import { ListNotesView } from "./views/ListNotesView";
import { LoginView } from "./views/LoginView";
import { RegisterView } from "./views/RegisterView";
import { SettingsView } from "./views/SettingsView";

export default function Routes() {
  return (
    <AllRoutes>
      <Route path={"/account"} element={<LoginLayout />}>
        <Route path={"/login"} element={<LoginView />} />
        <Route path={"/register"} element={<RegisterView />} />
      </Route>
      <Route path={"/"} element={<AppLayout />}>
        {/* CHANGE ALL THIS TO PROTECTED ROUTER */}
        <Route path={"/"} element={<ListNotesView />} />
        <Route path={"/create"} element={<CreateNoteView />} />
        <Route path={"/edit"} element={<EditNoteView />} />
        <Route path={"/:id"} element={<DetailsNoteView />} />
        <Route path={"/settings"} element={<SettingsView />} />
      </Route>
    </AllRoutes>
  );
}
