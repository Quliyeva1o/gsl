import React from 'react'
import styles from "./index.module.scss"
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className="container d-lg-flex justify-content-around">
          <div>
            <h4>Yenilikləri izlə!</h4>
            <div className='d-flex'>
              <TextField id="outlined-basic" label="Əlaqə nömrəniz" variant="outlined" />
              <button><span>Göndər</span></button>
            </div>
          </div>
          <div className={styles.eelaqee}>
            <h3>Əlaqə:</h3>
            <div className="d-flex">  <span> <PhoneEnabledIcon /></span>
              <div> <a href="#">
                Telefon:<br /> +994(60)4008389
              </a></div></div>
            <br />
            <div className='d-flex'>
              <span><EmailIcon /></span>
              <a href="#">
                Elektron-poçt:<br />gsl.edu.az@gmail.com
              </a></div>
            <br />
            <div className='d-flex'>
              <span><InstagramIcon /></span>
              <a href="#">
                sosial-media:<br />gsl.edu.az
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
