import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';

it('Footer - Renders without any issues', () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('footer')).toBeInTheDocument();
});

it('Footer - To have the static footer text', () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('footer')).toHaveTextContent('Created by Ravindu Ubeysinghe');
});
