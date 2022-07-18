import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faCircleQuestion,
    faCircleXmark,
    faCoins,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faLanguage,
    /*faSpinner,*/ faMagnifyingGlass,
    faPlus,
    faUser,
    faAt,
} from '@fortawesome/free-solid-svg-icons';
import { faCommentDots, faEnvelope, faHeart, faUser as faUser_Regular } from '@fortawesome/free-regular-svg-icons';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountsItem from '~/components/AccountsItem';
import Menu from '~/components/Popper/Menu';
import MailBox from '~/components/Popper/MailBox';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

const MENU_NOTIFICATION = [
    {
        title: 'Tất cả',
        icon: <FontAwesomeIcon icon={faEnvelope} />,
        text_1: 'Tất cả hoạt động',
        text_2: 'Các thông báo về tài khoản của bạn sẽ xuất hiện tại đây.',
    },
    {
        title: 'Thích',
        icon: <FontAwesomeIcon icon={faHeart} />,
        text_1: 'Lượt thích trên video của bạn',
        text_2: 'Khi ai đó thích một trong các video của bạn, bạn sẽ nhìn thấy ở đây',
    },
    {
        title: 'Bình luận',
        icon: <FontAwesomeIcon icon={faCommentDots} />,
        text_1: 'Bình luận trên video của bạn',
        text_2: 'Khi ai đó bình luận về một trong các video của bạn, bạn sẽ nhìn thấy ở đây',
    },
    {
        title: 'Nhắc đến',
        icon: <FontAwesomeIcon icon={faAt} />,
        text_1: 'Nhắc đến bạn',
        text_2: 'Khi ai đó nhắc đến bạn, bạn sẽ nhìn thấy ở đây',
    },
    {
        title: 'Follower',
        icon: <FontAwesomeIcon icon={faUser_Regular} />,
        text_1: 'Những Follower mới',
        text_2: 'Khi có người mới Follow bạn, bạn sẽ nhìn thấy ở đây',
    },
];

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: 'feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
];

const MENU_USER = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Xem hồ sơ',
        to: '@Hau',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Nhận xu',
        to: 'coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Cài đặt',
        to: 'setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Đăng xuất',
        to: 'logout',
        separate: true,
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        });
    }, []);

    //Handle Logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };
    const currentUser = true;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-lebel')}>Tài khoản</h4>
                                <AccountsItem />
                                <AccountsItem />
                                <AccountsItem />
                                <AccountsItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm tài khoản và video" spellCheck={false} />
                        <button className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        {/* <FontAwesomeIcon className={cx('loading-icon')} icon={faSpinner} /> */}
                        <span className={cx('duong-gach-thang')}></span>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button upload lefticon={<FontAwesomeIcon icon={faPlus} />}>
                                Tải lên
                            </Button>
                            <Tippy offset={[0, 16]} content="Tin nhắn" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <FontAwesomeIcon icon={faCommentDots} />
                                </button>
                            </Tippy>

                            <MailBox items={MENU_NOTIFICATION} />
                        </>
                    ) : (
                        <>
                            <Button upload lefticon={<FontAwesomeIcon icon={faPlus} />}>
                                Tải lên
                            </Button>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}

                    {currentUser ? (
                        <Menu items={MENU_USER}>
                            <Image
                                className={cx('user-avatar')}
                                src="https://i.pinimg.com/564x/be/72/16/be721624faf69ef9d84906e4d28af410.jpg"
                                alt="Hau"
                            />
                        </Menu>
                    ) : (
                        <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </Menu>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
