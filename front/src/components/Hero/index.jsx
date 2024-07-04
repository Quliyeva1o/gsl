import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import Typed from 'typed.js';

const Hero = () => {
  useEffect(() => {
    const initTyped = () => {
      var dynamicClass = document.querySelector(".heading");
      var type = dynamicClass.querySelector(".typed");
      var typedString = dynamicClass.querySelector(".typed-strings");
      var typed = new Typed(type, {
        stringsElement: typedString,
        loop: true,
        backSpeed: 40,
        typeSpeed: 50,
        cursorChar: "|",
      });
    };
    initTyped();
  }, []);

  return (
    <div className={styles.hero}>
      <div className="heading">
        <h1 className='container'>
          <span></span>
          <div className={styles.div}>
            <div className="typed-strings">
              <p>İmtahan nəticələrini onlayn əldə et!</p>
            </div>
            <span className="typed"></span>
          </div>
        </h1>
      </div>
      <Link to="https://netice.gsl.edu.az/">
        <span>İmtahan nəticələrinə keçid</span>
      </Link>
    </div>
  );
};

export default Hero;
