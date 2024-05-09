import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <ul>
          <li style={{textAlign:'left'}}>
            <Link to="/home" >Home</Link>
          </li>
          <li style={{textAlign:'left'}}>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li style={{textAlign:'left'}}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
    </>
  )
};

export default Layout;