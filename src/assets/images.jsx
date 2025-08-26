import logo from "./logo.png";
import heroImage from "./hero-image.png";
import aboutImage from "./about-section-image.png";
import featuresFirstDish from "./dish-one.png";
import featuresSecondDish from "./dish-two.png";
import featuresThirdDish from "./dish-three.png";
import restaurantInterior from "./about-page-about-section-img.png";

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

export {
  Logo,
  HeroImage,
  AboutImage,
  FeaturesFirstDish,
  FeaturesSecondDish,
  FeaturesThirdDish,
  RestaurantInterior,
};
