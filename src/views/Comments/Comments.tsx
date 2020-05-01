import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import ArticleBlock from 'components/Story/ArticleBlock/ArticleBlock';
import CommentBlock from 'components/Story/CommentBlock/CommentBlock';
import Error from 'components/Error/Error';
import config from 'config';

import styles from './Comments.module.scss';

const Comments: React.FC = () => {
    const { storyId } = useParams();
    const [commentIds, setCommentIds] = useState<null | number[]>();
    const [error, setError] = useState<null | string>(null);

    const fetchStoryIds = useCallback((): void => {
        if (error) setError(null); // if error exists, clear it before calling the API

        axios
            .get(`${config.API_BASE}/item/${storyId}.json`)
            .then((res) => {
                setCommentIds(res.data.kids);
            })
            .catch((err) => setError(err.message));
    }, [error, storyId]);

    const renderComments = useMemo((): React.ReactNode => {
        if (!commentIds) return null;
        return commentIds.slice(0, config.MAX_COMMENT_ITEMS).map((commentId) => <CommentBlock key={commentId} commentId={commentId} />);
    }, [commentIds]);

    useEffect(() => {
        fetchStoryIds();
    }, [fetchStoryIds]);

    if (error) {
        return <Error>{error}</Error>;
    }

    return (
        <div>
            <ArticleBlock storyId={storyId} showCommentsButton={false} />
            <h4>Comments</h4>
            {renderComments}
        </div>
    );
};

export default Comments;
