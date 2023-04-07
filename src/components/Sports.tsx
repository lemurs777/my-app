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

    const sportsGameList = [
        {
			nameKindsOfSports: 'Soccer',
            nameClassKindsOfSports: 'sports__games-top--soccer',
            sportsGamesInfoArr: [
                { 
                    sportsGamesInfoItem: '1',
                },
                { 
                    sportsGamesInfoItem: 'X',
                },
                { 
                    sportsGamesInfoItem: '2',
                },
                { 
                    sportsGamesInfoItem: 'T',
                },
                { 
                    sportsGamesInfoItem: 'O',
                },
                { 
                    sportsGamesInfoItem: 'U',
                },
                { 
                    sportsGamesInfoItem: 'OVER',
                },
                { 
                    sportsGamesInfoItem: 'UNDER',
                },
                { 
                    sportsGamesInfoItem: 'HAND.',
                },
                { 
                    sportsGamesInfoItem: 'ODD',
                },
            ],
            sportsGamesRowArr : [
                {
                    sportsGamesRowName: 'Испания. Примера',
                    sportsGamesRowTime: '18:15',
                    sportsGamesRowDate: '21 Aug',
                    sportsGamesRowNameOne: 'Севилья',
                    sportsGamesRowNameTwo: 'Атлетико Мадрид',
                    sportsGamesRowNumbers: [
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--up',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--down',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--disable',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '+21',
                            sportsGamesRowNumberClass: '',
                        },
                    ],
                },
                {
                    sportsGamesRowName: 'Spain. Primera',
                    sportsGamesRowTime: '18:15',
                    sportsGamesRowDate: '21 Aug',
                    sportsGamesRowNameOne: 'Sevilla',
                    sportsGamesRowNameTwo: 'Atletico Madrid',
                    sportsGamesRowNumbers: [
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--up',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--down',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--disable',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '+21',
                            sportsGamesRowNumberClass: '',
                        },
                    ],
                },
            ],
		},
        {
			nameKindsOfSports: 'Hockey',
            nameClassKindsOfSports: 'sports__games-top--hockey',
            sportsGamesInfoArr: [
                { 
                    sportsGamesInfoItem: '1',
                },
                { 
                    sportsGamesInfoItem: 'X',
                },
                { 
                    sportsGamesInfoItem: '2',
                },
                { 
                    sportsGamesInfoItem: 'T',
                },
                { 
                    sportsGamesInfoItem: 'O',
                },
                { 
                    sportsGamesInfoItem: 'U',
                },
                { 
                    sportsGamesInfoItem: 'OVER',
                },
                { 
                    sportsGamesInfoItem: 'UNDER',
                },
                { 
                    sportsGamesInfoItem: 'HAND.',
                },
                { 
                    sportsGamesInfoItem: 'ODD',
                },
            ],
            sportsGamesRowArr : [
                {
                    sportsGamesRowName: 'Испания. Примера',
                    sportsGamesRowTime: '19:15',
                    sportsGamesRowDate: '21 Aug',
                    sportsGamesRowNameOne: 'Севилья',
                    sportsGamesRowNameTwo: 'Атлетико Мадрид',
                    sportsGamesRowNumbers: [
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--up',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--down',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--disable',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--up',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '3.5',
                            sportsGamesRowNumberClass: 'sports__games-row-number--disable',
                        },
                        {
                            sportsGamesRowNumber: '+21',
                            sportsGamesRowNumberClass: '',
                        },
                    ],
                },
                {
                    sportsGamesRowName: 'Spain. Primera',
                    sportsGamesRowTime: '02:15',
                    sportsGamesRowDate: '12 Aug',
                    sportsGamesRowNameOne: 'Sevilla',
                    sportsGamesRowNameTwo: 'Atletico Madrid',
                    sportsGamesRowNumbers: [
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--up',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--down',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--disable',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '2.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--down',
                        },
                        {
                            sportsGamesRowNumber: '10.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--up',
                        },
                        {
                            sportsGamesRowNumber: '2.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '+121',
                            sportsGamesRowNumberClass: '',
                        },
                    ],
                },
            ],
		},
        {
			nameKindsOfSports: 'Basketball',
            nameClassKindsOfSports: 'sports__games-top--basketball',
            sportsGamesInfoArr: [
                { 
                    sportsGamesInfoItem: '1',
                },
                { 
                    sportsGamesInfoItem: 'X',
                },
                { 
                    sportsGamesInfoItem: '2',
                },
                { 
                    sportsGamesInfoItem: 'T',
                },
                { 
                    sportsGamesInfoItem: 'O',
                },
                { 
                    sportsGamesInfoItem: 'U',
                },
                { 
                    sportsGamesInfoItem: 'OVER',
                },
                { 
                    sportsGamesInfoItem: 'UNDER',
                },
                { 
                    sportsGamesInfoItem: 'HAND.',
                },
                { 
                    sportsGamesInfoItem: 'ODD',
                },
            ],
            sportsGamesRowArr : [
                {
                    sportsGamesRowName: 'Испания. Примера',
                    sportsGamesRowTime: '18:15',
                    sportsGamesRowDate: '21 Aug',
                    sportsGamesRowNameOne: 'Севилья',
                    sportsGamesRowNameTwo: 'Атлетико Мадрид',
                    sportsGamesRowNumbers: [
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--up',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--down',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--disable',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '+21',
                            sportsGamesRowNumberClass: '',
                        },
                    ],
                },
                {
                    sportsGamesRowName: 'Spain. Primera',
                    sportsGamesRowTime: '18:15',
                    sportsGamesRowDate: '21 Aug',
                    sportsGamesRowNameOne: 'Sevilla',
                    sportsGamesRowNameTwo: 'Atletico Madrid',
                    sportsGamesRowNumbers: [
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--up',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--down',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--disable',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '+21',
                            sportsGamesRowNumberClass: '',
                        },
                    ],
                },
            ],
		},
        {
			nameKindsOfSports: 'Basketball',
            nameClassKindsOfSports: 'sports__games-top--basketball',
            sportsGamesInfoArr: [
                { 
                    sportsGamesInfoItem: '1',
                },
                { 
                    sportsGamesInfoItem: 'X',
                },
                { 
                    sportsGamesInfoItem: '2',
                },
                { 
                    sportsGamesInfoItem: 'T',
                },
                { 
                    sportsGamesInfoItem: 'O',
                },
                { 
                    sportsGamesInfoItem: 'U',
                },
                { 
                    sportsGamesInfoItem: 'OVER',
                },
                { 
                    sportsGamesInfoItem: 'UNDER',
                },
                { 
                    sportsGamesInfoItem: 'HAND.',
                },
                { 
                    sportsGamesInfoItem: 'ODD',
                },
            ],
            sportsGamesRowArr : [
                {
                    sportsGamesRowName: 'Испания. Примера',
                    sportsGamesRowTime: '18:15',
                    sportsGamesRowDate: '21 Aug',
                    sportsGamesRowNameOne: 'Севилья',
                    sportsGamesRowNameTwo: 'Атлетико Мадрид',
                    sportsGamesRowNumbers: [
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--up',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--down',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--disable',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '+21',
                            sportsGamesRowNumberClass: '',
                        },
                    ],
                },
                {
                    sportsGamesRowName: 'Spain. Primera',
                    sportsGamesRowTime: '18:15',
                    sportsGamesRowDate: '21 Aug',
                    sportsGamesRowNameOne: 'Sevilla',
                    sportsGamesRowNameTwo: 'Atletico Madrid',
                    sportsGamesRowNumbers: [
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--up',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--down',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--disable',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '+21',
                            sportsGamesRowNumberClass: '',
                        },
                    ],
                },
            ],
		},
        {
			nameKindsOfSports: 'Tennis',
            nameClassKindsOfSports: 'sports__games-top--tennis',
            sportsGamesInfoArr: [
                { 
                    sportsGamesInfoItem: '1',
                },
                { 
                    sportsGamesInfoItem: 'X',
                },
                { 
                    sportsGamesInfoItem: '2',
                },
                { 
                    sportsGamesInfoItem: 'T',
                },
                { 
                    sportsGamesInfoItem: 'O',
                },
                { 
                    sportsGamesInfoItem: 'U',
                },
                { 
                    sportsGamesInfoItem: 'OVER',
                },
                { 
                    sportsGamesInfoItem: 'UNDER',
                },
                { 
                    sportsGamesInfoItem: 'HAND.',
                },
                { 
                    sportsGamesInfoItem: 'ODD',
                },
            ],
            sportsGamesRowArr : [
                {
                    sportsGamesRowName: 'Испания. Примера',
                    sportsGamesRowTime: '18:15',
                    sportsGamesRowDate: '21 Aug',
                    sportsGamesRowNameOne: 'Севилья',
                    sportsGamesRowNameTwo: 'Атлетико Мадрид',
                    sportsGamesRowNumbers: [
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--up',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--down',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--disable',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '+21',
                            sportsGamesRowNumberClass: '',
                        },
                    ],
                },
                {
                    sportsGamesRowName: 'Spain. Primera',
                    sportsGamesRowTime: '18:15',
                    sportsGamesRowDate: '21 Aug',
                    sportsGamesRowNameOne: 'Sevilla',
                    sportsGamesRowNameTwo: 'Atletico Madrid',
                    sportsGamesRowNumbers: [
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--up',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--down',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--disable',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '+21',
                            sportsGamesRowNumberClass: '',
                        },
                    ],
                },
                {
                    sportsGamesRowName: 'Spain. Primera',
                    sportsGamesRowTime: '18:15',
                    sportsGamesRowDate: '21 Aug',
                    sportsGamesRowNameOne: 'Sevilla',
                    sportsGamesRowNameTwo: 'Atletico Madrid',
                    sportsGamesRowNumbers: [
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--up',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--down',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--disable',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '+21',
                            sportsGamesRowNumberClass: '',
                        },
                    ],
                },
                {
                    sportsGamesRowName: 'Spain. Primera',
                    sportsGamesRowTime: '18:15',
                    sportsGamesRowDate: '21 Aug',
                    sportsGamesRowNameOne: 'Sevilla',
                    sportsGamesRowNameTwo: 'Atletico Madrid',
                    sportsGamesRowNumbers: [
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--up',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--down',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--disable',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '+21',
                            sportsGamesRowNumberClass: '',
                        },
                    ],
                },
                {
                    sportsGamesRowName: 'Spain. Primera',
                    sportsGamesRowTime: '18:15',
                    sportsGamesRowDate: '21 Aug',
                    sportsGamesRowNameOne: 'Sevilla',
                    sportsGamesRowNameTwo: 'Atletico Madrid',
                    sportsGamesRowNumbers: [
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--up',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--down',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--disable',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '-14',
                            sportsGamesRowNumberClass: '',
                        },
                    ],
                },
                {
                    sportsGamesRowName: 'Spain. Primera',
                    sportsGamesRowTime: '18:15',
                    sportsGamesRowDate: '21 Aug',
                    sportsGamesRowNameOne: 'Sevilla',
                    sportsGamesRowNameTwo: 'Atletico Madrid',
                    sportsGamesRowNumbers: [
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--up',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--down',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: 'sports__games-row-number--disable',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '9.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '1.1',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '10.5',
                            sportsGamesRowNumberClass: '',
                        },
                        {
                            sportsGamesRowNumber: '+777',
                            sportsGamesRowNumberClass: '',
                        },
                    ],
                },
            ],
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
            {sportsGameList.map((sportsGameItem, index) => (
                <div className="sports__games-item" key={index}>
                    <div className={clsx(
                            'sports__games-top',
                            sportsGameItem.nameClassKindsOfSports,
                    )}>
                        <h3 className='sports__games-title'>
                            {sportsGameItem.nameKindsOfSports}
                        </h3>
                        <div className="sports__games-info-wrapper">
                            {sportsGameItem.sportsGamesInfoArr.map((sportsGameInfoItem, index) => (
                                <div className="sports__games-info" key={index}>{sportsGameInfoItem.sportsGamesInfoItem}</div>
                            ))}
                        </div>
                    </div>
                    {sportsGameItem.sportsGamesRowArr.map((sportsGameRowItem, index) => (
                        <div className="sports__game-row" key={index}>
                            <div className="sports__game-row-name-wrapper">
                                <span className="sports__game-row-name">{sportsGameRowItem.sportsGamesRowName}</span>
                            </div>
                            <div className="sports__game-row-wrapper">
                                <div className="sports__game-row-date-time">
                                    <div className="sports__game-row-time">{sportsGameRowItem.sportsGamesRowTime}</div>
                                    <div className="sports__game-row-date">{sportsGameRowItem.sportsGamesRowDate}</div>
                                </div>
                                <div className="sports__game-row-names">
                                    <div className="sports__game-row-name">{sportsGameRowItem.sportsGamesRowNameOne}</div>
                                    <div className="sports__game-row-name">{sportsGameRowItem.sportsGamesRowNameTwo}</div>
                                </div>
                                <div className="sports__games-row-numbers">
                                    {sportsGameRowItem.sportsGamesRowNumbers.map((sportsGameRowNumber, index) => (
                                        <div key={index} className={clsx(
                                            'sports__games-row-number',
                                            sportsGameRowNumber.sportsGamesRowNumberClass,
                                        )}>
                                            {sportsGameRowNumber.sportsGamesRowNumber}
                                        </div>
                                    ))}    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </section>
    );
}

export default Sports;
