import { Logo } from "../../assets/images";
import "./navigation.style.css";

const Navigation = () => {
  return (
    <header>
      <div className="header-holder">
        <Logo className="logo" />
      </div>
    </header>
  );
};

export default Navigation;
