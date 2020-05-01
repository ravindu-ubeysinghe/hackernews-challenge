import React from 'react';
import { render } from '@testing-library/react';
import Loader from '../Loader';

it('Loader - Renders as expected without any issues', () => {
    const { getByTestId } = render(<Loader />);
    expect(getByTestId('loader')).toBeInTheDocument();
});
