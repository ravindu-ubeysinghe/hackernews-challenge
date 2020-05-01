import React from 'react';
import { Link } from 'react-router-dom';

import ContentContainer from 'components/ContentContainer/ContentContainer';

import styles from './Header.module.scss';

const Header: React.FC = () => (
    <ContentContainer isFullWidth className={styles.wrapper}>
        <ContentContainer className={styles.content}>
            <Link to="/">
                <h4>HackerStory</h4>
            </Link>
        </ContentContainer>
    </ContentContainer>
);

export default Header;
