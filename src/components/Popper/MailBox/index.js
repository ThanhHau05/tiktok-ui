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
import images from '~/assets/images';

const cx = classNames.bind(styles);

function MailBox({ items = [] }) {
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    const renderItems = () => {
        return items.map((item, index) => (
            <button key={index} className={cx('mailbox-btn')}>
                <MenuItem key={index} data={item} />
            </button>
        ));
    };
    return (
        <HeadlessTippy
            interactive
            placement="bottom-end"
            visible={visible}
            offset={[67, 8]}
            render={(attrs) => (
                <div className={cx('wrapper')} tabIndex="-1" {...attrs}>
                    <img className={cx('separate-tippy')} src={images.muiten} alt="" />
                    <PopperWrapper>
                        <Header title="Thông báo" children={renderItems()} />
                        <div className={cx('mailbox-list')}></div>
                    </PopperWrapper>
                </div>
            )}
        >
            {visible ? (
                <button className={cx('actions-btn')} onClick={visible ? hide : show}>
                    <FontAwesomeIcon icon={faEnvelopeOpen} />
                </button>
            ) : (
                <Tippy offset={[0, 16]} content="Hộp thư" placement="bottom">
                    <button className={cx('actions-btn')} onClick={visible ? hide : show}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </button>
                </Tippy>
            )}
        </HeadlessTippy>
    );
}

export default MailBox;
