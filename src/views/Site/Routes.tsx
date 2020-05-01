import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Stories from 'views/Stories/Stories';
import Comments from 'views/Comments/Comments';
import NotFound from 'views/NotFound/NotFound';

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={Stories} />
        <Route exact path="/comments/:storyId" component={Comments} />
        <Route component={NotFound} />
    </Switch>
);

export default Routes;
