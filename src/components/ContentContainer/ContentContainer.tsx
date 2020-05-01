import React from 'react';
import cx from 'classnames';

interface ContentContainerProps {
    children: React.ReactNode;
    isFullWidth?: boolean;
    className?: string;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children, isFullWidth = false, className = '' }) => {
    if (isFullWidth) {
        return <div className={cx('container-fluid', className)}>{children}</div>;
    }

    return (
        <div className="container">
            <div className={cx('row', className)}>{children}</div>
        </div>
    );
};

export default ContentContainer;
