import React, { useState, useEffect } from 'react';
import { FaTurnUp } from 'react-icons/fa6';

import styles from './index.module.scss';

const ScrollIco = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div
            className={`${styles.ico} ${isVisible ? styles.visible : ''}`}
            onClick={scrollToTop}
        >
            <FaTurnUp />
        </div>
    );
};

export default ScrollIco;
