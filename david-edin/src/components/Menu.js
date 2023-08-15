import { Link, Outlet } from "react-router-dom";


const Menu = () => {
  return (
    <>
      <div className="menu">
        <Link className="element border" to="/about">About</Link>
    
        <Link className="element border" to="/links">Links</Link>
         
        <Link className="element border" to="/">*</Link>
      </div>

      <div className="page">
        <Outlet />
      </div>
    </>
  )
};

export default Menu;
