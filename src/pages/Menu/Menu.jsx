import { GiKnifeFork } from "react-icons/gi";
import { GiCheeseWedge } from "react-icons/gi";
import { GiSlicedBread } from "react-icons/gi";
import { GiTomato } from "react-icons/gi";
import { GiMeat } from "react-icons/gi";
import { GiLadle } from "react-icons/gi";
import { GiBeerBottle } from "react-icons/gi";
import "./menu.style.css";

const Menu = () => {
  return (
    <main>
      <section className="menu-page-hero-section">
        <div className="menu-hero-section-holder section-holder">
          <h1 className="menu-hero-section-title">Authentic alpine flavors</h1>
          <p className="menu-hero-section-text">
            Discover our diverse menu featuring traditional{" "}
            <span>austrian-bavarian </span>
            dishes crafted with love and authenticity.
          </p>
          <div className="menu-food-nav">
            <div className="menu-icon-holder">
              <GiKnifeFork className="menu-icon" />
              <span className="label">All</span>
            </div>
            <div className="menu-icon-holder">
              <GiCheeseWedge className="menu-icon" />
              <span className="label">Appetizers</span>
            </div>
            <div className="menu-icon-holder">
              <GiSlicedBread className="menu-icon" />
              <span className="label">Sides</span>
            </div>
            <div className="menu-icon-holder">
              <GiTomato className="menu-icon" />
              <span className="label">Salads</span>
            </div>
            <div className="menu-icon-holder">
              <GiMeat className="menu-icon" />
              <span className="label">Main</span>
            </div>
            <div className="menu-icon-holder">
              <GiLadle className="menu-icon" />
              <span className="label">Soups</span>
            </div>
            <div className="menu-icon-holder">
              <GiBeerBottle className="menu-icon" />
              <div className="label">Drinks</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
