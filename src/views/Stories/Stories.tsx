import React, { useEffect, useState, useMemo, useCallback } from 'react';
import axios from 'axios';

import ArticleBlock from 'components/Story/ArticleBlock/ArticleBlock';
import Error from 'components/Error/Error';
import Loader from 'components/Loader/Loader';
import config from 'config';

import styles from './Stories.module.scss';

const Stories: React.FC = () => {
    const [storyIds, setStoryIds] = useState<null | number[]>(null);
    const [error, setError] = useState<null | string>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchStoryIds = useCallback((): void => {
        setLoading(true);
        axios
            .get(`${config.API_BASE}/topstories.json`)
            .then((res) => {
                setStoryIds(res.data);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    const renderArticles = useMemo((): React.ReactNode => {
        if (!storyIds) return null;
        return storyIds.slice(0, config.MAX_STORY_ITEMS).map((storyId) => <ArticleBlock key={storyId} storyId={storyId} />);
    }, [storyIds]);

    useEffect(() => {
        fetchStoryIds();
    }, [fetchStoryIds]);

    if (loading) {
        return <Loader />;
    }

    if (!storyIds) return null;

    if (error) {
        return <Error>{error}</Error>;
    }

    return <div className={styles.content}>{renderArticles}</div>;
};

export default Stories;
