import {Link} from 'react-router-dom';
import clsx from 'clsx';

import styles from './HeaderBottomPromotion.module.scss';
import HeaderInfo from "../HeaderInfo";
import MobileApps from "../MobileApps";
import Language from "../Language";
import HeaderSearch from "../HeaderSearch";

function HeaderBottomPromotion() {
    return (
        <div className={styles.headerBottomPromotion}>
            <div className={styles.content}>
                <HeaderSearch placeholder={'Поиск по акциям'}/>
                <div className={styles.info}>
                    <HeaderInfo/>
                    <MobileApps/>
                    <Language/>
                </div>
            </div>
        </div>
    );
}

export default HeaderBottomPromotion;