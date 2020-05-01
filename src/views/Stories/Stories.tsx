import React, { useEffect, useState, useMemo, useCallback } from 'react';
import axios from 'axios';

import ArticleBlock from 'components/Story/ArticleBlock/ArticleBlock';
import Error from 'components/Error/Error';
import config from 'config';

import styles from './Stories.module.scss';

const Stories: React.FC = () => {
    const [storyIds, setStoryIds] = useState<null | number[]>(null);
    const [error, setError] = useState<null | string>(null);

    const fetchStoryIds = useCallback((): void => {
        axios
            .get(`${config.API_BASE}/topstories.json`)
            .then((res) => {
                setStoryIds(res.data);
            })
            .catch((err) => setError(err.message));
    }, []);

    const renderArticles = useMemo((): React.ReactNode => {
        if (!storyIds) return null;
        return storyIds.slice(0, config.MAX_STORY_ITEMS).map((storyId) => <ArticleBlock key={storyId} storyId={storyId} />);
    }, [storyIds]);

    useEffect(() => {
        fetchStoryIds();
    }, [fetchStoryIds]);

    if (error || !storyIds) {
        return <Error>{error}</Error>;
    }

    return <div className={styles.content}>{renderArticles}</div>;
};

export default Stories;
