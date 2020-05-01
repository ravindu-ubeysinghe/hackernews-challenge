import React, { useEffect, useState, useMemo, useCallback } from 'react';
import axios from 'axios';

import Article from 'components/News/Article/Article';

import config from 'config';

const News: React.FC = () => {
    const [newsIds, setNewsIds] = useState<null | string[]>(null);
    const [error, setError] = useState<null | string>(null);

    const fetchNewsIds = useCallback((): void => {
        if (error) setError(null); // if error exists, clear it before calling the API

        axios
            .get(`${config.API_BASE}/topstories.json`)
            .then((res) => {
                setNewsIds(res.data);
            })
            .catch((err) => setError(err.message || config.DEFAULT_ERROR_MESSAGE));
    }, [error]);

    const renderAricles = useMemo((): React.ReactNode => {
        if (!newsIds) return null;
        return newsIds.slice(0, config.MAX_NEWS_ITEMS).map((newsId) => <Article key={newsId} newsItemId={newsId} />);
    }, [newsIds]);

    useEffect(() => {
        fetchNewsIds();
    }, [fetchNewsIds]);

    if (error) {
        return <div>{error}</div>;
    }

    return <div>{renderAricles}</div>;
};

export default News;
