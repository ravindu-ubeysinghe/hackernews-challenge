import React from 'react';

import styles from './Loader.module.scss';

const Loader: React.FC = () => (
    <div className={styles.content}>
        <div className={styles.loader} data-testid="loader">
            <div />
            <div />
            <div />
        </div>
    </div>
);

export default Loader;
