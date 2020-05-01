import React from 'react';

import ContentContainer from 'components/ContentContainer/ContentContainer';

import styles from './Footer.module.scss';

const Footer: React.FC = () => (
    <ContentContainer isFullWidth className={styles.wrapper}>
        <ContentContainer className={styles.content}>
            <small>
                Created by{' '}
                <a href="https://ravindu.com.au" target="_blank" rel="noopener noreferrer">
                    Ravindu Ubeysinghe
                </a>
            </small>
        </ContentContainer>
    </ContentContainer>
);

export default Footer;
