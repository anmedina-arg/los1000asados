import About from "../about/about";
import { Logo } from "../logo/logo";
import { Fotos } from "../photos/fotos";
import "./navBar.css";

function NavBar() {
  return (
    <div className="nav_container">
      <h3>soy la navBar</h3>
      <Logo></Logo>
      <About />
      <Fotos></Fotos>
    </div>
  );
}

export default NavBar;
