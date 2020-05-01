import React from 'react';

import ContentContainer from 'components/ContentContainer/ContentContainer';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Home from 'views/Home/Home';

import styles from './Site.module.scss';

const Site: React.FC = () => (
    <>
        <Header />
        <ContentContainer className={styles.content}>
            <Home />
        </ContentContainer>
        <Footer />
    </>
);

export default Site;
