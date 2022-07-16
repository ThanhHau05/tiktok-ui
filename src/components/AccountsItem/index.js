import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountsItem.module.scss';
const cx = classNames.bind(styles);

function AccountsItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://img2.thuthuatphanmem.vn/uploads/2019/01/19/hinh-anh-mau-den-4k-3840x2160_030503266.jpg"
                alt="Hau"
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    nguyenthanhau
                    <FontAwesomeIcon className={cx('icontichxanh')} icon={faCheckCircle} />
                </h4>
                <p className={cx('name')}>
                    <span>Nguyen Thanh Hau</span>
                </p>
            </div>
        </div>
    );
}

export default AccountsItem;
