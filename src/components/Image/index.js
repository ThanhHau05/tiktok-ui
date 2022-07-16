import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [count, setCount] = useState('');
    const handleError = () => {
        setCount(images.noImage);
    };
    // eslint-disable-next-line jsx-a11y/alt-text
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={count || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
