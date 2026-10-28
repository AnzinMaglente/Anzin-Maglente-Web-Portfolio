import Router from "./pages/router";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loader from "./components/partials/Loader";
import { useSelector } from "react-redux";

function App() {
  const { loader } = useSelector((state: any) => state.loaderReducer);
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      {loader && <Loader />}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
