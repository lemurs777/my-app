import clsx from 'clsx';
import { useState } from 'react';

type PrevNextGamesData = {
	title: string | null,
	dataTable: Array<{
		title: string,
		nameOne: string,
		winOne: boolean,
		date: string,
		score: string | null,
		nameTwo: string,
	}>;
};

function TableNextPrevGames(
	{ data } : {data : PrevNextGamesData}
) {
	
	const [showAllTable, setShowAllTable] = useState(false);

	const defaultShowRows = 5;

	return (
		<div className="next-prev-game-table">
			{data.title !== null ? (
				<h2 className="next-prev-game-table__title">{data.title}</h2>
			) : null }
			<div className="next-prev-game-table__table">
				<div className="next-prev-game-table__header">
					<div className="next-prev-game-table__header-cell">ТУ/Р</div>
					<div className="next-prev-game-table__header-cell">Матч</div>
				</div>
				{data.dataTable.map((item, index) => (index <= defaultShowRows || (index > defaultShowRows && showAllTable)) ? (
					<div key={index} className="next-prev-game-table__row">
						<div className="next-prev-game-table__cell">{item.title}</div>
						<div className={clsx(
							'next-prev-game-table__cell',
							{'next-prev-game-table__cell--accent': item.winOne && item.score !== null}
						)}>{item.nameOne}</div>
						<div className="next-prev-game-table__cell">
							<div className="next-prev-game-table__cell-text">{item.date}</div>
							{item.score !== null ? (
								<div className="next-prev-game-table__cell-text next-prev-game-table__cell-text--accent">{item.score}</div>
							) : (
								<div className="next-prev-game-table__cell-text">- : -</div>
							)}
						</div>
						<div className={clsx(
							'next-prev-game-table__cell',
							{'next-prev-game-table__cell--accent': !item.winOne && item.score !== null}
						)}>{item.nameTwo}</div>
					</div>
				) : null ) }
			</div>
			<div className="next-prev-game-table__btn-wrapper">
				<button 
					className="next-prev-game-table__btn"
					onClick={() => setShowAllTable((showAllTable) => !showAllTable)}
				>{ showAllTable
					? 'Скрыть таблицу'
					: 'Показать таблицу'
				}</button>
			</div>
		</div>
	);
}

export default TableNextPrevGames;