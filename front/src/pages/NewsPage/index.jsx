import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styles from './index.module.scss';
import { useGetNewssQuery } from '../../redux/newsAll';
import { Pagination } from 'antd';
import { Link } from 'react-router-dom';

const NewsPage = () => {
    const [newss, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const { data: news } = useGetNewssQuery();
    const pageSize = 3;

    useEffect(() => {
        news && setNews(news);
    }, [news]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const indexOfLastNews = currentPage * pageSize;
    const indexOfFirstNews = indexOfLastNews - pageSize;
    const currentNews = newss.slice(indexOfFirstNews, indexOfLastNews);

    return (
        <div className={styles.news}>
            <div className="container">
                <h1>Xəbərlər</h1>
                <div className={`${styles.cards} d-flex flex-wrap`}>
                    {currentNews && currentNews.length > 0 && currentNews.map((item) => (
                        <div key={item.id} className="col-lg-4 col-md-6 col-sm-12">  <Link to={`/news/${item.id}`}>
                            <div className={`${styles.card} card`}>
                                <img src={item.title_photo} alt="" />
                                <div className={styles.text}>
                                    <span>{moment(item.date).format('DD MMMM YYYY')}</span>
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                        </Link>
                        </div>

                    ))}
                </div>
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={newss.length}
                    onChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default NewsPage;
