import { SpecialImg } from "../../assets/images";
import { Link } from "react-router-dom";
import "./specials.style.css";

const Specials = () => {
  return (
    <main>
      <section className="specials">
        <div className="specials-holder sections-holder">
          <div className="specials-header-holder">
            <h1>4</h1>
            <SpecialImg className="special-img rotating-plate" />
            <h1>4</h1>
          </div>
          <h2 className="special-text">
            Our chef is cooking up something special
          </h2>
          <Link to="/#top" className="special-link">
            <button className="special-btn hero-btn">Go Home</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Specials;
