import { GiKnifeFork } from "react-icons/gi";
import { GiCheeseWedge } from "react-icons/gi";
import { GiSlicedBread } from "react-icons/gi";
import { GiTomato } from "react-icons/gi";
import { GiMeat } from "react-icons/gi";
import { GiLadle } from "react-icons/gi";
import { GiBeerBottle } from "react-icons/gi";
import "./menu.style.css";
import {
  AppMealFive,
  AppMealFour,
  AppMealOne,
  AppMealSix,
  AppMealThree,
  AppMealTwo,
  SideMealFive,
  SideMealFour,
  SideMealOne,
  SideMealSix,
  SideMealThree,
  SideMealTwo,
} from "../../assets/images";

const Menu = () => {
  const app = [
    {
      id: 1,
      image: <AppMealOne className="menu-img" />,
      title: " Bavarian Pretzel",
      text: "Bavarian pretzel served with cheddar crispy bacon dip & homemade mustard",
      price: "$8.97",
    },
    {
      id: 2,
      image: <AppMealTwo className="menu-img" />,
      title: "Salmon Tartare",
      text: "Smoked salmon, avocado, chives shallots, capers, dill & chipotle mayo.",
      price: "$24.00",
    },
    {
      id: 3,
      image: <AppMealThree className="menu-img" />,
      title: "Sausage Sampler",
      text: "Samples of our three sausages: elk-cheddar-jalapeno, beer, veal bratwurst, potato salad sauerkraut & mustard.",
      price: "$18.00",
    },
    {
      id: 4,
      image: <AppMealFour className="menu-img" />,
      title: "Tete De Moine",
      text: "Shaved tete de moine cheese, evoo, roasted pepper & grilled fokaccia.",
      price: "$19.00",
    },

    {
      id: 5,
      image: <AppMealFive className="menu-img" />,
      title: "Wings",
      text: "Grilled red bird chicken wings tossed in homemade dry rub.",
      price: "$19.00",
    },

    {
      id: 6,
      image: <AppMealSix className="menu-img" />,
      title: "Pâté Board",
      text: "Cognac, port & fresh herbs duck liver pâté, sopressata picante, cornichons, olives, grilled ciabatta.",
      price: "$23.00",
    },
  ];

  const sides = [
    {
      id: 1,
      image: <SideMealOne className="menu-img" />,
      title: "Grilled Asparagus",
      price: "$12.00",
    },
    {
      id: 2,
      image: <SideMealTwo className="menu-img" />,
      title: "Potato Salad",
      price: "$12.00",
    },
    {
      id: 3,
      image: <SideMealThree className="menu-img" />,
      title: "Kasespatzle",
      price: "$12.00",
    },
    {
      id: 4,
      image: <SideMealFour className="menu-img" />,
      title: "French Fries",
      price: "$12.00",
    },
    {
      id: 5,
      image: <SideMealFive className="menu-img" />,
      title: "Sauerkraut",
      price: "$12.00",
    },
    {
      id: 6,
      image: <SideMealSix className="menu-img" />,
      title: "Mashed Potatoes",
      price: "$12.00",
    },
  ];

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

      <section className="appetizers-section">
        <div className="appetizers-section-holder section-holder">
          <h2 className="appetizers-title">Appetizers</h2>
          <div className="meal-holder">
            {app.map((meal) => (
              <div className="app-meal-cart meal-cart" key={meal.id}>
                {meal.image}
                <div className="app-meal-title-holder">
                  {" "}
                  <h3 className="app-meal-title meal-title">{meal.title}</h3>
                  <span className="app-meal-price meal-price">
                    {meal.price}
                  </span>
                </div>

                <p className="app-meal-text meal-text">{meal.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sides-section">
        <div className="sides-section-holder section-holder">
          <h2 className="sides-title">Sides</h2>
          <div className="meal-holder">
            {sides.map((meal) => (
              <div className="app-meal-cart meal-cart" key={meal.id}>
                {meal.image}
                <div className="app-meal-title-holder">
                  {" "}
                  <h3 className="app-meal-title meal-title">{meal.title}</h3>
                  <span className="app-meal-price meal-price">
                    {meal.price}
                  </span>
                </div>

                <p className="app-meal-text meal-text">{meal.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
