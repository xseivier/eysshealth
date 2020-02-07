import React, { Fragment } from "react";
import "./styles.css";
import nav from "../../../img/navbar.png";
import Medical from "../../../img/medical.png";
import Consultancy from "../../../img/consultancy.png";
import landingimg from "../../../img/Landingimg.png";
import Research from "../../../img/research.png";
import { Redirect } from "react-router-dom";

const index = props => {
  const medical = async () => {
    props.settypesCards("medical");
  };

  const consultancy = () => {
    props.settypesCards("consultancy");
  };

  const research = () => {
    props.settypesCards("research");
  };

  return props.typesCards !== "" ? (
    <Redirect to="/contact" />
  ) : (
    <Fragment>
      <div className="container">
        <img src={nav} width="100%" className="navbar" alt="" />

        <div className="row">
          <div className="cards">
            <div className="card">
              <img className="img-card" src={Medical} width="30%" />
              <p className="title-card">Medical Consultation</p>
              <p className="text-card">
                We provide primary care services of excellence to established
                clinics in London. These includes, but not limited to, GP
                consultations, Health screenings, Family planning, Travel Health
                among others. to meet the long-term and short-term needs of our
                clients around the clock.
              </p>
              <button className="btn-card" onClick={medical}>
                View More
              </button>
            </div>

            <div className="card">
              <img className="img-card" src={Consultancy} width="30%" />
              <p className="title-card">Consultancy</p>
              <p className="text-card">
                Provide medical consultancy services to a range of companies,
                start-ups and various Health projects. We strive to meet the
                long-term and short-term needs of our clients around the clock.
              </p>
              <button className="btn-card" onClick={consultancy}>
                View More
              </button>
            </div>

            <div className="card">
              <img className="img-card" src={Research} width="30%" />
              <p className="title-card">Research</p>
              <p className="text-card">
                Due to our high commitment to clinical research we are
                constantly looking to collaborate with innovative projects. We
                work in partnership with our clients throughout the different
                phases of the clinical research as well as support them with
                medical writing.
              </p>
              <button className="btn-card" onClick={research}>
                View More
              </button>
            </div>
          </div>

          <img className="landing-img" src={landingimg} width="33%" />
        </div>
      </div>
    </Fragment>
  );
};

export default index;
