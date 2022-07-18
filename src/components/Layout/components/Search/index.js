import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountsItem from '~/components/AccountsItem';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchtext, setSeachText] = useState('');
    const [showResult, setShowResult] = useState(true);

    const inputref = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 1, 1, 1, 1]);
        });
    }, []);

    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
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
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputref}
                    value={searchtext}
                    placeholder="Tìm kiếm tài khoản và video"
                    spellCheck={false}
                    onChange={(e) => setSeachText(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchtext && (
                    <button
                        className={cx('clear-btn')}
                        onClick={() => {
                            setSeachText('');
                            setSearchResult([]);
                            inputref.current.focus();
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('loading-icon')} icon={faSpinner} /> */}
                <span className={cx('duong-gach-thang')}></span>
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
