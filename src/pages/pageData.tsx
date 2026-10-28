import { type routerType } from "../types/router.types";
import Login from "./login";
import Signin from "./signIn";
import Home from "./home";
import Admin from "./admin";
import ArticleEditor from "./articleEditor";
import Profile from "./profile";
import ProtectedRoutes from "../components/partials/ProtectedRoutes";
import Article from "./article";

const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "home",
  },
  {
    path: "login",
    element: (
      <ProtectedRoutes>
        <Login />
      </ProtectedRoutes>
    ),
    title: "Login",
  },
  {
    path: "signin",
    element: (
      <ProtectedRoutes>
        <Signin />
      </ProtectedRoutes>
    ),
    title: "Signin",
  },
  {
    path: "admin",
    element: <Admin />,
    title: "Admin",
  },
  {
    path: "articleEditor",
    element: <ArticleEditor />,
    title: "ArticleEditor",
  },
  {
    path: "articleEditor/:id",
    element: <ArticleEditor />,
    title: "ArticleEditor",
  },
  {
    path: "article/:id",
    element: <Article />,
    title: "Article",
  },
  {
    path: "profile",
    element: <Profile />,
    title: "Profile",
  },
];

export default pagesData;
