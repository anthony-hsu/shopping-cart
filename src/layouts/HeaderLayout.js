import { NavLink, Outlet } from "react-router-dom";

function HeaderLayout(props) {
  const { cartItems, title } = props;
  return (
    <>
      <div className="header-layout">
        <h1 className="nav-title">{title}</h1>
        <nav className="nav-pages">
          <NavLink to="/">Home</NavLink>
          <NavLink to="shop">Shop</NavLink>
        </nav>
        <h3 className="nav-cart">Cart: {cartItems}</h3>
      </div>
      <Outlet />
    </>
  );
}

export default HeaderLayout;
