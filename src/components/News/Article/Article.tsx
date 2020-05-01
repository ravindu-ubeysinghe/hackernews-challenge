import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import config from 'config';

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
            .catch((err) => setError(err.message || config.DEFAULT_ERROR_MESSAGE));
    }, [error, newsItemId]);

    useEffect(() => {
        fetchNewsItem();
    }, [fetchNewsItem]);

    if (!newsData || error || !newsData?.title) return <div>{error}</div>;

    return (
        <div className={styles.content}>
            <div>
                {newsData.url ? (
                    <a href={newsData.url} target="_blank" rel="noopener noreferrer">
                        {newsData.title}
                    </a>
                ) : (
                    newsData.title
                )}
            </div>
            <div className={styles.meta}>
                {newsData.score && <div>Score: {newsData.score}</div>}
                {newsData.by && <div>By: {newsData.by}</div>}
                {newsData.time && <div>Time posted: {getTimeDifference(newsData.time)}</div>}
            </div>
        </div>
    );
};

export default Article;
