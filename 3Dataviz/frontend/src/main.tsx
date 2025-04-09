import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import HomePage from "./pages/homePage/homePage";
import EnvironmentPage from "./pages/environmentPage/environmentPage";
import ErrorPage from "./pages/errorPage/errorPage";

// Sono valide solo le routes "/" e "/environment". Per tutti gli altri URL l'utente verrà reindirizzato a ErrorPage.
const ROUTER = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/environment",
    Component: EnvironmentPage,
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={ROUTER} />
);
