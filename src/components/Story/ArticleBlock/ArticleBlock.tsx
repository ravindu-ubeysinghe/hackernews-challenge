import React, { useEffect, useState, useCallback, useMemo } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import urlParse from 'url-parse';

import config from 'config';
import Error from 'components/Error/Error';

import StoryItem from '../types/storyItem';
import { getTimeDifference } from '../utils/datetime';
import styles from './ArticleBlock.module.scss';

interface ArticleBlockProps {
    storyId: number;
    index?: number;
    showCommentsButton?: boolean;
    className?: string;
}

const ArticleBlock: React.FC<ArticleBlockProps> = ({ storyId, index, className = '', showCommentsButton = true }) => {
    const [storyData, setStoryData] = useState<null | StoryItem>(null);
    const [error, setError] = useState<null | string>(null);

    const fetchStoryItem = useCallback((): void => {
        axios
            .get(`${config.API_BASE}/item/${storyId}.json`)
            .then((res) => {
                setStoryData(res.data);
            })
            .catch((err) => setError(err.message));
    }, [storyId]);

    const renderCommentsButton = useMemo(() => {
        if (!showCommentsButton || !storyData || !storyData.kids) return null;

        const CommentsButton = (
            <div className={styles.comments}>
                {storyData.kids.length > 1 ? (
                    <div>
                        See top {storyData.kids.length > 20 ? '20' : storyData.kids.length} comments out of {storyData.kids.length}
                    </div>
                ) : (
                    <div>No comments so far</div>
                )}
            </div>
        );

        return storyData.kids.length > 1 ? <Link to={`/comments/${storyId}`}>{CommentsButton}</Link> : CommentsButton;
    }, [showCommentsButton, storyData, storyId]);

    useEffect(() => {
        fetchStoryItem();
    }, [fetchStoryItem]);

    if (!storyData || !storyId) return null;

    if (error || !storyData?.title) return <Error>{error}</Error>;
    return (
        <div className={cx(styles.content, className)}>
            <div className={styles.title}>
                {index && <span>{`${index}.`}&nbsp;</span>}
                {storyData.url ? (
                    <>
                        <a href={storyData.url} target="_blank" rel="noopener noreferrer">
                            {storyData.title}
                        </a>
                        <span className={styles.originSite}>&nbsp;({urlParse(storyData.url).hostname})</span>
                    </>
                ) : (
                    storyData.title
                )}
            </div>
            <div className={styles.meta}>
                {storyData.score && <div className={styles.score}>{storyData.score} points</div>}
                <div className={styles.author}>
                    {storyData.by && <span>&nbsp;posted by {storyData.by}</span>}
                    {storyData.time && <span>&nbsp;{getTimeDifference(storyData.time)}</span>}
                </div>
            </div>
            {renderCommentsButton}
        </div>
    );
};

export default ArticleBlock;
