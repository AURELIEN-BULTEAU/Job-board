import React from "react";
import Job from "./Job";

const Jobs = () => {
  return (
    <div className="container">
      <Job
        className="blue"
        title="Full times scales associeted"
        contractType="CDI"
        country="Australia"
        city="Sidney"
      />
      <Job
        className="green"
        title="Agent de sécurité - Pantin"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
      <Job
        className="red"
        title="Responsable d'atelier"
        contractType="CDD"
        country="France"
        city="Paris"
      />
      <Job
        className="yellow"
        title="Chefs de projets"
        contractType="CDD"
        country="France"
        city="Paris"
      />
      <Job
        className="blue"
        title="Dev react"
        contractType="CDI"
        country="France"
        city="Paris"
      />
      <Job
        className="green"
        title="Scales associeted - Stokolm"
        contractType="CDI"
        country="Sweden"
        city="Stockholm"
      />
      <Job
        className="red"
        title="Vendeur - Montana"
        contractType="CDI"
        country="Swizaland"
        city="Crass-Montana"
      />
      <Job
        className="yellow"
        title="Cmr data analyst"
        contractType="CDI"
        country="USA"
        city="Ney-York"
      />
      <Job
        className="orange"
        title="Infirmier"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
    </div>
  );
};
export default Jobs;
