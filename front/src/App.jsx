import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import ContextProvider from "./context/context";
import { ROOT } from "./router/router";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const rooter = createBrowserRouter(ROOT);
  return <>
    {/* <ContextProvider> */}
      <RouterProvider router={rooter} />
      {/* </ContextProvider> */}
  </>;
}

export default App;