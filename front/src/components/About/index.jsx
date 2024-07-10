import React from 'react'
import styles from './index.module.scss'
import logo from '../../images/logo/logo.png'
const About = () => {
    return (
        <>
        <div className={styles.about}>
            <div className="container d-lg-flex justify-content-between ">
                <div className={`${styles.logo} col-lg-6 col-md-12 col-sm-12`}>
                    <img style={{ width: "100%" }} src={logo} alt="" />
                </div>
                <div className={`col-lg-6 col-md-12 col-sm-12`}><h4>Haqqımızda </h4>
                    <p>Naxçıvan Təhsil Mərkəzi 2017-ci ildən fəaliyyət göstərir. Mərkəzin fəaliyyət istiqaməti Naxçıvan Muxtar Respublikasında təhsilin inkişafına töhfə verməkdir.</p>
                    <ul>
                        <li>Məktəbəqədər hazırlıq</li>
                        <li>İbtidai sinif</li>
                        <li>5, 6, 7, 8-ci sinif təkmilləşdirmə</li>
                        <li>Liseylərə hazırlıq</li>
                        <li>Kompyuter kursları </li>
                        <li>Natiqlik təlimi</li>
                        <li>İngilis dili danışıq</li>
                        <li>Dövlət qulluğuna hazırlıq</li>
                        <li>Kurikulum</li>
                    </ul>
                </div>
            </div></div>
        </>
    )
}

export default About
