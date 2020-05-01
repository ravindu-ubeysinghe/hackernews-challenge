import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import config from 'config';

import Error from 'components/Error/Error';
import StoryItem from '../types/storyItem';
import { getTimeDifference } from '../utils/datetime';
import styles from './ArticleBlock.module.scss';

interface ArticleBlockProps {
    storyId: number;
    showCommentsButton?: boolean;
    className?: string;
}

const ArticleBlock: React.FC<ArticleBlockProps> = ({ storyId, showCommentsButton = true, className = '' }) => {
    const [storyData, setStoryData] = useState<null | StoryItem>(null);
    const [error, setError] = useState<null | string>(null);

    const fetchStoryItem = useCallback((): void => {
        if (error) setError(null); // if error exists, clear it before calling the API
        axios
            .get(`${config.API_BASE}/item/${storyId}.json`)
            .then((res) => {
                setStoryData(res.data);
            })
            .catch((err) => setError(err.message));
    }, [error, storyId]);

    useEffect(() => {
        fetchStoryItem();
    }, [fetchStoryItem]);

    if (!storyData) return null;

    if (error || !storyData?.title) return <Error>{error}</Error>;

    return (
        <div className={cx(styles.content, className)}>
            <div className={styles.title}>
                {storyData.url ? (
                    <a href={storyData.url} target="_blank" rel="noopener noreferrer">
                        {storyData.title}
                    </a>
                ) : (
                    storyData.title
                )}
            </div>
            <div className={styles.meta}>
                {storyData.score && <div className={styles.score}>Score: {storyData.score}</div>}
                <div className={styles.author}>
                    Posted{storyData.by && <span> by {storyData.by}</span>}
                    {storyData.time && <span> {getTimeDifference(storyData.time)}</span>}
                </div>
            </div>
            {showCommentsButton && storyData.kids && storyData.kids.length > 1 && (
                <Link to={`/comments/${storyId}`}>
                    <div className={styles.comments}>See comments</div>
                </Link>
            )}
        </div>
    );
};

export default ArticleBlock;
