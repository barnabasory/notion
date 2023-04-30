import React from "react";
import "./Brands.scss";
import {
  airbnb,
  pinterest,
  doordash,
  headspace,
  amazon,
  angellist,
  snowflake,
  figma,
  pixar,
  ibm,
  toyota,
  uber,
  arrowF,
} from "../../../pages";

const Brands = () => {
  return (
    <section className="sw brands">
      <div className="brand-text">
        <h2 className="brand-title">Millions run on Notion every day</h2>
        <h4 className="brand-desc">
          Powering the world’s best teams, from next-generation startups to
          established enterprises.
        </h4>
        <a href="#" className="brand-link">
          Read customers stories{" "}
          <img src={arrowF} alt="" className="arrow-right" />
        </a>
      </div>

      <div className="images">
        <img src={airbnb} alt="airbnb" className="airbnb" />
        <img src={pinterest} alt="pinterest" className="pinterest" />
        <img src={doordash} alt="doordash" className="doordash" />
        <img src={headspace} alt="headspace" className="headspace" />
        <img src={amazon} alt="amazon" className="amazon" />
        <img src={angellist} alt="angellist" className="angellist" />
        <img src={snowflake} alt="snowflake" className="snowflake" />
        <img src={pixar} alt="pixar" className="pixar" />
        <img src={ibm} alt="ibm" className="ibm" />
        <img src={toyota} alt="toyota" className="toyota" />
        <img src={uber} alt="uber" className="uber" />
        <img src={figma} alt="figma" className="figma" />
      </div>
    </section>
  );
};

export default Brands;
