import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import config from 'config';

import Error from 'components/Error/Error';
import NewsItem from '../types/newsItem';
import { getTimeDifference } from '../utils/datetime';
import styles from './Article.module.scss';

interface ArticleProps {
    newsItemId: string;
}

const Article: React.FC<ArticleProps> = ({ newsItemId = '' }) => {
    const [newsData, setNewsData] = useState<null | NewsItem>(null);
    const [error, setError] = useState<null | string>(null);

    const fetchNewsItem = useCallback((): void => {
        if (error) setError(null); // if error exists, clear it before calling the API
        axios
            .get(`${config.API_BASE}/item/${newsItemId}.json`)
            .then((res) => {
                setNewsData(res.data);
            })
            .catch((err) => setError(err.message));
    }, [error, newsItemId]);

    useEffect(() => {
        fetchNewsItem();
    }, [fetchNewsItem]);

    if (!newsData || error || !newsData?.title) return <Error>{error}</Error>;

    return (
        <div className={styles.content}>
            <div className={styles.title}>
                {newsData.url ? (
                    <a href={newsData.url} target="_blank" rel="noopener noreferrer">
                        {newsData.title}
                    </a>
                ) : (
                    newsData.title
                )}
            </div>
            <div className={styles.meta}>
                {newsData.score && <div className={styles.score}>Score: {newsData.score}</div>}
                <div className={styles.author}>
                    Posted{newsData.by && <span> by {newsData.by}</span>}
                    {newsData.time && <span> {getTimeDifference(newsData.time)}</span>}
                </div>
            </div>
        </div>
    );
};

export default Article;
