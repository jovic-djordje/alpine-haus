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
};
