import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import YouTube from 'react-youtube';
import ScriptTag from "react-script-tag";
const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {


  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Donation page for <span className="text-color-primary">Charity</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
               This is just a single page application in which the use can donate some amount to charity.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>

                    <form><ScriptTag src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_HmbjmlVQZJA21k" async> </ScriptTag> </form>
                </ButtonGroup>
                
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
          <YouTube videoId="3dHOsKFMPJ4"   />

          </div>

        </div>
      </div>
    </section>
  );
}

// "homepage": "https://narayanbavisetti.github.io/payment-gateway/",

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;