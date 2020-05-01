import React from 'react';
import cx from 'classnames';

import config from 'config';

import styles from './Error.module.scss';

interface ErrorProps {
    children?: React.ReactNode;
    className?: string;
}

const Error: React.FC<ErrorProps> = ({ children, className }) => (
    <div className={cx(styles.content, 'alert alert-danger', { className })}>{children || config.DEFAULT_ERROR_MESSAGE}</div>
);

export default Error;
