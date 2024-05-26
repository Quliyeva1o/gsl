import React from 'react'
import styles from './index.module.scss'
const News = () => {
  return (
    <>
      <div className={styles.news}>
        <div className="container">
          <h1>Xəbərlər</h1>
          <div className={`${styles.cards} d-flex `}>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className={`${styles.card} card`}>
                <img src="https://admin.hedef.edu.az/storage/uploads/images/blog/naxcivanda-qosqar-riyaziyyat-ve-mentiqyarisinin-baglanis-ve-mukafatlandirma-merasimi-kecirildi-1715677775.jpg" alt="" />
                <div className={styles.text}> <span>May 14, 2024</span>
                  <h3>Naxçıvanda “Qoşqar – Riyaziyyat və Məntiq”yarışının bağlanış və mükafatlandırma</h3></div>
              </div>
            </div>  <div className="col-lg-4 col-md-6 col-sm-12">
              <div className={`${styles.card} card`}>
                <img src="https://admin.hedef.edu.az/storage/uploads/images/blog/hedef-sirketler-qrupu-nun-sponsorlugu-ile-zencefil-restoraninda-musiad-seher-yemeyi-1715165337.JPG" alt="" />
                <div className={styles.text}> <span>May 14, 2024</span>
                  <h3>Naxçıvanda “Qoşqar – Riyaziyyat və Məntiq”yarışının bağlanış və mükafatlandırma</h3></div>
              </div>
            </div>  <div className="col-lg-4 col-md-6 col-sm-12">
              <div className={`${styles.card} card`}>
                <img src="https://admin.hedef.edu.az/storage/uploads/images/blog/semil-sadiqovun-pedaqoji-universitetde-telebelerle-gorusu-bas-tutdu-1714049538.jpg" alt="" />
                <div className={styles.text}> <span>May 14, 2024</span>
                  <h3>Naxçıvanda “Qoşqar – Riyaziyyat və Məntiq”yarışının bağlanış və mükafatlandırma</h3></div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </>
  )
}

export default News
