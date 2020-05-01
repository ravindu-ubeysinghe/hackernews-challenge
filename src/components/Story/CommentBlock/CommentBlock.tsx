/* eslint-disable react/no-danger */
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import Error from 'components/Error/Error';
import config from 'config';

import CommentItem from '../types/commentItem';
import { getTimeDifference } from '../utils/datetime';
import styles from './CommentBlock.module.scss';

interface CommentBlockProps {
    commentId: number;
}

const CommentBlock: React.FC<CommentBlockProps> = ({ commentId }) => {
    const [commentData, setCommentData] = useState<null | CommentItem>(null);
    const [error, setError] = useState<null | string>(null);

    const fetchStoryItem = useCallback((): void => {
        if (error) setError(null); // if error exists, clear it before calling the API
        axios
            .get(`${config.API_BASE}/item/${commentId}.json`)
            .then((res) => {
                setCommentData(res.data);
            })
            .catch((err) => setError(err.message));
    }, [error, commentId]);

    useEffect(() => {
        fetchStoryItem();
    }, [fetchStoryItem]);

    if (!commentData) return null;

    if (error || !commentData?.text) return <Error>{error}</Error>;

    return (
        <div className={styles.content}>
            <div className={styles.meta}>
                Posted {commentData.by && <span className={styles.author}> by {commentData.by}</span>}
                {commentData.time && <span> {getTimeDifference(commentData.time)}</span>}
            </div>
            <div className={styles.text} dangerouslySetInnerHTML={{ __html: commentData.text }} />
        </div>
    );
};

export default CommentBlock;
