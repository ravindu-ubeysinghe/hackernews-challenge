import React from 'react';

import ContentContainer from 'components/ContentContainer/ContentContainer';

import styles from './Header.module.scss';

const Header: React.FC = () => (
    <ContentContainer isFullWidth className={styles.wrapper}>
        <ContentContainer className={styles.content}>
            <h4>HackerNews</h4>
        </ContentContainer>
    </ContentContainer>
);

export default Header;
