import { useState } from 'react';
import clsx from 'clsx';

function GameInfo() {

const [isChecked, setIsChecked] = useState(false);

const arrGames = [
	{
		title: 'Counter Strike',
		games: [
			{
			name: 'ESEA Season 35: Advanced Division',
			count: 21,
			live: false,
			class: null
			},
			{
				name: 'EBLAST Premier Fall 2020',
				count: 6,
				live: true,
				class: null
			},
			{
				name: 'Svenska Elitserien 2020 Fall',
				count: 5,
				live: true,
				class: null,
			},
			{
				name: 'ESEA Season 35: Advanced Division',
				count: 4,
				live: false,
				class: 'game-info__item-text-wrapper--germany'
			},
		]
	},
	{
		title: 'Dota 2',
		games: [
			{
				name: 'ESEA Season 35: Advanced Division',
				count: 21,
				live: false,
				class: null
			},
			{
				name: 'EBLAST Premier Fall 2020',
				count: 6,
				live: true,
				class: null
			},
			{
				name: 'Svenska Elitserien 2020 Fall',
				count: 5,
				live: true,
				class: null,
			},
			{
				name: 'ESEA Season 35: Advanced Division',
				count: 4,
				live: false,
				class: 'game-info__item-text-wrapper--germany'
			},
			{
			name: 'ESEA Season 35: Advanced Division',
			count: 21,
			live: false,
			class: null
			},
			{
				name: 'EBLAST Premier Fall 2020',
				count: 6,
				live: true,
				class: null
			},
			{
				name: 'Svenska Elitserien 2020 Fall',
				count: 5,
				live: true,
				class: null,
			},
			{
				name: 'ESEA Season 35: Advanced Division',
				count: 4,
				live: false,
				class: 'game-info__item-text-wrapper--germany'
			},
		],
	},
	{
		title: 'Overwatch',
		games: [
			{
				name: 'ESEA Season 35: Advanced Division',
				count: 21,
				live: false,
				class: null
			},
			{
				name: 'EBLAST Premier Fall 2020',
				count: 6,
				live: true,
				class: null
			},
			{
				name: 'Svenska Elitserien 2020 Fall',
				count: 5,
				live: true,
				class: null,
			},
			{
				name: 'ESEA Season 35: Advanced Division',
				count: 4,
				live: false,
				class: 'game-info__item-text-wrapper--germany'
			},
			{
			name: 'ESEA Season 35: Advanced Division',
			count: 21,
			live: false,
			class: null
			},
			{
				name: 'EBLAST Premier Fall 2020',
				count: 6,
				live: true,
				class: null
			},
			{
				name: 'Svenska Elitserien 2020 Fall',
				count: 5,
				live: true,
				class: null,
			},
			{
				name: 'ESEA Season 35: Advanced Division',
				count: 4,
				live: false,
				class: 'game-info__item-text-wrapper--germany'
			},
		],
	},
];
	
return (
	<div className="game-info scroll">
		<div className="game-info__header">
			<div className="game-info__header-title">LIVE лиги</div>
			<label className="game-info__checkbox-label">
				<input className="game-info__checkbox" type="checkbox" checked={isChecked} onChange={() => setIsChecked((prev) => !prev)} />
			</label>
		</div>
		<div className="game-info__lists-wrapper">
			{arrGames.map((item, index) => (
			<div key={index} className="game-info__list-wrapper">
				<button className="game-info__list-title">{item.title}</button>
				<ul className="game-info__list">
					{item.games.map((game, index) => (
						(isChecked && game.live === true) ?
						<li key={`game-${index}`} className="game-info__item">
							<div className={clsx(
								'game-info__item-text-wrapper',
								{'game-info__item-text-wrapper--live': game.live},
								game.class,
							)}>
								<div className="game-info__item-text">{game.name}</div>
							</div>
							<div className="game-info__item-count">{game.count}</div>
						</li> : (!isChecked) ? 
						<li key={`game-${index}`} className="game-info__item">
							<div className={clsx(
								'game-info__item-text-wrapper',
								{'game-info__item-text-wrapper--live': game.live},
								game.class,
							)}>
								<div className="game-info__item-text">{game.name}</div>
							</div>
							<div className="game-info__item-count">{game.count}</div>
						</li> : null		
					))} 
				</ul>
			</div>
			))}    
		</div>
	</div>
);
}

export default GameInfo;