import { book, doc, dart, hero, hero2, sidekick } from "../../../pages";
import "./Hero.scss";

const Hero = () => {
  console.log(window.innerWidth);
  return (
    <section className="sw hero">
      <h1 className="hero-content">
        Your
        <img src={book} alt="book" className="hero-book-image" />
        wiki,
        <img src={doc} alt="doc" className="hero-doc-image" />
        docs, & <img src={dart} alt="dart" className="hero-dart-image" />
        projects. Together.
      </h1>
      <h4 className="hero-desc">
        Notion is the connected workspace where better, faster work happens.
      </h4>
      <button className="hero-btn">Get Notion Free </button>
      <div className="hero-images">
        <img src={hero} alt="" className="hero1" />
        <img src={hero2} alt="" className="hero2" />
        <img src={sidekick} alt="" className="sidekick" />
      </div>
    </section>
  );
};

export default Hero;
