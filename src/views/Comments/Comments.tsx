import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import ArticleBlock from 'components/Story/ArticleBlock/ArticleBlock';
import CommentBlock from 'components/Story/CommentBlock/CommentBlock';
import Error from 'components/Error/Error';
import Loader from 'components/Loader/Loader';
import config from 'config';

import styles from './Comments.module.scss';

const Comments: React.FC = () => {
    const { storyId } = useParams();
    const [commentIds, setCommentIds] = useState<null | number[]>();
    const [error, setError] = useState<null | string>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchStoryIds = useCallback((): void => {
        setLoading(true);
        axios
            .get(`${config.API_BASE}/item/${storyId}.json`)
            .then((res) => {
                setCommentIds(res.data.kids);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [storyId]);

    const renderComments = useMemo((): React.ReactNode => {
        if (!commentIds) return null;
        return commentIds.slice(0, config.MAX_COMMENT_ITEMS).map((commentId) => <CommentBlock key={commentId} commentId={commentId} />);
    }, [commentIds]);

    useEffect(() => {
        fetchStoryIds();
    }, [fetchStoryIds]);

    if (loading) {
        return <Loader />;
    }

    if (!commentIds || !storyId) return null;

    if (error) {
        return <Error>{error}</Error>;
    }

    return (
        <div>
            <ArticleBlock storyId={storyId} className={styles.articleBlock} showCommentsButton={false} />
            <div className={styles.title}>Comments</div>
            {renderComments}
        </div>
    );
};

export default Comments;
