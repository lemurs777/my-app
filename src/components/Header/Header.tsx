import {
    HeaderTop,
    HeaderBottom,
    HeaderBottomProfile,
    HeaderBottomPromotion,
} from '../';

import {HeaderSettings} from './types';

import styles from './Header.module.scss';
import HeaderTopProfile from '../NotUse/HeaderTopProfile'


type Props = {
    isLogIn?: boolean;
    showTop?: boolean,
    showTopProfile?: boolean,
    showBottom?: boolean;
    showBottomProfile?: boolean;
    showBottomPromotion?: boolean;
}


function Header({showTop, showTopProfile, showBottom, showBottomProfile, showBottomPromotion, isLogIn}: Props) {

    // @ts-ignore
    return (
        <header className={styles.header}>
            <HeaderTop isLogIn={isLogIn}/>

            {showBottom && (
                <HeaderBottom/>
            )}
            {showBottomProfile && (
                <HeaderBottomProfile/>
            )}
            {showBottomPromotion && (
                <HeaderBottomPromotion/>
            )}
        </header>
    );
}

export default Header;