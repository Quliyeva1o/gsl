import React, { useEffect, useState, useCallback } from 'react';
import moment from 'moment';
import styles from './index.module.scss';
import { useGetNewssQuery } from '../../redux/newsAll';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const NewsPage = () => {
    const [newss, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const { data: news } = useGetNewssQuery();
    const pageSize = 3;
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        if (news) {
            const newNews = news.slice(0, currentPage * pageSize);
            setNews(newNews);
            setHasMore(newNews.length < news.length);
        }
    }, [news, currentPage]);

    const loadMoreNews = useCallback(() => {
        if (loading || !news || !hasMore) return;
        setLoading(true);
        setTimeout(() => {
            setCurrentPage(prevPage => prevPage + 1);
            setLoading(false);
        }, 1000);
    }, [loading, news, hasMore]);

    const { ref, inView } = useInView({
        threshold: 1,
        onChange: (inView) => {
            if (inView) {
                loadMoreNews();
            }
        },
    });

    useEffect(() => {
        if (inView) {
            loadMoreNews();
        }
    }, [inView, loadMoreNews]);

    return (
        <div className={styles.news}>
            <div className="container">
                <h1>Xəbərlər</h1>
                <div className={`${styles.cards} d-flex flex-wrap`}>
                    {newss && newss.length > 0 && newss.map((item) => (
                        <div key={item.id} className="col-lg-4 col-md-6 col-sm-12">
                            <Link to={`/news/${item.id}`}>
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
                {loading && hasMore && <div className={styles.loader}></div>
                }
                <div ref={ref} />
            </div>
        </div>
    );
};

export default NewsPage;
