import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetNewsByIdQuery } from '../../redux/newsAll';
import styles from './index.module.scss';

const NewsDetail = () => {
  const [myNews, setMyNews] = useState(null);
  const { id } = useParams();
  const { data: news } = useGetNewsByIdQuery(id);

  useEffect(() => {
    if (news) {
      setMyNews(news[0]);
    }
  }, [news]);

  return (
    <>
      {myNews && (
        <div className={`${styles.news} `}>
          <img src={myNews.title_photo} alt={myNews.title} />
          <div>
            <h1>{myNews.title}</h1>
            <p>{myNews.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsDetail;
