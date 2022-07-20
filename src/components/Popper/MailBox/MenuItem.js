import PropTypes from 'prop-types';
import styles from './MailBox.module.scss';
import classNames from 'classnames/bind';
import { useMemo } from 'react';
const cx = classNames.bind(styles);

function MenuItem({ data, isHighlight, onClickTitle }) {
    const noti = useMemo(() => {
        if (isHighlight) {
            return cx('mailbox-noti', 'noti');
        } else {
            return cx('mailbox-noti');
        }
    }, [isHighlight]);

    const _onClick = () => {
        onClickTitle(data.title);
    };
    return (
        <button className={cx('mailbox-btn')}>
            <span className={noti} onClick={_onClick}>
                {data.title}
            </span>
        </button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    isHighlight: PropTypes.bool.isRequired,
    onClickTitle: PropTypes.func.isRequired,
};

export default MenuItem;
