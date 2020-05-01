import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NewsPage from 'views/News/News';
import NotFound from 'views/NotFound/NotFound';

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={NewsPage} />
        <Route component={NotFound} />
    </Switch>
);

export default Routes;
