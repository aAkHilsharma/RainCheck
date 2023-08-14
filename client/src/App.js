import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Toaster />
      <Home />
    </Fragment>
  );
}

export default App;
