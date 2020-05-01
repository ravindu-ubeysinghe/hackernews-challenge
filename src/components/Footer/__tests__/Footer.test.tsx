import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';

it('Footer - Renders without any issues', () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('footer')).toBeInTheDocument();
});
