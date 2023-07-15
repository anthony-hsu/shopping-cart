import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HeaderLayout from "./layouts/HeaderLayout";
import Home from "./components/Home";
import Shop from "./components/Shop";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HeaderLayout/>}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />
}

export default App;
