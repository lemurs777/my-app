import {
  HeaderTop,
  HeaderBottom,
  HeaderBottomProfile,
  HeaderBottomPromotion,
} from '../';

import {HeaderSettings} from './types';

import styles from './Header.module.scss';
import HeaderTopProfile from '../HeaderTopProfile'

function Header(props: HeaderSettings) {

  return (
    <header className={styles.header}>
      {props.showTop && (
        <HeaderTop/>
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