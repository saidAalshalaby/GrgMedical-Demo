
import { faBookOpen, faCheckCircle, faFighterJet, faHospitalAlt, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Antiseptic from "../assets/images/Antiseptic.png"
import Industrial from "../assets/images/Industrial.png"
import Mask from "../assets/images/Mask.png"
import offer from "../assets/images/offer.png"

function About() {
    return (
        <>
            <div className="offers-parent">
                <div className="item">
                    <img className="normal-image" src={Antiseptic} />
                    <h3 className="gutentor-text">Antiseptic &amp; Personal use</h3>
                </div>
                <div className="item">
                    <img className="normal-image" src={Industrial} srcset={Industrial} />
                    <h3 className="gutentor-text">Hospital Disinfection</h3>
                </div>
                <div className="item">
                    <img className="normal-image" src={Mask} />
                    <h3 className="gutentor-text">Medical Equipment</h3>
                </div>
            </div>
            <div className="products-second">
                <div>
                    <h4 className="gutentor-text">Who We Are</h4>
                    <h2 className="gutentor-text">Choose The Best Disinfection Products</h2>
                    <p className="gutentor-text"><strong>GRG Medical</strong> makes sure that your working and living environment is always disinfected and all the bacteria and germs are destroyed. We constantly <em>improve our products</em> to assure you that everything is decontaminated properly and efficiently. All GRG Medical products <strong>neutralize </strong>and <strong>remove </strong>dangerous substances, radioactivity, or germs from any area and object so you can do your job in safe conditions.</p>
                    <div className="grid-items">
                        <div className="item-type">
                            <FontAwesomeIcon icon={faCheckCircle} color="#459af5"></FontAwesomeIcon>
                            <p className="gutentor-single-item-title">Masks</p>

                        </div>
                        <div className="item-type">
                            <FontAwesomeIcon icon={faCheckCircle} color="#459af5"></FontAwesomeIcon>
                            <p className="gutentor-single-item-title">Types of disinfectants</p>

                        </div>
                        <div className="item-type">
                            <FontAwesomeIcon icon={faCheckCircle} color="#459af5"></FontAwesomeIcon>
                            <p className="gutentor-single-item-title">Cleaning products</p>
                        </div>
                        <div className="item-type">
                            <FontAwesomeIcon icon={faCheckCircle} color="#459af5"></FontAwesomeIcon>
                            <p className="gutentor-single-item-title">Disinfecting and sanitizing</p>
                        </div>
                    </div>
                </div>

                <div id="section-gma34b9f" className="section-gma34b9f gutentor-col-wrap">
                    <figure className="wp-block-image size-large is-resized">
                        <img loading="lazy" src={offer} alt="" width="493" height="455" />
                    </figure>
                </div>
            </div>
            <div className="statistics-container">
                <div className="statistics-background">
                    <div className="grid-stat-container">
                        <div className="stat-item">
                            <FontAwesomeIcon icon={faStethoscope} color="#fff" size="2x"></FontAwesomeIcon>
                            <h4 >20</h4>
                            <h4 >Products</h4>
                        </div>
                        <div className="stat-item">
                            <FontAwesomeIcon icon={faBookOpen} color="#fff" size="2x"></FontAwesomeIcon>
                            <h4>5</h4>
                            <h4 >Certifications</h4>
                        </div>
                        <div className="stat-item">
                            <FontAwesomeIcon icon={faFighterJet} color="#fff" size="2x"></FontAwesomeIcon>
                            <h4 >5</h4>
                            <h4 >Continents we deliver to</h4>
                        </div>
                        <div className="stat-item">
                            <FontAwesomeIcon icon={faHospitalAlt} color="#fff" size="2x"></FontAwesomeIcon>
                            <h4>14</h4>
                            <h4 >Hospitals</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About

/*

import React from 'react';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-info">
        <div className="about-content">
          <h1>We are LA 16</h1>
          <h4>Serving since 2010, we are as proud as thankful for all the support. Our team at LA 16 is committed to serving you the best you ever had. </h4>
          <h4>Your taste is our priority. A well-expertised team at our hand we serve the best food of the county and will continue to do so.</h4>
          <h4>A 3-time Award-winning place is waiting for you. We love giving a reason for happiness to our people. Come again soon.</h4>
        </div>
      </div>
    </div>
  );
}

export default About;
*/