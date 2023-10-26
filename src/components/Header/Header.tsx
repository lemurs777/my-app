import {
    HeaderTop,
    HeaderBottom,
    HeaderBottomProfile,
    HeaderBottomPromotion,
} from '../';

import {HeaderSettings} from './types';

import styles from './Header.module.scss';
import HeaderTopProfile from '../HeaderTopProfile'
// import HeaderTop from '../HeaderTop';

type Props = {
    isLogIn?: boolean;
    showTop?: boolean,
    showTopProfile?: boolean,
    showBottom?: boolean;
    showBottomProfile?: boolean;
    showBottomPromotion?: boolean;
}

// @ts-ignore
function Header({showTop,showTopProfile,showBottom,showBottomProfile,showBottomPromotion,isLogIn}: Props) {

    // @ts-ignore
    return (
        <header className={styles.header}>
            {showTop && (
                <>
                    {/*<HeaderTop/>*/}
                    <HeaderTop isLogIn={isLogIn}/>
                </>
            )}
            {showTopProfile && (

                <HeaderTopProfile/>
            )}
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