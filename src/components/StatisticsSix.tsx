import { useState } from 'react';
import clsx from 'clsx';

import PositionsChart from './PositionsChart';

function StatisticsSix() {

    const [showTable, setShowTable] = useState(false);

	const arrRowsOne = [
		{
            date: '10/07/22',
            round: 15,
            nameOne: 'Western Port Steelers',
            winOne: true,
            scoreOne: 77,
            scoreTwo: 61,
            scoreInfo: '(Р)',
            nameTwo: 'Блэкберн Викингс',
            tournament: 'Биг V (Викториан Стейт Чемпионшип)',
        },
        {
            date: '19/06/22',
            round: 12,
            nameOne: 'Western Port Steelers',
            winOne: false,
            scoreOne: 797,
            scoreTwo: 103,
            scoreInfo: '(Р)',
            nameTwo: 'Блэкберн Викингс',
            tournament: 'Биг V (Викториан Стейт Чемпионшип)',
        },
        {
            date: '23/04/22',
            round: 5,
            nameOne: 'Блэкберн Викингс',
            winOne: false,
            scoreOne: 88,
            scoreTwo: 106,
            scoreInfo: '(Р)',
            nameTwo: 'Western Port Steelers',
            tournament: 'Биг V (Викториан Стейт Чемпионшип)',
        },
        {
            date: '01/08/21',
            round: 11,
            nameOne: 'Блэкберн Викингс',
            winOne: false,
            scoreOne: 82,
            scoreTwo: 85,
            scoreInfo: '(Р)',
            nameTwo: 'Western Port Steelers',
            tournament: 'Биг V (Викториан Стейт Чемпионшип)',
        },
        {
            date: '10/07/21',
            round: 16,
            nameOne: 'Western Port Steelers',
            winOne: true,
            scoreOne: 92,
            scoreTwo: 85,
            scoreInfo: '(Р)',
            nameTwo: 'Блэкберн Викингс',
            tournament: 'Биг V (Викториан Стейт Чемпионшип)',
        },
	];

    const Score = {
        win: 4,
        game: 5,
    };

    const arrRowTwo = [
		{
			title: 'БигV(3)',
			nameOne: 'Western Port Steelers',
			winOne: false,
			date: '02/04/23',
			score: '76:112 (Р)',
			scoreAccent: true,
			nameTwo: 'Wyndham Basketball',
		},
		{
			title: 'БигV(3)',
			nameOne: 'Bellarine',
			winOne: false,
			date: '01/04/23',
			score: '81:88 (Р)',
			scoreAccent: true,
			nameTwo: 'Western Port Steelers',
		},
		{
			title: 'БигV(2)',
			nameOne: 'Western Port Steelers',
			winOne: false,
			date: '26/03/23',
			score: '60:82 (Р)',
			scoreAccent: true,
			nameTwo: 'Keysborough',
		},
		{
			title: 'БигV(1)',
			nameOne: 'Western Port Steelers',
			winOne: false,
			date: '19/03/23',
			score: '95:104 (Р)',
			scoreAccent: true,
			nameTwo: 'Camberwell Dragons',
		},
		{
			title: 'БигV(18)',
			nameOne: 'Bellarine',
			winOne: true,
			date: '30/07/22',
			score: '95:85 (Р)',
			scoreAccent: true,
			nameTwo: 'Camberwell Dragons',
		},
		{
			title: 'БигV(16)',
			nameOne: 'Melbourne Uni Bball',
			winOne: false,
			date: '02/04/23',
			score: '84:92 (Р)',
			scoreAccent: true,
			nameTwo: 'Sunbury Jets',
		}
	]

    const arrRowThree = [
		{
			title: 'БигV(3)',
			nameOne: 'Блэкберн Викингс',
			winOne: false,
			date: '01/04/23',
			score: '67:82 (Р)',
			scoreAccent: true,
			nameTwo: 'Camberwell Dragons',
		},
		{
			title: 'БигV(2)',
			nameOne: 'Блэкберн Викингс',
			winOne: false,
			date: '26/03/23',
			score: '67:82 (Р)',
			scoreAccent: true,
			nameTwo: 'Melbourne Uni Bball',
		},
		{
			title: 'БигV(1)',
			nameOne: 'Блэкберн Викингс',
			winOne: false,
			date: '19/03/23',
			score: '81:111 (Р)',
			scoreAccent: true,
			nameTwo: 'Sunbury Jets',
		},
		{
			title: 'БигV(1)',
			nameOne: 'Bellarine',
			winOne: false,
			date: '18/03/23',
			score: '60:66 (Р)',
			scoreAccent: true,
			nameTwo: 'Блэкберн Викингс',
		},
		{
			title: 'БигV(18)',
			nameOne: 'Блэкберн Викингс',
			winOne: false,
			date: '30/07/22',
			score: '73:108 (Р)',
			scoreAccent: true,
			nameTwo: 'Маккиннон Кугарс',
		},
		{
			title: 'БигV(17)',
			nameOne: 'Sunbury Jets',
			winOne: true,
			date: '23/07/22',
			score: '92:57 (Р)',
			scoreAccent: true,
			nameTwo: 'Блэкберн Викингс',
		}
	]

	const arrRowFour = [
		{
			title: 'БигV(4)',
			nameOne: 'Western Port Steelers',
			nameAccent: false,
			date: '15/04/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Блэкберн Викингс',
		},
		{
			title: 'БигV(5)',
			nameOne: 'Wyndham Basketball',
			nameAccent: false,
			date: '22/04/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Маккиннон Кугарс',
		},
		{
			title: 'БигV(7)',
			nameOne: 'Хьюм Сити',
			nameAccent: false,
			date: '06/05/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Western Port Steelers',
		},
		{
			title: 'БигV(7)',
			nameOne: 'Western Port Steelers',
			nameAccent: false,
			date: '07/05/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Melbourne Uni Bball',
		},
		{
			title: 'БигV(8)',
			nameOne: 'Bellarine',
			nameAccent: false,
			date: '13/05/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Western Port Steelers',
		},
		{
			title: 'БигV(9)',
			nameOne: 'Western Port Steelers',
			nameAccent: false,
			date: '20/05/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Camberwell Dragons',
		},
	]

    const arrRowFive = [
		{
			title: 'БигV(4)',
			nameOne: 'Western Port Steelers',
			nameAccent: false,
			date: '02/04/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Блэкберн Викингс',
		},
		{
			title: 'БигV(5)',
			nameOne: 'Блэкберн Викингс',
			nameAccent: false,
			date: '02/04/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Хьюм Сити',
		},
		{
			title: 'БигV(45)',
			nameOne: 'Блэкберн Викингс',
			nameAccent: false,
			date: '02/04/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Keysborough',
		},
		{
			title: 'БигV(6)',
			nameOne: 'Melbourne Uni Bball',
			nameAccent: false,
			date: '02/04/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Блэкберн Викингс',
		},
		{
			title: 'БигV(7)',
			nameOne: 'Wyndham Basketball',
			nameAccent: false,
			date: '01/04/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Блэкберн Викингс',
		},
		{
			title: 'БигV(8)',
			nameOne: 'Блэкберн Викингс',
			nameAccent: false,
			date: '01/04/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Melbourne Uni Bball',
		},
	]

    const arrRowSix = [
		{
			number: 1,
            show: true,
			playTournamentClass: 'statistics-two__table-one-cell--playoff',
			directionClass: '',
			name: 'Хьюм Сити',
			game: 4,
			win: 4,
			loss: 0,
			scored: 403,
			conceded: 335,
			ratio: 1.203,
			pct: 1,
			points: 12,
			forms: [
				{ form: 'win' },
				{ form: 'win' },
				{ form: 'win' },
				{ form: 'win' },
			],
		},
		{
			number: 2,
            show: true,
			playTournamentClass: 'statistics-two__table-one-cell--qualification',
			directionClass: '',
			name: 'Wyndham Basketball',
			game: 3,
			win: 3,
			loss: 0,
			scored: 326,
			conceded: 232,
			ratio: 1.405,
			pct: 1,
			points: 9,
			forms: [
				{ form: 'win' },
				{ form: 'win' },
				{ form: 'win' },
			],
		},
		{
			number: 3,
            show: false,
			playTournamentClass: 'statistics-two__table-one-cell--qualification',
			directionClass: '',
			name: 'Camberwell Dragons',
			game: 5,
			win: 3,
			loss: 2,
			scored: 436,
			conceded: 467,
			ratio: 0.934,
			pct: 0.6,
			points: 9,
			forms: [
				{ form: 'win' },
				{ form: 'loss' },
				{ form: 'win' },
				{ form: 'win' },
				{ form: 'loss' },
			],
		},
		{
			number: 4,
            show: false,
			playTournamentClass: 'statistics-two__table-one-cell--qualification',
			directionClass: 'statistics-two__table-one-cell--up',
			name: 'Keysborought',
			game: 4,
			win: 2,
			loss: 2,
			scored: 359,
			conceded: 338,
			ratio: 1.062,
			pct: 0.5,
			points: 6,
			forms: [
				{ form: 'win' },
				{ form: 'win' },
				{ form: 'loss' },
				{ form: 'loss' },
			],
		},
		{
			number: 5,
            show: false,
			playTournamentClass: 'statistics-two__table-one-cell--qualification',
			directionClass: 'statistics-two__table-one-cell--up',
			name: 'Sanbury Jest',
			game: 2,
			win: 1,
			loss: 1,
			scored: 170,
			conceded: 170,
			ratio: 1,
			pct: 0.5,
			points: 3,
			forms: [
				{ form: 'loss' },
				{ form: 'win' },
			],
		},
		{
			number: 6,
            show: false,
			playTournamentClass: '',
			directionClass: 'statistics-two__table-one-cell--down',
			name: 'Блэкберн Викингс',
			game: 3,
			win: 1,
			loss: 2,
			scored: 201,
			conceded: 238,
			ratio: 0.845,
			pct: 0.333,
			points: 3,
			forms: [
				{ form: 'loss' },
				{ form: 'win' },
				{ form: 'loss' },
			],
		},
		{
			number: 6,
            show: false,
			playTournamentClass: '',
			directionClass: 'statistics-two__table-one-cell--down',
			name: 'Маккиннон Кугарс',
			game: 3,
			win: 1,
			loss: 2,
			scored: 201,
			conceded: 238,
			ratio: 0.845,
			pct: 0.333,
			points: 3,
			forms: [
				{ form: 'loss' },
				{ form: 'win' },
				{ form: 'loss' },
			],
		},
		{
			number: 8,
            show: false,
			playTournamentClass: '',
			directionClass: '',
			name: 'Western Port Steelers',
			game: 4,
			win: 1,
			loss: 3,
			scored: 319,
			conceded: 379,
			ratio: 0.842,
			pct: 0.25,
			points: 3,
			forms: [
				{ form: 'loss' },
				{ form: 'win' },
				{ form: 'loss' },
				{ form: 'loss' },
			],
		},
		{
			number: 9,
            show: false,
			playTournamentClass: '',
			directionClass: 'statistics-two__table-one-cell--down',
			name: 'Bellarine',
			game: 4,
			win: 0,
			loss: 4,
			scored: 293,
			conceded: 340,
			ratio: 0.862,
			pct: 0,
			points: 0,
			forms: [
				{ form: 'loss' },
				{ form: 'loss' },
				{ form: 'loss' },
				{ form: 'loss' },
			],
		},
		{
			number: 9,
            show: false,
			playTournamentClass: '',
			directionClass: 'statistics-two__table-one-cell--down',
			name: 'Мульбурн Тайгерс',
			game: 0,
			win: 0,
			loss: 0,
			scored: 0,
			conceded: 0,
			ratio: 0,
			pct: 0,
			points: 0,
			forms: [],
		},
	]

    const arrRowSeven = [
		{
			number: 6,
			name: 'Western Port Steelers',
			game: 4,
			win: 3,
			percent: 75,
			points: 79.75,
		},
		{
			number: 10,
			name: 'Блэкберн Викингс',
			game: 5,
			win: 2,
			percent: 25,
			points: 70.5,
		},
	]

	return (
		<div className="statistics-six">
            <div className="statistics-six__wrapper">
                <h1 className="statistics-six__title">Биг V (Викториан Стейт Чемпионшип) Раунд 4</h1>
                <div className="statistics-six__info">
                    <div className="statistics-six__info-name">Western Port Steelers</div>
                    <div className="statistics-six__info-date-wrapper">
                        <div className="statistics-six__info-date">15/04/23 - 12:00</div>
                        <button className="statistics-six__info-btn-date-update">Update</button>
                    </div>
                    <div className="statistics-six__info-name">Блэкберн Викингс</div>
                </div>
                <h2 className="statistics-six__name-accent">Следующие матчи</h2>
                <div className="statistics-six__table">
                    <div className="statistics-six__table-header">
                        <div className="statistics-six__table-header-name">Дата</div>
                        <div className="statistics-six__table-header-name">Турнир</div>
                        <div className="statistics-six__table-header-name">Раунд</div>
                        <div className="statistics-six__table-header-name">Матч</div>
                    </div>
                    <div className="statistics-six__table-content">
                        <div className="statistics-six__table-content-names">
                            <div className="statistics-six__table-content-name">Western Port Steelers</div>
                            <div className="statistics-six__table-content-name">100 : 199</div>
                            <div className="statistics-six__table-content-name">Блэкберн Викингс</div>
                        </div>    
                        <div className="statistics-six__table-col-one">
                            <div className="statistics-six__table-col-one-date">15/01/23</div>
                            <div className="statistics-six__table-col-one-name">Таблица</div>
                            <div className="statistics-six__table-col-one-mini-table">
                                <div className="statistics-six__table-col-one-mini-table-num" style={{bottom: '25%'}}>#8</div>
                            </div>
                            <div className="statistics-six__table-col-one-info">0.25%</div>
                        </div>
                        <div className="statistics-six__table-col-two">
                            <div className="statistics-six__table-col-two-title">Биг V (Викториан Стейт Чемпионшип)</div>
                            <div className="statistics-six__table-col-two-info-wrapper">
                                <svg viewBox="0 0 36 36" className="statistics-six__table-col-two-info-chart">
                                    <path className="statistics-six__table-col-two-info-circle-one"
                                        strokeDasharray="100, 100"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path className="statistics-six__table-col-two-info-circle-two"
                                        strokeDasharray="33, 100"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                </svg>
                                <div className="statistics-six__table-col-two-info-content">
                                    <div className="statistics-six__table-col-two-info-content-num">33%</div>
                                    <div className="statistics-six__table-col-two-info-content-text">Результативность</div>
                                </div>
                            </div>
                            <div className="statistics-six__table-col-two-name">Результативность</div>
                            <div className="statistics-six__table-col-two-forms-wrapper">
                                <div className="statistics-six__table-col-two-forms">
                                    <div className="statistics-six__table-col-two-form statistics-six__table-col-two-form--loss">П</div>
                                    <div className="statistics-six__table-col-two-form statistics-six__table-col-two-form--win">В</div>
                                    <div className="statistics-six__table-col-two-form statistics-six__table-col-two-form--loss">П</div>
                                    <div className="statistics-six__table-col-two-form statistics-six__table-col-two-form--loss">П</div>
                                    <div className="statistics-six__table-col-two-form statistics-six__table-col-two-form--win">В</div>
                                    <div className="statistics-six__table-col-two-form statistics-six__table-col-two-form--loss">П</div>
                                </div>
                            </div>
                        </div>
                        <div className="statistics-six__table-col-three">
                            <div className="statistics-six__table-col-three-about">
                                <div className="statistics-six__table-col-three-about-win">
                                    <div className="statistics-six__table-col-three-about-win-count">4</div>
                                    <div className="statistics-six__table-col-three-about-win-text">ПОБЕДЫ</div>
                                </div>
                                <ul className="statistics-six__table-col-three-about-list">
                                    <li className="statistics-six__table-col-three-about-item">
                                        <div className="statistics-six__table-col-three-about-item-text">Самая крупная победа</div>
                                        <div className="statistics-six__table-col-three-about-item-count">106 : 88</div>
                                    </li>
                                    <li className="statistics-six__table-col-three-about-item">
                                        <div className="statistics-six__table-col-three-about-item-text">Всего очков</div>
                                        <div className="statistics-six__table-col-three-about-item-count">457</div>
                                    </li>
                                    <li className="statistics-six__table-col-three-about-item">
                                        <div className="statistics-six__table-col-three-about-item-text">Сред. очки/матч</div>
                                        <div className="statistics-six__table-col-three-about-item-count">91.40</div>
                                    </li>
                                </ul>
                            </div>
                            <div className="statistics-six__table-col-three-info">
                                <div className="statistics-six__table-col-three-info-text">4</div>
                                <div className="statistics-six__table-col-three-info-wrapper">
                                <svg viewBox="0 0 36 36" className="statistics-six__table-col-three-info-chart">
                                    <path className="statistics-six__table-col-three-info-circle-one"
                                        strokeDasharray="100, 100"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path className="statistics-six__table-col-three-info-circle-two-more"
                                        strokeDasharray="40, 100"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path className="statistics-six__table-col-three-info-circle-two"
                                        strokeDasharray="38, 100"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                </svg>
                                <div className="statistics-six__table-col-three-info-content">
                                    <div className="statistics-six__table-col-three-info-content-num">38%</div>
                                    <div className="statistics-six__table-col-three-info-content-text">Результативность</div>
                                </div>
                            </div>
                            </div>
                            <div className="statistics-six__table-col-three-about">
                                <div className="statistics-six__table-col-three-about-win">
                                    <div className="statistics-six__table-col-three-about-win-count">1</div>
                                    <div className="statistics-six__table-col-three-about-win-text">ПОБЕДЫ</div>
                                </div>
                                <ul className="statistics-six__table-col-three-about-list">
                                    <li className="statistics-six__table-col-three-about-item">
                                        <div className="statistics-six__table-col-three-about-item-text">Самая крупная победа</div>
                                        <div className="statistics-six__table-col-three-about-item-count">106 : 88</div>
                                    </li>
                                    <li className="statistics-six__table-col-three-about-item">
                                        <div className="statistics-six__table-col-three-about-item-text">Всего очков</div>
                                        <div className="statistics-six__table-col-three-about-item-count">457</div>
                                    </li>
                                    <li className="statistics-six__table-col-three-about-item">
                                        <div className="statistics-six__table-col-three-about-item-text">Сред. очки/матч</div>
                                        <div className="statistics-six__table-col-three-about-item-count">91.40</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="statistics-six__table-col-two">
                            <div className="statistics-six__table-col-two-title"></div>
                            <div className="statistics-six__table-col-two-info-wrapper">
                                <svg viewBox="0 0 36 36" className="statistics-six__table-col-two-info-chart">
                                    <path className="statistics-six__table-col-two-info-circle-one"
                                        strokeDasharray="100, 100"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path className="statistics-six__table-col-two-info-circle-two"
                                        strokeDasharray="17, 100"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                </svg>
                                <div className="statistics-six__table-col-two-info-content">
                                    <div className="statistics-six__table-col-two-info-content-num">17%</div>
                                    <div className="statistics-six__table-col-two-info-content-text">Результативность</div>
                                </div>
                            </div>
                            <div className="statistics-six__table-col-two-name">Результативность</div>
                            <div className="statistics-six__table-col-two-forms-wrapper">
                                <div className="statistics-six__table-col-two-forms">
                                    <div className="statistics-six__table-col-two-form statistics-six__table-col-two-form--loss">П</div>
                                    <div className="statistics-six__table-col-two-form statistics-six__table-col-two-form--win">П</div>
                                    <div className="statistics-six__table-col-two-form statistics-six__table-col-two-form--loss">П</div>
                                    <div className="statistics-six__table-col-two-form statistics-six__table-col-two-form--loss">В</div>
                                    <div className="statistics-six__table-col-two-form statistics-six__table-col-two-form--win">П</div>
                                    <div className="statistics-six__table-col-two-form statistics-six__table-col-two-form--loss">П</div>
                                </div>
                            </div>
                        </div>
                        <div className="statistics-six__table-col-one statistics-six__table-col-one--right">
                            <div className="statistics-six__table-col-one-name">Таблица</div>
                            <div className="statistics-six__table-col-one-mini-table statistics-six__table-col-one-mini-table--right">
                                <div className="statistics-six__table-col-one-mini-table-num statistics-six__table-col-one-mini-table-num--right" style={{bottom: '33.3%'}}>#6</div>
                            </div>
                            <div className="statistics-six__table-col-one-info">0.333%</div>
                        </div>
                    </div>
                </div>
                <h2 className="statistics-six__name-accent">Следующие матчи</h2>
                <div className="statistics-six__table-one">
                    <div className="statistics-six__table-one-header-row">
                        <div className="statistics-six__table-one-header-cell">Дата</div>
                        <div className="statistics-six__table-one-header-cell">Раунд</div>
                        <div className="statistics-six__table-one-header-cell">Матч</div>
                        <div className="statistics-six__table-one-header-cell">Турнир</div>
                    </div>
                    {arrRowsOne.map((item, index) => (
                        <div key={index} className="statistics-six__table-one-row">
                            <div className="statistics-six__table-one-cell">{item.date}</div>
                            <div className="statistics-six__table-one-cell">{item.round}</div>
                            <div className="statistics-six__table-one-cell">
                                <div className={clsx(
                                    'statistics-six__table-one-cell-text',
                                    {'statistics-six__table-one-cell-text--accent': item.winOne}
                                )}>{item.nameOne}</div>
                                <div className="statistics-six__table-one-cell-text">
                                    <span className={clsx(
                                        'statistics-six__table-one-cell-text-small',
                                        {'statistics-six__table-one-cell-text-small--accent': item.winOne}
                                    )}>{item.scoreOne}</span>&nbsp;:&nbsp;
                                    <span className={clsx(
                                        'statistics-six__table-one-cell-text-small',
                                        {'statistics-six__table-one-cell-text-small--accent': !item.winOne}
                                    )}>{item.scoreTwo}</span>&nbsp;
                                    <span className="statistics-six__table-one-cell-text-small">{item.scoreInfo}</span>
                                </div>
                                <div className={clsx(
                                    'statistics-six__table-one-cell-text',
                                    {'statistics-six__table-one-cell-text--accent': !item.winOne}
                                )}>{item.nameTwo}</div>
                            </div>    
                            <div className="statistics-six__table-one-cell">{item.tournament}</div>
                        </div>
                    ))}
                </div>
                <div className="statistics-six__score">
                    <h2 className="statistics-six__score-title">Общий счёт</h2>
                    <div className="statistics-six__score-wrapper">
                        <div className="statistics-six__score-colors">
                            <div className="statistics-six__score-color" style={{width: `${Score.win/Score.game*100}%`}}></div>
                            <div className="statistics-six__score-color" style={{width: `${100 - (Score.win/Score.game*100)}%`}}></div>
                        </div>
                        <div className="statistics-six__score-percent">
                            <div className="statistics-six__score-percent-text">
                                <span className="statistics-six__score-percent-text-win">{Score.win} ({Score.win/Score.game*100}%)</span>
                            </div>
                            <div className="statistics-six__score-percent-text">
                                <span className="statistics-six__score-percent-text-win">{Score.game - Score.win} ({100 - (Score.win/Score.game*100)}%)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="statistics-six__name-accent">Последние матчи</h2>
                <div className="statistics-two__two-table-columns-wrapper">
                    <div className="statistics-two__two-table-columns">
                        <div className="statistics-two__table-two-wrapper">
                            <div className="statistics-two__table-two">
                                <div className="statistics-two__table-two-header">
                                    <div className="statistics-two__table-two-header-cell">ТУ/Р</div>
                                    <div className="statistics-two__table-two-header-cell">Матч</div>
                                </div>
                                {arrRowTwo.map((item, index) => (
                                    <div key={index} className="statistics-two__table-two-row">
                                        <div className="statistics-two__table-two-cell">{item.title}</div>
                                        <div className={clsx(
                                            'statistics-two__table-two-cell',
                                            {'statistics-two__table-two-cell--accent': item.winOne}
                                        )}>{item.nameOne}</div>
                                        <div className="statistics-two__table-two-cell">
                                            <div className="statistics-two__table-two-cell-text">{item.date}</div>
                                            <div className={clsx(
                                                'statistics-two__table-two-cell-text',
                                                {'statistics-two__table-two-cell-text--accent': item.scoreAccent}
                                            )}>{item.score}</div>
                                        </div>
                                        <div className={clsx(
                                            'statistics-two__table-two-cell',
                                            {'statistics-two__table-two-cell--accent': !item.winOne}
                                        )}>{item.nameTwo}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="statistics-two__table-two-btn-wrapper">
                                <button className="statistics-two__table-two-btn">Показать еще</button>
                            </div>
                        </div>
                        <div className="statistics-two__table-two-wrapper">
                            <div className="statistics-two__table-two">
                                <div className="statistics-two__table-two-header">
                                    <div className="statistics-two__table-two-header-cell">ТУ/Р</div>
                                    <div className="statistics-two__table-two-header-cell">Матч</div>
                                </div>
                                {arrRowThree.map((item, index) => (
                                    <div key={index} className="statistics-two__table-two-row">
                                        <div className="statistics-two__table-two-cell">{item.title}</div>
                                        <div className={clsx(
                                            'statistics-two__table-two-cell',
                                            {'statistics-two__table-two-cell--accent': item.winOne}
                                        )}>{item.nameOne}</div>
                                        <div className="statistics-two__table-two-cell">
                                            <div className="statistics-two__table-two-cell-text">{item.date}</div>
                                            <div className={clsx(
                                                'statistics-two__table-two-cell-text',
                                                {'statistics-two__table-two-cell-text--accent': item.scoreAccent}
                                            )}>{item.score}</div>
                                        </div>
                                        <div className={clsx(
                                            'statistics-two__table-two-cell',
                                            {'statistics-two__table-two-cell--accent': !item.winOne}
                                        )}>{item.nameTwo}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="statistics-two__table-two-btn-wrapper">
                                <button className="statistics-two__table-two-btn">Показать еще</button>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="statistics-six__name-accent">Следующие матчи</h2>
                <div className="statistics-two__two-table-columns-wrapper">
                    <div className="statistics-two__two-table-columns">
                        <div className="statistics-two__table-two-wrapper">
                            <div className="statistics-two__table-two">
                                <div className="statistics-two__table-two-header">
                                    <div className="statistics-two__table-two-header-cell">ТУ/Р</div>
                                    <div className="statistics-two__table-two-header-cell">Матч</div>
                                </div>
                                {arrRowFour.map((item, index) => (
                                    <div key={index} className="statistics-two__table-two-row">
                                        <div className="statistics-two__table-two-cell">{item.title}</div>
                                        <div className={clsx(
                                            'statistics-two__table-two-cell',
                                            {'statistics-two__table-two-cell--accent': item.nameAccent}
                                        )}>{item.nameOne}</div>
                                        <div className="statistics-two__table-two-cell">
                                            <div className="statistics-two__table-two-cell-text">{item.date}</div>
                                            <div className={clsx(
                                                'statistics-two__table-two-cell-text',
                                                {'statistics-two__table-two-cell-text--accent': item.scoreAccent}
                                            )}>{item.score}</div>
                                        </div>
                                        <div className="statistics-two__table-two-cell">{item.nameTwo}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="statistics-two__table-two-btn-wrapper">
                                <button className="statistics-two__table-two-btn">Показать еще</button>
                            </div>
                        </div>
                        <div className="statistics-two__table-two-wrapper">
                            <div className="statistics-two__table-two">
                                <div className="statistics-two__table-two-header">
                                    <div className="statistics-two__table-two-header-cell">ТУ/Р</div>
                                    <div className="statistics-two__table-two-header-cell">Матч</div>
                                </div>
                                {arrRowFive.map((item, index) => (
                                    <div key={index} className="statistics-two__table-two-row">
                                        <div className="statistics-two__table-two-cell">{item.title}</div>
                                        <div className={clsx(
                                            'statistics-two__table-two-cell',
                                            {'statistics-two__table-two-cell--accent': item.nameAccent}
                                        )}>{item.nameOne}</div>
                                        <div className="statistics-two__table-two-cell">
                                            <div className="statistics-two__table-two-cell-text">{item.date}</div>
                                            <div className={clsx(
                                                'statistics-two__table-two-cell-text',
                                                {'statistics-two__table-two-cell-text--accent': item.scoreAccent}
                                            )}>{item.score}</div>
                                        </div>
                                        <div className="statistics-two__table-two-cell">{item.nameTwo}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="statistics-two__table-two-btn-wrapper">
                                <button className="statistics-two__table-two-btn">Показать еще</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="statistics-six__pos">
                    <h2 className="statistics-six__name-accent">Позиция команды</h2>
                    <PositionsChart></PositionsChart>
                </div>
                <div className="statistics-two__two-table-columns-wrapper">
                    <h2 className="statistics-six__name-accent">Биг V (Викториан Стейт Чемпионшип)</h2>
                    <div className="statistics-two__table-one">
                        <div className="statistics-two__table-one-header">
                            <div className="statistics-two__table-one-header-cell">Поз.</div>
                            <div className="statistics-two__table-one-header-cell">Команда</div>
                            <div className="statistics-two__table-one-header-cell">И</div>
                            <div className="statistics-two__table-one-header-cell">В</div>
                            <div className="statistics-two__table-one-header-cell">П</div>
                            <div className="statistics-two__table-one-header-cell">ГЗа/ГПр</div>
                            <div className="statistics-two__table-one-header-cell">Разн.</div>
                            <div className="statistics-two__table-one-header-cell">Соотношение корзин</div>
                            <div className="statistics-two__table-one-header-cell">pct</div>
                            <div className="statistics-two__table-one-header-cell">Очки</div>
                            <div className="statistics-two__table-one-header-cell">Форма</div>
                        </div>
                        {arrRowSix.map((item, index) => (item.show || (!item.show && showTable)) ? (
                            <div key={index} className="statistics-two__table-one-row">
                                <div className={`statistics-two__table-one-cell statistics-two__table-one-cell--number ${item.playTournamentClass} ${item.directionClass}`}>{item.number}</div>
                                <div className="statistics-two__table-one-cell">{item.name}</div>
                                <div className="statistics-two__table-one-cell">{item.game}</div>
                                <div className="statistics-two__table-one-cell">{item.win}</div>
                                <div className="statistics-two__table-one-cell">{item.loss}</div>
                                <div className="statistics-two__table-one-cell">{item.scored}-{item.conceded}</div>
                                <div className="statistics-two__table-one-cell">{item.scored - item.conceded}</div>
                                <div className="statistics-two__table-one-cell">{item.ratio}</div>
                                <div className="statistics-two__table-one-cell">{item.pct}</div>
                                <div className="statistics-two__table-one-cell">{item.points}</div>
                                <div className="statistics-two__table-one-cell statistics-two__table-one-cell--forms">
                                    { item.forms.length > 0
                                        ? <div className="statistics-two__table-one-forms">
                                            {item.forms.map((form, index) => (
                                                <div key={`key-${index}`} className={`statistics-two__table-one-form statistics-two__table-one-form--${form.form}`}>
                                                    { form.form === 'win'? 'В' : 'П' }
                                                </div>
                                            ))} 
                                        </div>
                                        : ''
                                    }
                                </div>
                            </div>

                        ) : null
                    
                        )}
                    </div>
                    <div className={clsx(
                        'statistics-two__table-one-info',
                        {'statistics-two__table-one-info--hidden': !showTable},
                    )}>
                        <p className="statistics-two__table-one-info-text">Если две (или более) команды имеют одинаковое количество очков, следующие факторы помогут выявить победителя:</p>
                        <p className="statistics-two__table-one-info-text">1. Процент побед и поражений</p>
                        <p className="statistics-two__table-one-info-text">2. Очные встречи</p>
                        <ul className="statistics-two__table-one-info-list">
                            <li className="statistics-two__table-one-info-item">Плей-офф</li>
                            <li className="statistics-two__table-one-info-item">Квалификация, Плей-офф</li>
                        </ul>
                    </div>
                    <div className="statistics-six__table-two-btn-wrapper">
                        <button 
                            className="statistics-two__table-two-btn"
                            onClick={() => setShowTable((showTable) => !showTable)}
                        >{ showTable
                            ? 'Скрыть таблицу'
                            : 'Показать всю таблицу'
                        }</button>
                    </div>
                </div>   
                <div className="statistics-two__two-table-columns-wrapper">
                    <h2 className="statistics-two__title">бол/мен</h2>
                    <div className="statistics-two__filter-wrapper">
                        <button className="statistics-two__filter-btn statistics-two__filter-btn--active">Все игры</button>
                        <button className="statistics-two__filter-btn">Домашние игры</button>
                        <button className="statistics-two__filter-btn">Матчи на выезде</button>
                    </div>
                    <div className="statistics-two__filter-two-wrapper">
                        <button className="statistics-two__filter-two-btn statistics-two__filter-two-btn--less">Less</button>
                        <div className="statistics-two__filter-two-select">
                            <span className="statistics-two__filter-two-select-test">165.5</span>
                        </div>
                        <button className="statistics-two__filter-two-btn statistics-two__filter-two-btn--more">More</button>
                    </div>
                    <div className="statistics-two__table-three">
                        <div className="statistics-two__table-three-header">
                            <div className="statistics-two__table-three-header-cell">Поз.</div>
                            <div className="statistics-two__table-three-header-cell">Команда</div>
                            <div className="statistics-two__table-three-header-cell">Сыграно</div>
                            <div className="statistics-two__table-three-header-cell statistics-two__table-three-header-cell--up">Больше</div>
                            <div className="statistics-two__table-three-header-cell statistics-two__table-three-header-cell--up-down">Меньше</div>
                            <div className="statistics-two__table-three-header-cell">Сред. очки/матч</div>
                        </div>
                        {arrRowSeven.map((item, index) => (
                            <div key={index} className="statistics-two__table-three-row">
                                <div className="statistics-two__table-three-cell">{item.number}</div>
                                <div className="statistics-two__table-three-cell">{item.name}</div>
                                <div className="statistics-two__table-three-cell">{item.game}</div>
                                <div className="statistics-two__table-three-cell">{item.win}</div>
                                <div className="statistics-two__table-three-cell">
                                    <div className="statistics-two__table-three-cell-percent-one">{`${item.percent}%`}</div>
                                    <div className="statistics-two__table-three-cell-percent">
                                        <div className="statistics-two__table-three-cell-percent-percent-show" style={{width: `${item.percent}%`}}></div>
                                    </div>
                                    <div className="statistics-two__table-three-cell-percent-two">{`${100 - item.percent}%`}</div>
                                    <div className="statistics-two__table-three-cell-percent-info">{`${item.game - item.win}`}</div>
                                </div>
                                <div className="statistics-two__table-three-cell">{item.points}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
		</div>
	);
}

export default StatisticsSix;