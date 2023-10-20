import {
    HeaderTop,
    HeaderBottom,
    HeaderBottomProfile,
    HeaderBottomPromotion,
} from '../';

import {HeaderSettings} from './types';

import styles from './Header.module.scss';
import HeaderTopProfile from '../HeaderTopProfile'
import PriorityNavs from '../ProrityNavs';

function Header(props: HeaderSettings) {

    // @ts-ignore
    return (
        <header className={styles.header}>
            {props.showTop && (
                <>
                    {/*<HeaderTop/>*/}
                    <PriorityNavs/>
                </>
            )}
            {props.showTopProfile && (

                <HeaderTopProfile/>
            )}
            {props.showBottom && (
                <HeaderBottom/>
            )}
            {props.showBottomProfile && (
                <HeaderBottomProfile/>
            )}
            {props.showBottomPromotion && (
                <HeaderBottomPromotion/>
            )}
        </header>
    );
}

export default Header;