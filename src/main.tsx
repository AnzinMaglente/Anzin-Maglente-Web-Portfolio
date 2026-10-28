import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import store from "./redux/store.tsx";
import { Provider } from "react-redux";

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId={CLIENT_ID ?? ""}>
      <App />
    </GoogleOAuthProvider>
  </Provider>
);
