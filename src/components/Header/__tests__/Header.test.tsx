import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';

it('Header - Renders without any issues', () => {
    const { getByTestId } = render(
        <Router>
            <Header />
        </Router>,
    );
    expect(getByTestId('header')).toBeInTheDocument();
    expect(getByTestId('header')).toHaveTextContent('HackerStory');
});

it('Header - Clicking on logo takes the user to the homepage', () => {
    window.history.pushState({}, 'Sample comments page', '/comments/23042618');
    const { getByTestId } = render(
        <Router>
            <Header />
        </Router>,
    );
    const logo = getByTestId('header-logo');
    fireEvent.click(logo);
    expect(window.location.pathname).toBe('/');
});
