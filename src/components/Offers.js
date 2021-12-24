import React from 'react';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug, faBroom, faAllergies } from '@fortawesome/free-solid-svg-icons'

const Offers = () => {
  let iconColor = "#107aeb";
  let iconSize = "3x";
  return (
    <>

      <div className="offers" id="about">
        <div className="grid-container">
          <div id="section-g1ff034" className="wp-block-gutentor-e1 section-g1ff034 gutentor-element gutentor-element-advanced-text text-align-center-desktop text-align-center-tablet text-align-center-mobile">
            <div className="gutentor-text-wrap"><h4 className="gutentor-text">our PRODUCTS</h4>
            </div>
          </div>
          <div id="section-g529c63" className="wp-block-gutentor-e1 section-g529c63 gutentor-element gutentor-element-advanced-text text-align-center-desktop text-align-center-tablet text-align-center-mobile">
            <div className="gutentor-text-wrap">
              <h2 className="gutentor-text"> What We Offer You </h2>
              <span className="line"></span>
            </div>
          </div>
          <div className="item">
          </div>
          <div id="section-g090220" className="wp-block-gutentor-e1 section-g090220 gutentor-element gutentor-element-advanced-text text-align-center-desktop text-align-center-tablet text-align-center-mobile">
            <div className="gutentor-text-wrap">
              <p className="gutentor-text">In today’s world, to prevent different diseases that could put in danger our health, we need to protect ourselves against the organism harmful to our immune system. <strong>GRG Medical</strong>‘s goal is to keep your house and other areas clean and disinfected by utilizing our ultimate antiseptic solutions.<br /><strong>All hospital</strong> rooms are expected to apply disinfectants appropriately, including cleaning noncritical and environmental surfaces on a continuous basis.<br /> When selecting what to use, hospitals evaluate the composition of the disinfectant or detergent, the cost, material compatibility, shelf life, and disposal. <strong>Operating rooms</strong>, for example, require a more stringent process, and some require ventilation to clean the air as well as sterilizing surfaces.</p>
            </div>
          </div>
        </div>
      </div>
      <section id="gm5384a3b" className="wp-block-gutentor-m2 section-gm5384a3b gutentor-module gutentor-dynamic-columns has-color-bg has-custom-bg gutentor-equal-column-height">
        <div className="offers-parent">
          <div className="item">
            <FontAwesomeIcon icon={faBug} size={iconSize} color={iconColor}> </FontAwesomeIcon>
            <h3>Medical device sterilization</h3>
            <p>Medical equipment that comes into touch with sterile bodily tissues or fluids is classified as critical. When using these products, they should be sterile because any microbial contamination might result in disease transmission.</p>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faAllergies} size={iconSize} color={iconColor}> </FontAwesomeIcon>
            <h3>Steam Sterilization</h3>
            <p>For more than a century, steam sterilization has been used to sterilize things that can survive moisture and high temperatures. Because steam is water in the vapor state, it is harmless, widely available, and relatively straightforward to manage.</p>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faBroom} size={iconSize} color={iconColor}> </FontAwesomeIcon>
            <h3>Antiseptic products</h3>
            <p>Antiseptic is a substance that can kill microorganisms and inhibit their growth. <br />Antiseptic is used for cleaning skin and wounds to prevent infection and contamination. </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Offers;
