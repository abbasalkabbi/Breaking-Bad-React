import { Outlet,NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
             <NavLink
             to="/"
             className={({isActive})=>(isActive?'nav-link active':'nav-link ')}
             >
             Home
             </NavLink>
          </li>
          <li className="nav-item">
             <NavLink 
             to='characters'
             className={({isActive})=>(isActive?'nav-link active':'nav-link ')}
             >
               Characters
             </NavLink>
          </li>
         
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default  Layout;