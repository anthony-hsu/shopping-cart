import { NavLink, Outlet } from "react-router-dom";

function HeaderLayout() {
  return (
    <div className="header-layout">
      <h1>Shopping Cart</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="shop">Shop</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default HeaderLayout;
