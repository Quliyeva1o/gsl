import React, { useEffect, useState } from 'react';
import moment from 'moment'; 
import styles from './index.module.scss';
import { getAll } from '../../API/requests';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getAll('news?count=3')
      .then((res) => {
        const formattedNews = res.data.map(item => ({
          ...item,
          formattedDate: moment(item.date).locale('az').format('DD MMMM YYYY')
        }));
        setNews(formattedNews);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.news}>
      <div className="container">
        <h1>Xəbərlər</h1>
        <div className={`${styles.cards} d-flex flex-wrap`}>
          {news && news.length > 0 && news.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 col-sm-12">
              <div className={`${styles.card} card`}>
                <img src={item.title_photo} alt="" />
                <div className={styles.text}>
                  <span>{item.formattedDate}</span> 
                  <h3>{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
