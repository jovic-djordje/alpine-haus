import { GiKnifeFork } from "react-icons/gi";
import { GiCheeseWedge } from "react-icons/gi";
import { GiSlicedBread } from "react-icons/gi";
import { GiTomato } from "react-icons/gi";
import { GiMeat } from "react-icons/gi";
import { GiLadle } from "react-icons/gi";
import { GiWineBottle } from "react-icons/gi";
import "./menu.style.css";
import {
  AppMealFive,
  AppMealFour,
  AppMealOne,
  AppMealSeven,
  AppMealSix,
  AppMealThree,
  AppMealTwo,
  MainMealEight,
  MainMealFive,
  MainMealFour,
  MainMealOne,
  MainMealSeven,
  MainMealSix,
  MainMealThree,
  MainMealTwo,
  SaladFive,
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
  const [showAllWhite, setShowAllWhite] = useState(false);
  const [showAllRed, setShowAllRed] = useState(false);

  const app = [
    {
      id: 1,
      image: <AppMealOne className="menu-img" />,
      title: " Bavarian Pretzel",
      text: "A hand twisted,golden-brown pretzel baked to perfection,sprinkled with flaky sea salt and served with beer cheese and whole-grain mustard",
      price: "$14.00",
    },
    {
      id: 2,
      image: <AppMealTwo className="menu-img" />,
      title: "Salmon Tartare",
      text: "Smoked hand chopped Atlantic salmon tossed with avocado,chives,shallots,capers,dill and chipotle mayo",
      price: "$19.00",
    },
    {
      id: 3,
      image: <AppMealThree className="menu-img" />,
      title: "Deviled Eggs",
      text: "Creamy, seasoned yolk filling in farm-fresh eggs finished with a sprinkle of smoked paprika and crispy prosciutto",
      price: "$16.00",
    },
    {
      id: 4,
      image: <AppMealFour className="menu-img" />,
      title: "Wings",
      text: "Slow-smoked and finished over open flame for a bold fire-kissed flavor. Served with your choice of dry-rub, buffalo or bbq sauce, with crisp celery and cool ranch ",
      price: "$16.00",
    },

    {
      id: 5,
      image: <AppMealFive className="menu-img" />,
      title: "Calamari",
      text: "Tender calamari, flash-fried to a delicate crisp, paired with a house-made roasted red pepper aioli for a smoky, zesty finish",
      price: "$21.00",
    },

    {
      id: 6,
      image: <AppMealSix className="menu-img" />,
      title: "Shrimp Scampi",
      text: "Jumbo shrimp, pan-seared with garlic, white wine, and lemon butter, finished with fresh herbs and touch of chili. Served with French baguette",
      price: "$23.00",
    },

    {
      id: 7,
      image: <AppMealSeven className="menu-img" />,
      title: "Seafood Salad",
      text: "Grilled tender shrimp, calamari and octopus tossed with baby arugula dressed in a light-herb vinaigrette",
      price: "$26.00",
    },
  ];

  const sides = [
    {
      id: 1,
      image: <SideMealOne className="menu-img" />,
      title: "Crushed Potato",
      price: "$9.00",
    },
    {
      id: 2,
      image: <SideMealTwo className="menu-img" />,
      title: "Mix Veggies",
      price: "$9.00",
    },
    {
      id: 3,
      image: <SideMealThree className="menu-img" />,
      title: "Kasespatzle",
      price: "$9.00",
    },
    {
      id: 4,
      image: <SideMealFour className="menu-img" />,
      title: "French Fries",
      price: "$9.00",
    },
    {
      id: 5,
      image: <SideMealFive className="menu-img" />,
      title: "Sauerkraut",
      price: "$9.00",
    },
    {
      id: 6,
      image: <SideMealSix className="menu-img" />,
      title: "Mashed Potatoes",
      price: "$9.00",
    },
  ];

  const salads = [
    {
      id: 1,
      image: <SaladOne className="menu-img" />,
      title: "Caesar Salad",
      text: "Chilled romaine harts dressed in our house Caesar,topped with Parmigiana-Reggiano,herbed croutons and a touch of black pepper",
      price: "$15.00",
    },
    {
      id: 2,
      image: <SaladTwo className="menu-img" />,
      title: "Signature Alpine Salad",
      text: "A rustic mix of romaine,arugula,cherry tomatoes, cucumber and radish,finished with crumbled goat cheese and basil herb vinaigrette",
      price: "$16.00",
    },
    {
      id: 3,
      image: <SaladThree className="menu-img" />,
      title: "Wild Arugula Salad",
      text: "Chilled arugula with buffalo mozzarella,avocado,crispy prosciutto,dressed with olive oil and topped with smoked paprika",
      price: "$17.00",
    },
    {
      id: 4,
      image: <SaladFour className="menu-img" />,
      title: "Greek Salad",
      text: "Crisp romaine,vine-ripened tomatoes,cucumbers,red onion,Kalamata olives and feta,tossed with oregano and extra virgin olive oil",
      price: "$17.00",
    },
    {
      id: 5,
      image: <SaladFive className="menu-img" />,
      title: "Caprese Salad",
      text: "Sliced vine-ripened tomatoes layered with creamy fresh mozzarella and fragrant basil leaves,drizzled with extra virgin olive oil and a touch of balsamic glaze",
      price: "$16.00",
    },
  ];

  const main = [
    {
      id: 1,
      image: <MainMealOne className="menu-img" />,
      title: "Wiener Schnitzel",
      text: "Golden-brown breaded pork or chicken cutlet,served with your choice of mushed potato or potato salad,lingonberry jam and a squeeze of lemon for a true Alpine favorite",
      price: "$28.00",
    },
    {
      id: 2,
      image: <MainMealTwo className="menu-img" />,
      title: "Jager Schnitzel",
      text: "Grilled pork cutlet topped with a hearty mushroom and onion hunter's sauce,served with spaetzle or mashed potatoes",
      price: "$29.00",
    },
    {
      id: 3,
      image: <MainMealThree className="menu-img" />,
      title: "Sausage Sampler",
      text: "A trio of traditional sausages with tangy sauerkraut,potato salad,pickles and spicy mustard",
      price: "$27.00",
    },
    {
      id: 4,
      image: <MainMealFour className="menu-img" />,
      title: "Alpine Burger",
      text: "A mountain-sized burger stacked with Gruyere,sauted mushrooms,arugula on a butter brioche",
      price: "$19.00",
    },
    {
      id: 5,
      image: <MainMealFive className="menu-img" />,
      title: "Schweinshaxen-Pork Shank",
      text: "A Bavarian classic: slow roasted pork shank with crispy skin,tender meat and rich pan gravy,served with sauerkraut and mashed potatoes",
      price: "$33.00",
    },
    {
      id: 6,
      image: <MainMealSix className="menu-img" />,
      title: "12oz Ribeye",
      text: "Hand-cut, grilled to perfection for a tender,juicy bite with rich marbling and bold flavor.Served with your choice of one side",
      price: "$38.00",
    },
    {
      id: 7,
      image: <MainMealSeven className="menu-img" />,
      title: "Tenderloin Goulash",
      text: "A rich and comforting Hungarian-style stew made with tender cuts of beef tenderloin,slowly simmered with paprika,onions, tomatoes and savory spices.Served with buttered spaetzle,this hearty classic delivers deep,warming flavors in every bite",
      price: "$29.00",
    },
    {
      id: 8,
      image: <MainMealEight className="menu-img" />,
      title: "Lobster Ravioli",
      text: "Delicate pasta pillows filled with tender lobster,served in velvety goat cheese creamsauce.Finished with a touch of fresh herbs and hint of lemon for a perfectly balanced flavor",
      price: "$33.00",
    },
  ];

  const wine = [
    {
      id: 1,
      title: "Col Solivo Prosecco, Italy",
      price: "$10.00",
      type: "white",
    },

    {
      id: 2,
      title:
        "Pertico Vigneti delle Dolomiti Pinot Grigio Trentino, Alto Adige, Italy",
      price: "$11.00",
      type: "white",
    },

    {
      id: 3,
      title: "Domaine Magellan 'Fruit Défendu' Rose, Provance, France",
      price: "$11.00",
      type: "white",
    },

    {
      id: 4,
      title: "Volker Von Donnenbaum Gruner Veltliner Burguneland, Austria",
      price: "$12.00",
      type: "white",
    },

    {
      id: 5,
      title: "Domaine Begude Sauvignon Blanc, Languedoc, France",
      price: "$13.00",
      type: "white",
    },
    {
      id: 6,
      title: "Verget 'Au Sud' Chardonay Luberon, France",
      price: "$14.00",
      type: "white",
    },
    {
      id: 7,
      title: "Finca El Origen, Malbec, Valle de Uco, Argentina",
      price: "$11.00",
      type: "red",
    },
    {
      id: 8,
      title: "Domaine Des Escaravailles, Cotes du Rhone, Rhone Valley, France",
      price: "$12.00",
      type: "red",
    },
    {
      id: 9,
      title: "High Valley Vineyard, Cabernet Sauvignon, California",
      price: "$13.00",
      type: "red",
    },
    {
      id: 10,
      title: "Row 504 Cellars, Pinot Noir, Willamete Valley, Oregon",
      price: "$14.00",
      type: "red",
    },
    {
      id: 11,
      title: "Berlucchi Franciacorta Extra Brut, Italy",
      price: "$52.00",
      type: "whiteBtl",
    },
    {
      id: 12,
      title: "Maillart Champagne Platine, Extra Brut,France",
      price: "$148.00",
      type: "whiteBtl",
    },
    {
      id: 13,
      title:
        "Cave Mont Blanc 'Vini Estremi' Prie Blanc, Valle D'Aosta, Italy '20",
      price: "$60.00",
      type: "whiteBtl",
    },
    {
      id: 14,
      title: "Giovanni Almondo Arnesi, Roero, Pidmont, Italy '24",
      price: "$63.00",
      type: "whiteBtl",
    },
    {
      id: 15,
      title: "Domaine Savary Chablis, France '23",
      price: "$72.00",
      type: "whiteBtl",
    },
    {
      id: 16,
      title: "Maritana La Riviere, Chardonnay, Russina River, California '20",
      price: "$75.00",
      type: "whiteBtl",
    },
    {
      id: 17,
      title: "Michelle Vattan 'Cuvee C-O' Loire Valley, France '23",
      price: "$91.00",
      type: "whiteBtl",
    },
    {
      id: 18,
      title: "Emmerich Knoll Gruner Veltliner Federspiel, Wachau, Austria '23",
      price: "$94.00",
      type: "whiteBtl",
    },
    {
      id: 19,
      title: "Danil Dampt Chablis 1er Beauroy, Burgundy, France '23",
      price: "$100.00",
      type: "whiteBtl",
    },
    {
      id: 20,
      title: "Borgo Del Tiglio, Collio Chardonnay '20",
      price: "$134.00",
      type: "whiteBtl",
    },
    {
      id: 21,
      title: "Joseph Druhin Meursalt, France '22",
      price: "$225.00",
      type: "whiteBtl",
    },
    {
      id: 22,
      title: "Luigi Voghera, Nebbiolo, Italy '22",
      price: "$58.00",
      type: "redBtl",
    },
    {
      id: 23,
      title: "Duca Di Salaparuta la Vico, Etna Rosso, Italy '21",
      price: "$59.00",
      type: "redBtl",
    },
    {
      id: 24,
      title:
        "Oliver Roten 'Alpiniste' Red Blend, Valais Valley, Switzerland '23",
      price: "$62.00",
      type: "redBtl",
    },
    {
      id: 25,
      title: "Foilard Beaujolais, France '22",
      price: "$60.00",
      type: "redBtl",
    },
    {
      id: 26,
      title: "Castello Di Radda, Chianti Classico Riserva, Italy '19",
      price: "$65.00",
      type: "redBtl",
    },
    {
      id: 27,
      title: "Chapelle de Potensac Medoc, Bordeaux, France '16",
      price: "$65.00",
      type: "redBtl",
    },
    {
      id: 28,
      title: "Ovis, Cabernet Sauvignon, California '19",
      price: "$75.00",
      type: "redBtl",
    },
    {
      id: 29,
      title: "Jolie Laide Syrah, North Coast, California '22",
      price: "$77.00",
      type: "redBtl",
    },
    {
      id: 30,
      title: "Caparsa Chianti Classico, Tuscany, Italy '21",
      price: "$78.00",
      type: "redBtl",
    },
    {
      id: 31,
      title: "Reeve 'Septime' Pinot Noir, Sonoma Coast, California '23",
      price: "$90.00",
      type: "redBtl",
    },
    {
      id: 32,
      title: "Domini Veneti Amarone Della Valpolicella, Italy '19",
      price: "$94.00",
      type: "redBtl",
    },
    {
      id: 33,
      title: "Argentiera Toscana, Villa Donoratico, Italy '22",
      price: "$104.00",
      type: "redBtl",
    },
    {
      id: 34,
      title: "Barale Fratelli Barolo, Piedmont, Italy '21",
      price: "$105.00",
      type: "redBtl",
    },
    {
      id: 35,
      title: "Castelli Martinozzi, Brunello Di Montalchino, Italy '19",
      price: "$120.00",
      type: "redBtl",
    },
    {
      id: 36,
      title: "Paitin, Barbaresco Serra Boella, Italy '21",
      price: "$105.00",
      type: "redBtl",
    },
    {
      id: 37,
      title: "Moueix Chateau Plince, Pomerol, France '19",
      price: "$145.00",
      type: "redBtl",
    },
    {
      id: 38,
      title: "Quintodecimo Terra D'eclano Aglianico, Campania, Italy '21",
      price: "$146.00",
      type: "redBtl",
    },
    {
      id: 39,
      title: "Inglenook, Cabernet Sauvignon, California '19",
      price: "$182.00",
      type: "redBtl",
    },
  ];

  // filter only red wine bottle
  const redBottleWines = wine.filter(
    (wineByGlass) => wineByGlass.type === "redBtl"
  );

  // filter only white wine bottle
  const whiteBottleWines = wine.filter(
    (wineByGlass) => wineByGlass.type === "whiteBtl"
  );

  // if showAll == false shwo only first 5
  const whiteWinesToDisplay = showAllWhite
    ? whiteBottleWines
    : whiteBottleWines.slice(0, 6);

  // if showAll == false shwo only first 5
  const redWinesToDisplay = showAllRed
    ? redBottleWines
    : redBottleWines.slice(0, 4);

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
            <div className="menu-icon-holder" onClick={() => setFilter("wine")}>
              <GiWineBottle className="menu-icon" />
              <div className="label">Wine</div>
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

      {(filter === "all" || filter === "wine") && (
        <section className="drink-section meal-sections">
          <div className="drink-section-holder section-holder meal-sections-holder">
            <h2 className="drink-title meal-section-title">Wine List</h2>
            <div className="wine-wrapper">
              {/* WINE BY THE GLASS */}
              <div className="wine-by-glass">
                <div className="white-wine-section">
                  <h3 className="wine-by-glas-title">
                    white wine | bubbles <span>by the glass</span>
                  </h3>
                  {wine
                    .filter((wineByGlass) => wineByGlass.type === "white")
                    .map((glass) => (
                      <div className="wine-name-holder" key={glass.id}>
                        <p className="wine-name">{glass.title}</p>
                        <span className="wine-price">{glass.price}</span>
                      </div>
                    ))}
                </div>
                <div className="red-wine-section">
                  <h3 className="wine-by-glas-title">
                    red wine <span>by the glass</span>
                  </h3>
                  {wine
                    .filter((wineByGlass) => wineByGlass.type === "red")
                    .map((glass) => (
                      <div className="wine-name-holder" key={glass.id}>
                        <p className="wine-name">{glass.title}</p>
                        <span className="wine-price">{glass.price}</span>
                      </div>
                    ))}
                </div>
              </div>

              {/* WINE BY THE BOTTLE */}
              <div className="wine-by-glass wine-by-bottle">
                <div className="white-wine-section">
                  <h3 className="wine-by-glas-title wine-by-bottle-title">
                    white wine | bubbles <span>by the bottle</span>
                  </h3>
                  {whiteWinesToDisplay
                    .filter((wineByGlass) => wineByGlass.type === "whiteBtl")
                    .map((glass) => (
                      <div className="wine-name-holder" key={glass.id}>
                        <p className="wine-name">{glass.title}</p>
                        <span className="wine-price">{glass.price}</span>
                      </div>
                    ))}
                  <button
                    onClick={() => setShowAllWhite(!showAllWhite)}
                    className="wine-list-btn"
                  >
                    {showAllWhite ? "View Less" : "View All"}
                  </button>
                </div>
                <div className="red-wine-section">
                  <h3 className="wine-by-glas-title wine-by-bottle-title">
                    red wine <span>by the bottle</span>
                  </h3>
                  {redWinesToDisplay
                    .filter((wineByGlass) => wineByGlass.type === "redBtl")
                    .map((glass) => (
                      <div className="wine-name-holder" key={glass.id}>
                        <p className="wine-name">{glass.title}</p>
                        <span className="wine-price">{glass.price}</span>
                      </div>
                    ))}
                  <button
                    onClick={() => setShowAllRed(!showAllRed)}
                    className="wine-list-btn"
                  >
                    {showAllRed ? "View Less" : "View All"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="menu-disclaimer">
        <div className="menu-disclaimer-holder section-holder">
          <p>
            Images are for presentation purposes only. Actual dishes may vary in
            appearance.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Menu;
