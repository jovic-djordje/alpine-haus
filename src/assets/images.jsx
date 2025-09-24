import logo from "./logo.png";
import heroImage from "./hero-image.png";
import aboutImage from "./about-section-image.png";
import featuresFirstDish from "./dish-one.png";
import featuresSecondDish from "./dish-two.png";
import featuresThirdDish from "./dish-three.png";
import restaurantInterior from "./about-page-about-section-img.jpg";
import appMealOne from "./appetizer-meal-one.png";
import appMealTwo from "./appetizer-meal-two.png";
import appMealThree from "./appetizer-meal-three.png";
import appMealFour from "./appetizer-meal-four.png";
import appMealFive from "./appetizer-meal-five.png";
import appMealSix from "./appetizer-meal-six.png";
import appMealSeven from "./appetizer-meal-seven.png";
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
import saladFive from "./salad-five.png";
import mainMealOne from "./main-meal-one.png";
import mainMealTwo from "./main-meal-two.png";
import mainMealThree from "./main-meal-three.png";
import mainMealFour from "./main-meal-four.png";
import mainMealFive from "./main-meal-five.png";
import mainMealSix from "./main-meal-six.png";
import mainMealSeven from "./main-meal-seven.png";
import mainMealEight from "./main-meal-eight.png";
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
    <img src={featuresSecondDish} alt="photo of Wings" className={className} />
  );
};

const FeaturesThirdDish = ({ className }) => {
  return (
    <img
      src={featuresThirdDish}
      alt="photo of Bavarian pretzel"
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
  return <img src={appMealThree} alt="Deviled Eggs" className={className} />;
};

const AppMealFour = ({ className }) => {
  return <img src={appMealFour} alt="Wings" className={className} />;
};

const AppMealFive = ({ className }) => {
  return <img src={appMealFive} alt="Calamari" className={className} />;
};

const AppMealSix = ({ className }) => {
  return <img src={appMealSix} alt="Shrimp Scampi" className={className} />;
};

const AppMealSeven = ({ className }) => {
  return <img src={appMealSeven} alt="Seafood Salad " className={className} />;
};

const SideMealOne = ({ className }) => {
  return <img src={sideMealOne} alt="Crushed Potato" className={className} />;
};

const SideMealTwo = ({ className }) => {
  return <img src={sideMealTwo} alt="Mix Veggies" className={className} />;
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
  return (
    <img src={saladTwo} alt="Signature Alpine Salad" className={className} />
  );
};

const SaladThree = ({ className }) => {
  return (
    <img src={saladThree} alt="Wild Arugula Salad" className={className} />
  );
};

const SaladFour = ({ className }) => {
  return <img src={saladFour} alt="Greek Salad" className={className} />;
};

const SaladFive = ({ className }) => {
  return <img src={saladFive} alt="Caprese Salad" className={className} />;
};

const MainMealOne = ({ className }) => {
  return <img src={mainMealOne} alt="Wiener Schnitzel" className={className} />;
};

const MainMealTwo = ({ className }) => {
  return <img src={mainMealTwo} alt="Jager Schnitzel" className={className} />;
};

const MainMealThree = ({ className }) => {
  return (
    <img src={mainMealThree} alt="Sausage Sampler" className={className} />
  );
};

const MainMealFour = ({ className }) => {
  return <img src={mainMealFour} alt="Alpine Burger" className={className} />;
};

const MainMealFive = ({ className }) => {
  return (
    <img
      src={mainMealFive}
      alt="Schweinshaxen- Pork Shank"
      className={className}
    />
  );
};

const MainMealSix = ({ className }) => {
  return <img src={mainMealSix} alt="12oz Ribeye" className={className} />;
};

const MainMealSeven = ({ className }) => {
  return (
    <img src={mainMealSeven} alt="Tenderloin Goulash" className={className} />
  );
};

const MainMealEight = ({ className }) => {
  return (
    <img src={mainMealEight} alt="Lobster Ravioli" className={className} />
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
  AppMealSeven,
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
  SaladFive,
  MainMealOne,
  MainMealTwo,
  MainMealThree,
  MainMealFour,
  MainMealFive,
  MainMealSix,
  MainMealSeven,
  MainMealEight,
  SpecialImg,
};
