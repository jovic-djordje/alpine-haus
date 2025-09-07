import logo from "./logo.png";
import heroImage from "./hero-image.png";
import aboutImage from "./about-section-image.png";
import featuresFirstDish from "./dish-one.png";
import featuresSecondDish from "./dish-two.png";
import featuresThirdDish from "./dish-three.png";
import restaurantInterior from "./about-page-about-section-img.png";
import appMealOne from "./appetizer-meal-one.png";
import appMealTwo from "./appetizer-meal-two.png";
import appMealThree from "./appetizer-meal-three.png";
import appMealFour from "./appetizer-meal-four.png";
import appMealFive from "./appetizer-meal-five.png";
import appMealSix from "./appetizer-meal-six.png";
import sideMealOne from "./side-meal-one.png";
import sideMealTwo from "./side-meal-two.png";
import sideMealThree from "./side-meal-three.png";
import sideMealFour from "./side-meal-four.png";
import sideMealFive from "./side-meal-five.png";
import sideMealSix from "./side-meal-six.png";
import saladOne from "./salad-one.png";
import saladTwo from "./salad-two.png";
import saladThree from "./salad-three.png";
import saladFour from "./salad-four.png";
import mainMealOne from "./main-meal-one.png";
import mainMealTwo from "./main-meal-two.png";
import mainMealThree from "./main-meal-three.png";
import mainMealFour from "./main-meal-four.png";
import mainMealFive from "./main-meal-five.png";
import drinkOne from "./drink-one.png";
import drinkTwo from "./drink-two.png";
import drinkThree from "./drink-three.png";
import drinkFour from "./drink-four.png";
import drinkFive from "./drink-five.png";
import specialImg from "./special-img.png";

const Logo = ({ className }) => {
  return <img src={logo} alt="alpine haus logo" className={className} />;
};

const HeroImage = ({ className }) => {
  return (
    <img
      src={heroImage}
      alt="Fresh Austrian Ingredients"
      className={className}
    />
  );
};

const AboutImage = ({ className }) => {
  return <img src={aboutImage} alt="restaurant" className={className} />;
};

const FeaturesFirstDish = ({ className }) => {
  return (
    <img
      src={featuresFirstDish}
      alt="photo of Wiener Schnitzel"
      className={className}
    />
  );
};

const FeaturesSecondDish = ({ className }) => {
  return (
    <img
      src={featuresSecondDish}
      alt="photo of Sauerbraten"
      className={className}
    />
  );
};

const FeaturesThirdDish = ({ className }) => {
  return (
    <img
      src={featuresThirdDish}
      alt="photo of Apfelstrudel"
      className={className}
    />
  );
};

const RestaurantInterior = ({ className }) => {
  return (
    <img
      src={restaurantInterior}
      alt="restaurant interior"
      className={className}
    />
  );
};

const AppMealOne = ({ className }) => {
  return <img src={appMealOne} alt="Bavarian pretzel" className={className} />;
};

const AppMealTwo = ({ className }) => {
  return <img src={appMealTwo} alt="Salmon Tartare" className={className} />;
};

const AppMealThree = ({ className }) => {
  return <img src={appMealThree} alt="Sausage Sampler" className={className} />;
};

const AppMealFour = ({ className }) => {
  return <img src={appMealFour} alt="Tete De Moine" className={className} />;
};

const AppMealFive = ({ className }) => {
  return <img src={appMealFive} alt="Wings" className={className} />;
};

const AppMealSix = ({ className }) => {
  return <img src={appMealSix} alt="Pâté Board" className={className} />;
};

const SideMealOne = ({ className }) => {
  return (
    <img src={sideMealOne} alt="Grilled Asparagus" className={className} />
  );
};

const SideMealTwo = ({ className }) => {
  return <img src={sideMealTwo} alt="Potato Salad" className={className} />;
};

const SideMealThree = ({ className }) => {
  return <img src={sideMealThree} alt="Kasespatzle" className={className} />;
};

const SideMealFour = ({ className }) => {
  return <img src={sideMealFour} alt="French Fries" className={className} />;
};

const SideMealFive = ({ className }) => {
  return <img src={sideMealFive} alt="Sauerkraut" className={className} />;
};

const SideMealSix = ({ className }) => {
  return <img src={sideMealSix} alt="Mashed Potatoes" className={className} />;
};

const SaladOne = ({ className }) => {
  return <img src={saladOne} alt="Caesar Salad" className={className} />;
};

const SaladTwo = ({ className }) => {
  return <img src={saladTwo} alt="Mixed Greens" className={className} />;
};

const SaladThree = ({ className }) => {
  return <img src={saladThree} alt="Goat Cheese" className={className} />;
};

const SaladFour = ({ className }) => {
  return <img src={saladFour} alt="Golden Beet & Pear" className={className} />;
};

const MainMealOne = ({ className }) => {
  return <img src={mainMealOne} alt="Wiener Schnitzel" className={className} />;
};

const MainMealTwo = ({ className }) => {
  return <img src={mainMealTwo} alt="Jager Schnitzel" className={className} />;
};

const MainMealThree = ({ className }) => {
  return (
    <img src={mainMealThree} alt="Oktoberfest Chicken" className={className} />
  );
};

const MainMealFour = ({ className }) => {
  return (
    <img src={mainMealFour} alt="Veal Jager Goulash" className={className} />
  );
};

const MainMealFive = ({ className }) => {
  return <img src={mainMealFive} alt="Mahi Mahi" className={className} />;
};

const DrinkOne = ({ className }) => {
  return (
    <img
      src={drinkOne}
      alt="Blueberry Lemonade Cocktail"
      className={className}
    />
  );
};

const DrinkTwo = ({ className }) => {
  return (
    <img src={drinkTwo} alt="Cranberry Paloma Cocktail" className={className} />
  );
};

const DrinkThree = ({ className }) => {
  return (
    <img
      src={drinkThree}
      alt=" Highland Espresso Martin Cocktail"
      className={className}
    />
  );
};

const DrinkFour = ({ className }) => {
  return (
    <img
      src={drinkFour}
      alt="Watermelon Mojito Cocktail"
      className={className}
    />
  );
};

const DrinkFive = ({ className }) => {
  return (
    <img
      src={drinkFive}
      alt="Woody Old Fashioned Cocktail"
      className={className}
    />
  );
};

const SpecialImg = ({ className }) => {
  return <img src={specialImg} alt="white plate" className={className} />;
};

export {
  Logo,
  HeroImage,
  AboutImage,
  FeaturesFirstDish,
  FeaturesSecondDish,
  FeaturesThirdDish,
  RestaurantInterior,
  AppMealOne,
  AppMealTwo,
  AppMealThree,
  AppMealFour,
  AppMealFive,
  AppMealSix,
  SideMealOne,
  SideMealTwo,
  SideMealThree,
  SideMealFour,
  SideMealFive,
  SideMealSix,
  SaladOne,
  SaladTwo,
  SaladThree,
  SaladFour,
  MainMealOne,
  MainMealTwo,
  MainMealThree,
  MainMealFour,
  MainMealFive,
  DrinkOne,
  DrinkTwo,
  DrinkThree,
  DrinkFour,
  DrinkFive,
  SpecialImg,
};
