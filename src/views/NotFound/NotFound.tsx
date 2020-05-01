import React from 'react';

import styles from './NotFound.module.scss';

const NotFound: React.FC = () => (
    <div className={styles.content}>
        <h1>Not Found - 404</h1>
        <p>The page that you are looking for, could not be found!</p>
    </div>
);

export default NotFound;
