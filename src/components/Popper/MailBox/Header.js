import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MailBox.module.scss';
const cx = classNames.bind(styles);

function Header({ title, children }) {
    return (
        <header className={cx('header')}>
            <h4 className={cx('header-title')}>{title}</h4>
            <div className={cx('mailbox-bar')}>
                <span className={cx('header-mailbox-bar')}>{children}</span>
            </div>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired,
};

export default Header;
