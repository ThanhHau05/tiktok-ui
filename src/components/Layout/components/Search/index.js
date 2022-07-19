import { useEffect, useState, useRef } from 'react';
import * as searchServices from '~/apiServices/searchServices';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/Hooks';
import AccountsItem from '~/components/AccountsItem';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchtext, setSeachText] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchtext, 500);

    const inputref = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchAPI = async () => {
            setLoading(true);
            const result = await searchServices.search(debounced);
            setSearchResult(result);
            setLoading(false);
        };

        fetchAPI();
    }, [debounced]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const hanleCheckSpace = (e) => {
        const count = e.target.value;
        if (!count.startsWith(' ')) {
            setSeachText(count);
        }
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-lebel')}>Tài khoản</h4>
                        {searchResult.map((result) => (
                            <AccountsItem key={result.id} data={result} />
                        ))}
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
                    onChange={hanleCheckSpace}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchtext && !loading && (
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
                {loading && <FontAwesomeIcon className={cx('loading-icon')} icon={faSpinner} />}
                <span className={cx('duong-gach-thang')}></span>
                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
