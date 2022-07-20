import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AccountsItem.module.scss';
const cx = classNames.bind(styles);

function AccountsItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.avatar} alt="" />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    {data.nickname}
                    {data.tick && <FontAwesomeIcon className={cx('icontichxanh')} icon={faCheckCircle} />}
                </h4>
                <p className={cx('name')}>
                    <span>{data.full_name}</span>
                </p>
            </div>
        </Link>
    );
}

AccountsItem.propTypes = {
    data: PropTypes.object,
};

export default AccountsItem;
