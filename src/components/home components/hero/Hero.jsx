import { book, doc, dart, hero, hero2 } from "../../../pages";
import "./Hero.scss";

const Hero = () => {
  console.log(window.innerWidth);
  return (
    <section className="sw hero">
      <h1 className="hero-content">
        Your
        <img src={book} alt="book" />
        wiki,
        <img src={doc} alt="doc" />
        docs, & <img src={dart} alt="dart" className="dart" />
        projects. Together.
      </h1>
      <h4>
        Notion is the connected workspace where better, faster work happens.
      </h4>
      <button>Get Notion Free </button>
      <div className="hero-images">
        <img src={hero} alt="" className="hero1" />
        <img src={hero2} alt="" className="hero2" />
      </div>
    </section>
  );
};

export default Hero;
