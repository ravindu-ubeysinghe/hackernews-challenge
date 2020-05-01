import React from 'react';

import styles from './Header.module.scss';

const Header: React.FC = () => (
    <div className="container-fluid">
        <div className={styles.wrapper}>
            <div>
                <h4>HackerNews</h4>
            </div>
        </div>
    </div>
);

export default Header;
