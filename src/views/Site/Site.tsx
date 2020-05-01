import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ContentContainer from 'components/ContentContainer/ContentContainer';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Routes from './Routes';

import styles from './Site.module.scss';

const Site: React.FC = () => (
    <Router>
        <Header />
        <ContentContainer className={styles.content}>
            <Routes />
        </ContentContainer>
        <Footer />
    </Router>
);

export default Site;
