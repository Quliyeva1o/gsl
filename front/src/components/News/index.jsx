import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styles from './index.module.scss';
import { getAll } from '../../API/requests';
import { useGetNewsQuery } from '../../redux/newsSlice';

const News = () => {
  const [newss, setNews] = useState([]);
  const { data: news } = useGetNewsQuery();

  useEffect(() => {
    news && setNews(news)
  }, [news]);
  console.log(newss);

  return (
    <div className={styles.news}>
      <div className="container">
        <h1>Xəbərlər</h1>
        <div className={`${styles.cards} d-flex flex-wrap`}>
          {newss && newss.length > 0 && newss.map((item) => (
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
