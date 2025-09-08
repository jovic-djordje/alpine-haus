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
  DrinkFive,
  DrinkFour,
  DrinkOne,
  DrinkThree,
  DrinkTwo,
  MainMealFive,
  MainMealFour,
  MainMealOne,
  MainMealThree,
  MainMealTwo,
  SaladFour,
  SaladOne,
  SaladThree,
  SaladTwo,
  SideMealFive,
  SideMealFour,
  SideMealOne,
  SideMealSix,
  SideMealThree,
  SideMealTwo,
} from "../../assets/images";
import { useState } from "react";

const Menu = () => {
  const [filter, setFilter] = useState("all");

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

  const salads = [
    {
      id: 1,
      image: <SaladOne className="menu-img" />,
      title: "Caesar Salad",
      text: "Romaine & homemade dressing.",
      price: "$18.00",
    },
    {
      id: 2,
      image: <SaladTwo className="menu-img" />,
      title: "Mixed Greens",
      text: "EVOO & balsamic vinaigrette.",
      price: "$16.00",
    },
    {
      id: 3,
      image: <SaladThree className="menu-img" />,
      title: "Goat Cheese",
      text: "Walnut crusted goat cheese mixed greens, pomegranate arils, EVOO & balsamic vinaigrette.",
      price: "$24.00",
    },
    {
      id: 4,
      image: <SaladFour className="menu-img" />,
      title: "Golden Beet & Pear",
      text: "Golden beet, red wine poached pears, toasted pecans, micro greens, little gem lettuce, EVOO & chardonnay vinaigrette.",
      price: "$24.00",
    },
  ];

  const main = [
    {
      id: 1,
      image: <MainMealOne className="menu-img" />,
      title: "Wiener Schnitzel",
      text: " Mashed potatoes & lingonberry sauce.",
      price: "$27.00",
    },
    {
      id: 2,
      image: <MainMealTwo className="menu-img" />,
      title: "Jager Schnitzel",
      text: "Tenderized pan-seared niman ranch pork loin topped with jaeger sauce & kasespatzle.",
      price: "$38.00",
    },
    {
      id: 3,
      image: <MainMealThree className="menu-img" />,
      title: "Oktoberfest Chicken",
      text: "Bourbon-maple glazed half a chicken & truffle fries.",
      price: "$34.00",
    },
    {
      id: 4,
      image: <MainMealFour className="menu-img" />,
      title: "Veal Jager Goulash",
      text: "Veal shank prepared by old Vienna hunter recipe served with spaetzle.",
      price: "$45.00",
    },
    {
      id: 5,
      image: <MainMealFive className="menu-img" />,
      title: "Mahi Mahi",
      text: "Pan seared fillet, blanched asparagus, toasted heirloom tomatoes & bureau blanc sauce.",
      price: "$34.00",
    },
  ];

  const drinks = [
    {
      id: 1,
      image: <DrinkOne className="menu-img" />,
      title: "Blueberry Lemonade",
      price: "$15.00",
    },

    {
      id: 2,
      image: <DrinkTwo className="menu-img" />,
      title: "Cranberry Paloma",
      price: "$19.00",
    },

    {
      id: 3,
      image: <DrinkThree className="menu-img" />,
      title: "Highland Espresso Martin",
      price: "$17.00",
    },

    {
      id: 4,
      image: <DrinkFour className="menu-img" />,
      title: "Watermelon Mojito",
      price: "$16.00",
    },

    {
      id: 5,
      image: <DrinkFive className="menu-img" />,
      title: "Woody Old Fashioned",
      price: "$19.00",
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
            <div className="menu-icon-holder" onClick={() => setFilter("all")}>
              <GiKnifeFork className="menu-icon" />
              <span className="label">All</span>
            </div>
            <div className="menu-icon-holder" onClick={() => setFilter("app")}>
              <GiCheeseWedge className="menu-icon" />
              <span className="label">Appetizers</span>
            </div>
            <div
              className="menu-icon-holder"
              onClick={() => setFilter("sides")}
            >
              <GiSlicedBread className="menu-icon" />
              <span className="label">Sides</span>
            </div>
            <div
              className="menu-icon-holder"
              onClick={() => setFilter("salads")}
            >
              <GiTomato className="menu-icon" />
              <span className="label">Salads</span>
            </div>
            <div className="menu-icon-holder" onClick={() => setFilter("main")}>
              <GiMeat className="menu-icon" />
              <span className="label">Main</span>
            </div>
            {/*   <div className="menu-icon-holder">
              <GiLadle className="menu-icon" />
              <span className="label">Soups</span>
            </div> */}
            <div
              className="menu-icon-holder"
              onClick={() => setFilter("drink")}
            >
              <GiBeerBottle className="menu-icon" />
              <div className="label">Drinks</div>
            </div>
          </div>
        </div>
      </section>

      {(filter === "all" || filter === "app") && (
        <section className="appetizers-section meal-sections">
          <div className="appetizers-section-holder section-holder meal-sections-holder">
            <h2 className="appetizers-title meal-section-title">Appetizers</h2>
            <div className="meal-holder">
              {app.map((meal) => (
                <div className="app-meal-cart meal-cart" key={meal.id}>
                  <span className="app-meal-price meal-price">
                    {meal.price}
                  </span>
                  {meal.image}
                  <h3 className="app-meal-title meal-title">{meal.title}</h3>
                  <p className="app-meal-text meal-text">{meal.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {(filter === "all" || filter === "sides") && (
        <section className="sides-section meal-sections">
          <div className="sides-section-holder section-holder meal-sections-holder">
            <h2 className="sides-title meal-section-title">Sides</h2>
            <div className="meal-holder">
              {sides.map((meal) => (
                <div className="app-meal-cart meal-cart" key={meal.id}>
                  <span className="app-meal-price meal-price">
                    {meal.price}
                  </span>
                  {meal.image}

                  <h3 className="app-meal-title meal-title">{meal.title}</h3>

                  <p className="app-meal-text meal-text">{meal.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {(filter === "all" || filter === "salads") && (
        <section className="salads-section meal-sections">
          <div className="salads-section-holder section-holder meal-sections-holder">
            <h2 className="salads-title meal-section-title">Salads</h2>
            <div className="meal-holder">
              {salads.map((meal) => (
                <div className="app-meal-cart meal-cart" key={meal.id}>
                  <span className="app-meal-price meal-price">
                    {meal.price}
                  </span>
                  {meal.image}

                  <h3 className="app-meal-title meal-title">{meal.title}</h3>

                  <p className="app-meal-text meal-text">{meal.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {(filter === "all" || filter === "main") && (
        <section className="main-course-section meal-sections">
          <div className="main-course-section-holder section-holder meal-sections-holder">
            <h2 className="main-course-title meal-section-title">
              Main Course
            </h2>
            <div className="meal-holder">
              {main.map((meal) => (
                <div className="app-meal-cart meal-cart" key={meal.id}>
                  <span className="app-meal-price meal-price">
                    {meal.price}
                  </span>
                  {meal.image}

                  <h3 className="app-meal-title meal-title">{meal.title}</h3>

                  <p className="app-meal-text meal-text">{meal.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {(filter === "all" || filter === "drink") && (
        <section className="drink-section meal-sections">
          <div className="drink-section-holder section-holder meal-sections-holder">
            <h2 className="drink-title meal-section-title">Drinks</h2>
            <div className="meal-holder">
              {drinks.map((meal) => (
                <div className="app-meal-cart meal-cart" key={meal.id}>
                  <span className="app-meal-price meal-price">
                    {meal.price}
                  </span>
                  {meal.image}

                  <h3 className="app-meal-title meal-title">{meal.title}</h3>

                  <p className="app-meal-text meal-text">{meal.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Menu;
