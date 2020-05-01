import React from 'react';
import cx from 'classnames';

interface ContentContainerProps {
    children: React.ReactNode;
    isFullWidth?: boolean;
    className?: string;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children, isFullWidth = false, className = '' }) => {
    return <div className={cx(isFullWidth ? 'container-fluid' : 'container', className)}>{children}</div>;
};

export default ContentContainer;
