import styles from './MailBox.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function MenuItemIcon({ data }) {
    return (
        <div className={cx('mailbox-list')}>
            <span className={cx('icon')}>{data.icon}</span>
            <p className={cx('text_1')}>{data.text_1}</p>
            <p className={cx('text_2')}>{data.text_2}</p>
        </div>
    );
}

export default MenuItemIcon;
