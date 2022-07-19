import { useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import styles from './MailBox.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import Header from './Header';
import MenuItem from './MenuItem';
import MenuItemIcon from './MenuItemIcon';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function MailBox({ items = [] }) {
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const [currentTag, setCurrentTag] = useState('Tất cả');

    const _onClick = (value) => {
        setCurrentTag(value);
    };

    const renderIcon = () => {
        return items.map((item, index) => {
            if (currentTag === item.title) {
                return <MenuItemIcon key={index} data={item} />;
            } else return null;
        });
    };
    const renderItems = () => {
        return items.map((item, index) => (
            <MenuItem key={index} isHighlight={currentTag === item.title} data={item} onClickTitle={_onClick} />
        ));
    };
    const _rendenTippy = (attrs) => (
        <div>
            <div className={cx('wrapper')} tabIndex="-1" {...attrs}>
                <img className={cx('separate-tippy')} src={images.muiten} alt="" />
                <PopperWrapper>
                    <Header title="Thông báo" children={renderItems()} />
                    {renderIcon()}
                </PopperWrapper>
            </div>
        </div>
    );
    return (
        <div>
            <HeadlessTippy
                appendTo={() => document.body}
                interactive
                placement="bottom-end"
                visible={visible}
                offset={[67, 8]}
                render={_rendenTippy}
            >
                {visible ? (
                    <button className={cx('actions-btn')} onClick={hide}>
                        <FontAwesomeIcon icon={faEnvelopeOpen} />
                    </button>
                ) : (
                    <Tippy offset={[0, 16]} content="Hộp thư" placement="bottom">
                        <button className={cx('actions-btn')} onClick={show}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </button>
                    </Tippy>
                )}
            </HeadlessTippy>
        </div>
    );
}

export default MailBox;
