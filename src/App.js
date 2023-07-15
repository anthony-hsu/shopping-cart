import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HeaderLayout from "./layouts/HeaderLayout";
import Home from "./components/Home";
import Shop from "./components/Shop";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState(0);
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<HeaderLayout cartItems={cartItems} />}>
            <Route index element={<Home />} />
            <Route
              path="shop"
              element={
                <Shop cartItems={cartItems} setCartItems={setCartItems} />
              }
            />
          </Route>
        )
      )}
    />
  );
}

export default App;
