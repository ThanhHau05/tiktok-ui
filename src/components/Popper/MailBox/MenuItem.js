import styles from './MailBox.module.scss';
import classNames from 'classnames/bind';
import { useMemo } from 'react';
const cx = classNames.bind(styles);

function MenuItem({ data, isHighlight, onClick }) {
    const noti = useMemo(() => {
        if (isHighlight) {
            return cx('mailbox-noti', 'noti');
        } else {
            return cx('mailbox-noti');
        }
    }, [isHighlight]);

    const _onClick = () => {
        onClick(data.title);
    };

    return (
        <span ty className={noti} onClick={_onClick}>
            {data.title}
        </span>
    );
}

export default MenuItem;
