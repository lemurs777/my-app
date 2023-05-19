import GameStreamImage from '../assets/images/game-stream-x2.min.jpg';
import GameStreamIcon1 from '../assets/images/svg/game-banner-icon-1.svg';
import GameStreamIcon2 from '../assets/images/svg/game-banner-icon-2.svg';

function GameBanner() {
	return (
	<div className="game-banner">
		<div className="game-banner__top">
            <div className="game-banner__stream-wrapper">
                <img className="game-banner__stream" src={GameStreamImage} alt="Twitch stream" />
                <button className="game-banner__stream-play">Play</button>
            </div>
            <div className="game-banner__info-wrapper">
                <div className="game-banner__info">
                    <div className="game-banner__info-icon-wrapper">
                        <div className="game-banner__info-icon">
                            <div className="game-banner__info-icon-inner">
                                <img className="game-banner__info-icon-img" src={GameStreamIcon1} alt="Icon" />
                            </div>
                        </div>
                        <div className="game-banner__info-icon-text">Nemiga</div>
                    </div>
                    <div className="game-banner__info-content-wrapper">
                        <div className="game-banner__info-content-name">IEM New York CIS</div>
                        <div className="game-banner__info-content-time">89’</div>
                        <div className="game-banner__info-content-date">MAP 2</div>
                        <div className="game-banner__info-content-score">7 : 5</div>
                    </div>
                    <div className="game-banner__info-icon-wrapper">
                        <div className="game-banner__info-icon">
                            <div className="game-banner__info-icon-inner">
                                <img className="game-banner__info-icon-img" src={GameStreamIcon2} alt="Icon" />
                            </div>
                        </div>
                        <div className="game-banner__info-icon-text">Winstrike</div>
                    </div>
                </div>
                <div className="game-banner__info-dates">
                    <div className="game-banner__info-date">Map 1</div>
                    <div className="game-banner__info-date">Map 2</div>
                </div>
                <div className="game-banner__info-dates-more">
                    <div className="game-banner__info-dates-more-row">
                        <div className="game-banner__info-date">7</div>
                        <div className="game-banner__info-date">10</div>
                    </div>
                    <div className="game-banner__info-dates-more-row">
                        <div className="game-banner__info-date">16</div>
                        <div className="game-banner__info-date">6</div>
                    </div>   
                </div>
            </div>
        </div>
	</div>
	);
}

export default GameBanner;