import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styles from './index.module.scss';
import { useGetNewsQuery } from '../../redux/newsSlice';
import { Link } from 'react-router-dom';

const News = () => {
  const [newss, setNews] = useState([]);
  const { data: news } = useGetNewsQuery();

  useEffect(() => {
    news && setNews(news)
  }, [news]);

  return (
    <div className={styles.news}>
      <div className="container">
        <h1>Xəbərlər</h1>
        <div className={`${styles.cards} d-flex flex-wrap`}>
          {newss && newss.length > 0 && newss.map((item) => (

            <div key={item.id} className="col-lg-4 col-md-6 col-sm-12"
            >
              <Link to={`/news/${item.id}`}>
                <div className={`${styles.card} card`}>
                  <img src={item.title_photo} alt="" />
                  <div className={styles.text}>
                    <span>{item.formattedDate}</span>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
};

export default News;
