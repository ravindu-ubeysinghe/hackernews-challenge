import React from 'react';
import cx from 'classnames';

interface ContentContainerProps {
    children: React.ReactNode;
    isFullWidth?: boolean;
    className?: string;
    dataTestId?: string;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children, isFullWidth = false, className = '', dataTestId = '' }) => {
    if (!children) return null;
    return (
        <div className={cx(isFullWidth ? 'container-fluid' : 'container', className)} data-testid={dataTestId}>
            {children}
        </div>
    );
};

export default ContentContainer;
