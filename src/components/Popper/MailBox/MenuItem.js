import styles from './MailBox.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function MenuItem({ data }) {
    const [noti, SetNoti] = useState(cx('mailbox-noti'));
    useEffect(() => {
        if (data.title === 'Tất cả') {
            SetNoti(cx('mailbox-noti', 'noti'));
        }
    }, [data.title]);
    const handleRenderItem = () => {
        SetNoti(cx('mailbox-noti', 'noti'));
    };
    return (
        <span ty className={noti} onClick={handleRenderItem}>
            {data.title}
        </span>
    );
}

export default MenuItem;
