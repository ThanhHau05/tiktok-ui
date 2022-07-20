import Menu from '~/Layouts/components/Sidebar/Menu';
import MenuItem from './Menu/MenuItem';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faVideo, faHouse } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Dành cho bạn" to={config.routes.home} icon={<FontAwesomeIcon icon={faHouse} />} />
                <MenuItem
                    title="Đang Follow"
                    to={config.routes.following}
                    icon={<FontAwesomeIcon icon={faUserGroup} />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<FontAwesomeIcon icon={faVideo} />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
