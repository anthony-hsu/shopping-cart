import { NavLink, Outlet } from "react-router-dom";

function HeaderLayout(props) {
  const { cartItems } = props;
  return (
    <div className="header-layout">
      <h1>Shopping Cart</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="shop">Shop</NavLink>
      </nav>
      <h3>Cart: {cartItems}</h3>
      <Outlet />
    </div>
  );
}

export default HeaderLayout;
