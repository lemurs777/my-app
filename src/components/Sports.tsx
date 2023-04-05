import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

function Sports() {

    const sportsList = [
		{
			name: 'Top',
			className: 'sports__item-link--top',
            link: '/',
		},
		{
			name: 'Bookmarks',
			className: 'sports__item-link--bookmarks',
            link: '/',
		},
		{
			name: 'Soccer',
			className: 'sports__item-link--soccer',
            link: '/',
		},
        {
			name: 'Hockey',
			className: 'sports__item-link--hockey',
            link: '/',
		},
        {
			name: 'Basketball',
			className: 'sports__item-link--basketball',
            link: '/',
		},
        {
			name: 'Tennis',
			className: 'sports__item-link--tennis',
            link: '/',
		},
        {
			name: 'Regby',
			className: 'sports__item-link--regby',
            link: '/',
		},
        {
			name: 'Volleyball',
			className: 'sports__item-link--volleyball',
            link: '/',
		},
        {
			name: 'MMA',
			className: 'sports__item-link--mma',
            link: '/',
		},
	];

    const sportsBestList = [
        {
			nameOne: 'Manchester United',
            nameTwo: 'Galatasaray',
			className: 'sports__best-link--soccet',
            link: '/',
		},
        {
			nameOne: 'Phoenix Suns',
            nameTwo: 'Atlanta Hawks',
			className: 'sports__best-link--basketball',
            link: '/',
		},
        {
			nameOne: 'Chicago Bulls',
            nameTwo: 'Brooklyn Nets',
			className: 'sports__best-link--hockey',
            link: '/',
		},
        {
			nameOne: 'Chelsea',
            nameTwo: 'Barcelona',
			className: 'sports__best-link--soccet',
            link: '/',
		},
        {
			nameOne: 'Marin Cilic',
            nameTwo: 'Andrey Rublev',
			className: 'sports__best-link--tennis',
            link: '/',
		},
        {
			nameOne: 'Chicago Bulls',
            nameTwo: 'Brooklyn Nets',
			className: 'sports__best-link--hockey',
            link: '/',
		},
        {
			nameOne: 'Zenit',
            nameTwo: 'Lokomotiv',
			className: 'sports__best-link--soccet',
            link: '/',
		},
        {
			nameOne: 'Manchester United',
            nameTwo: 'Galatasaray',
			className: 'sports__best-link--soccet',
            link: '/',
		},
        {
			nameOne: 'Phoenix Suns',
            nameTwo: 'Atlanta Hawks',
			className: 'sports__best-link--basketball',
            link: '/',
		},
        {
			nameOne: 'Chicago Bulls',
            nameTwo: 'Brooklyn Nets',
			className: 'sports__best-link--hockey',
            link: '/',
		},
        {
			nameOne: 'Chelsea',
            nameTwo: 'Barcelona',
			className: 'sports__best-link--soccet',
            link: '/',
		},
        {
			nameOne: 'Marin Cilic',
            nameTwo: 'Andrey Rublev',
			className: 'sports__best-link--tennis',
            link: '/',
		},
        {
			nameOne: 'Chicago Bulls',
            nameTwo: 'Brooklyn Nets',
			className: 'sports__best-link--hockey',
            link: '/',
		},
        {
			nameOne: 'Zenit',
            nameTwo: 'Lokomotiv',
			className: 'sports__best-link--soccet',
            link: '/',
		},
    ];

    return (
    <section className="sports">
        <ul className="sports__list">
            {sportsList.map((sportsItem, index) => (
                <li className="sports__item" key={index}>
                    <Link className={clsx(
                        'sports__item-link',
                        sportsItem.className
                    )} to={sportsItem.link}>{sportsItem.name}</Link>
                </li>
            ))}
        </ul>
        <div className="sports__best">
            <h2 className="sports__best-title">Today’s best moments</h2>
            <Swiper
				slidesPerView={'auto'} 
                loop={true} 
                autoplay={{
                    delay: 2500,
                }} 
                speed={300}
                modules={[Autoplay, Navigation]}
                navigation={true}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
				className="sports__best-list"
			>
				{sportsBestList.map((sportsBestItem, index) => (
					<SwiperSlide className="sports__best-item" key={index}>
                        <Link className={clsx(
                            'sports__best-link',
                            sportsBestItem.className
                        )} to={sportsBestItem.link}>
                            <h3 className="sports__best-link-title">
                                <span className="sports__best-link-title-one">
                                    {sportsBestItem.nameOne}
                                </span>
                                <span className="sports__best-link-title-two">
                                    {sportsBestItem.nameTwo}
                                </span>
                            </h3>
                            <div className="sports__best-link-live">
                                live
                            </div>
                        </Link>
					</SwiperSlide>
				))}
			</Swiper>
        </div>

        <div className="sports__games-list">
            <div className="sports__games-item">
                <div className="sports__games-top sports__games-top--soccer">
                    <h3 className="sports__games-title sports__games-title">
                        Soccer
                    </h3>
                    <div className="sports__games-info-wrapper">
                        <div className="sports__games-info">1</div>
                        <div className="sports__games-info">X</div>
                        <div className="sports__games-info">2</div>
                        <div className="sports__games-info">T</div>
                        <div className="sports__games-info">O</div>
                        <div className="sports__games-info">U</div>
                        <div className="sports__games-info">OVER</div>
                        <div className="sports__games-info">UNDER</div>
                        <div className="sports__games-info">HAND.</div>
                        <div className="sports__games-info">ODD</div>
                    </div>
                </div>
                <div className="sports__games-table">
                    <div className="sports__game-row">
                        <div className="sports__game-row-name-wrapper">
                            <span className="sports__game-row-name">Spain. Primera</span>
                        </div>
                        <div className="sports__game-row-wrapper">
                            <div className="sports__game-row-date-time">
                                <div className="sports__game-row-time">18:15</div>
                                <div className="sports__game-row-date">21 Aug</div>
                            </div>
                            <div className="sports__game-row-names">
                                <div className="sports__game-row-name">Sevilla</div>
                                <div className="sports__game-row-name">Atletico Madrid</div>
                            </div>
                            <div className="sports__games-row-numbers">
                                <div className="sports__games-row-number sports__games-row-number--up">9.1</div>
                                <div className="sports__games-row-number sports__games-row-number--down">9.1</div>
                                <div className="sports__games-row-number sports__games-row-number--disable">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">+21</div>
                            </div>
                        </div>
                    </div>
                    <div className="sports__game-row">
                        <div className="sports__game-row-name-wrapper">
                            <span className="sports__game-row-name">Испания. Примера</span>
                        </div>
                        <div className="sports__game-row-wrapper">
                            <div className="sports__game-row-date-time">
                                <div className="sports__game-row-time">18:15</div>
                                <div className="sports__game-row-date">21 Aug</div>
                            </div>
                            <div className="sports__game-row-names">
                                <div className="sports__game-row-name">Севилья</div>
                                <div className="sports__game-row-name">Атлетико Мадрид</div>
                            </div>
                            <div className="sports__games-row-numbers">
                                <div className="sports__games-row-number sports__games-row-number--up">9.1</div>
                                <div className="sports__games-row-number sports__games-row-number--down">9.1</div>
                                <div className="sports__games-row-number sports__games-row-number--disable">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">+21</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sports__games-item">
                <div className="sports__games-top sports__games-top--hockey">
                    <h3 className="sports__games-title sports__games-title">
                        Hockey
                    </h3>
                    <div className="sports__games-info-wrapper">
                        <div className="sports__games-info">1</div>
                        <div className="sports__games-info">X</div>
                        <div className="sports__games-info">2</div>
                        <div className="sports__games-info">T</div>
                        <div className="sports__games-info">O</div>
                        <div className="sports__games-info">U</div>
                        <div className="sports__games-info">OVER</div>
                        <div className="sports__games-info">UNDER</div>
                        <div className="sports__games-info">HAND.</div>
                        <div className="sports__games-info">ODD</div>
                    </div>
                </div>
                <div className="sports__games-table">
                    <div className="sports__game-row">
                        <div className="sports__game-row-name-wrapper">
                            <span className="sports__game-row-name">Испания. Примера</span>
                        </div>
                        <div className="sports__game-row-wrapper">
                            <div className="sports__game-row-date-time">
                                <div className="sports__game-row-time">18:15</div>
                                <div className="sports__game-row-date">21 Aug</div>
                            </div>
                            <div className="sports__game-row-names">
                                <div className="sports__game-row-name">Севилья</div>
                                <div className="sports__game-row-name">Атлетико Мадрид</div>
                            </div>
                            <div className="sports__games-row-numbers">
                                <div className="sports__games-row-number sports__games-row-number--up">9.1</div>
                                <div className="sports__games-row-number sports__games-row-number--down">9.1</div>
                                <div className="sports__games-row-number sports__games-row-number--disable">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">+21</div>
                            </div>
                        </div>
                    </div>
                    <div className="sports__game-row">
                        <div className="sports__game-row-name-wrapper">
                            <span className="sports__game-row-name">Испания. Примера</span>
                        </div>
                        <div className="sports__game-row-wrapper">
                            <div className="sports__game-row-date-time">
                                <div className="sports__game-row-time">18:15</div>
                                <div className="sports__game-row-date">21 Aug</div>
                            </div>
                            <div className="sports__game-row-names">
                                <div className="sports__game-row-name">Севилья</div>
                                <div className="sports__game-row-name">Атлетико Мадрид</div>
                            </div>
                            <div className="sports__games-row-numbers">
                                <div className="sports__games-row-number sports__games-row-number--up">9.1</div>
                                <div className="sports__games-row-number sports__games-row-number--down">9.1</div>
                                <div className="sports__games-row-number sports__games-row-number--disable">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">9.1</div>
                                <div className="sports__games-row-number">+21</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Sports;
