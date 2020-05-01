import React from 'react';
import { render } from '@testing-library/react';
import ContentContainer from '../ContentContainer';

it('Content Container - Renders properly without any issues', () => {
    const { container } = render(<ContentContainer>Sample content</ContentContainer>);
    expect(container.querySelector('div.container')).toBeTruthy();
});

it('Content Container - Fails to render without children', () => {
    const { container } = render(<ContentContainer />);
    expect(container.querySelector('div.container')).toBeFalsy();
});

it('Content Container - Renders in a full width container when flag specified', () => {
    const { container } = render(<ContentContainer isFullWidth>Sample Content</ContentContainer>);
    expect(container.querySelector('div.container-fluid')).toBeTruthy();
});
