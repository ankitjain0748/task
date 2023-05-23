//import { useContext } from "react";
import { Link } from "react-router-dom";
//import { Contextapi } from "./Contextapi";

function Header() {
//const [loginname]=useContext(Contextapi)
    return ( 
        <section id="header">
   <ul>
   <li>
      <h2>Welcome </h2>
    </li>
    <li>
        <Link to="/">Homre</Link>
    </li>
    <li>
        <Link to="/con">Contact</Link>
    </li>
    <li>
        <Link to="/about">About</Link>
    </li>

   </ul>

      </section>
     );
}

export default Header;