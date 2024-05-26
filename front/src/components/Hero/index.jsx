import React from 'react'
import {Link} from "react-router-dom"
import styles from './index.module.scss'
const Hero = () => {
  return (
    <>
    <div className={styles.hero}>
      <div className="container">
        <h1>İmtahan nəticələrini onlayn əldə et!</h1>
        <Link>
        <span>İmtahan nəticələrinə keçid</span>
        </Link>
      </div></div>
    </>
  )
}

export default Hero
