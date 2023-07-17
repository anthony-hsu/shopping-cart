import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HeaderLayout from "./layouts/HeaderLayout";
import Home from "./components/Home";
import Shop from "./components/Shop";
import { useState } from "react";

function App() {
  const pageTitle = "Fruits Basket";
  const [cartItems, setCartItems] = useState(0);
  return (
    <RouterProvider
      router={createHashRouter(
        createRoutesFromElements(
          <Route
            path="/"
            element={<HeaderLayout cartItems={cartItems} title={pageTitle} />}
          >
            <Route index element={<Home title={pageTitle} />} />
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
