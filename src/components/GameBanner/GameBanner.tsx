import styles from './GameBanner.module.scss';

import GameStreamImage from '../../assets/images/game-stream-x2.min.jpg';
import GameStreamIcon1 from '../../assets/images/svg/game-banner-icon-1.svg';
import GameStreamIcon2 from '../../assets/images/svg/game-banner-icon-2.svg';

function GameBanner() {
	return (
	<div className={styles.gameBanner}>
		<div className={styles.top}>
            <div className={styles.streamWrapper}>
                <img className={styles.stream} src={GameStreamImage} alt="Twitch stream" />
                <button className={styles.streamPlay}>Play</button>
            </div>
            <div className={styles.infoWrapper}>
                <div className={styles.info}>
                    <div className={styles.infoIconWrapper}>
                        <div className={styles.infoIcon}>
                            <div className={styles.infoIconInner}>
                                <img className={styles.infoIconImg} src={GameStreamIcon1} alt="Icon" />
                            </div>
                        </div>
                        <div className={styles.infoIconText}>Nemiga</div>
                    </div>
                    <div className={styles.infoContentWrapper}>
                        <div className={styles.infoContentName}>IEM New York CIS</div>
                        <div className={styles.infoContentTime}>89’</div>
                        <div className={styles.infoContentDate}>MAP 2</div>
                        <div className={styles.infoContentScore}>7 : 5</div>
                    </div>
                    <div className={styles.infoIconWrapper}>
                        <div className={styles.infoIcon}>
                            <div className={styles.infoIconInner}>
                                <img className={styles.infoIconImg} src={GameStreamIcon2} alt="Icon" />
                            </div>
                        </div>
                        <div className={styles.infoIconText}>Winstrike</div>
                    </div>
                </div>
                <div className={styles.infoDates}>
                    <div className={styles.infoDate}>Map 1</div>
                    <div className={styles.infoDate}>Map 2</div>
                </div>
                <div className={styles.infoDatesMore}>
                    <div className={styles.infoDatesMoreRow}>
                        <div className={styles.infoDate}>7</div>
                        <div className={styles.infoDate}>10</div>
                    </div>
                    <div className={styles.infoDatesMoreRow}>
                        <div className={styles.infoDate}>16</div>
                        <div className={styles.infoDate}>6</div>
                    </div>   
                </div>
            </div>
        </div>
	</div>
	);
}

export default GameBanner;