import React from 'react';
import { render } from '@testing-library/react';
import config from 'config';
import Error from '../Error';

it('Error - Renders without any children with the default error message', () => {
    const { getByTestId } = render(<Error />);
    expect(getByTestId('error')).toHaveTextContent(config.DEFAULT_ERROR_MESSAGE);
});

it('Error - Renders with error message', () => {
    const { getByTestId } = render(<Error>Sample Error</Error>);
    expect(getByTestId('error')).toHaveTextContent('Sample Error');
});
