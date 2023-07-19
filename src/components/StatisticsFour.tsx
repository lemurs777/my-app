import { 
	TableLeagueCustomFilter,
	TableLeagueCustom,
} from '../components';

import arrTables from '../data/dataStatisticsFour';

function StatisticsFour() {

	const dataLeagueTable = arrTables.dataLeagueTable;

	const arrRowTwo = arrTables.arrRowTwo;

	return (
		<div className="statistics-four">
			<div className="statistics-four__wrapper">
				<div className="statistics-four__table-league-wrapper">
					<TableLeagueCustomFilter />
					<TableLeagueCustom data={dataLeagueTable}/>
				</div>
				<h2 className="statistics-four__title">Форма</h2>
				<div className="statistics-four__top-wrapper">
                    <div className="statistics-four__filter-wrapper">
                        <button className="statistics-four__filter-btn statistics-four__filter-btn--active">Все игры</button>
                        <button className="statistics-four__filter-btn">Домашние игры</button>
                        <button className="statistics-four__filter-btn">Матчи на выезде</button>
                    </div>
                    <button className="statistics-four__filter-select-wrapper">
                        Раунд <span className="statistics-four__filter-select">3</span>
                    </button>
                </div>
                <div className="statistics-four__bottom-wrapper">
                    <div className="statistics-four__bottom-text">Количество матчей</div>
                    <div className="statistics-four__bottom-text">2</div>
                    <div className="statistics-four__bottom-text">4</div>
                    <div className="statistics-four__bottom-text">5</div>
                </div>
				<div className="statistics-four__table-two">
					<div className="statistics-four__table-two-header">
						<div className="statistics-four__table-two-header-cell">Поз.</div>
						<div className="statistics-four__table-two-header-cell">Команда</div>
						<div className="statistics-four__table-two-header-cell">ГЗ</div>
						<div className="statistics-four__table-two-header-cell">ГП</div>
                        <div className="statistics-four__table-two-header-cell">Разн</div>
                        <div className="statistics-four__table-two-header-cell">Сыграно</div>
						<div className="statistics-four__table-two-header-cell">Очки</div>
						<div className="statistics-four__table-two-header-cell">Форма</div>
                        <div className="statistics-four__table-two-header-cell">Следующий оппонент</div>
					</div>
					{arrRowTwo.map((item, index) => (
						<div key={index} className="statistics-four__table-two-row">
                            <div className="statistics-four__table-two-cell">{item.number}</div>
							<div className="statistics-four__table-two-cell">{item.name}</div>
							<div className="statistics-four__table-two-cell">{item.scored}</div>
							<div className="statistics-four__table-two-cell">{item.conceded}</div>
							<div className="statistics-four__table-two-cell">{item.scored - item.conceded}</div>
							<div className="statistics-four__table-two-cell">{item.game}</div>
							<div className="statistics-four__table-two-cell statistics-four__table-two-cell--points">
                                <div className="statistics-four__table-two-points">
                                    <div className="statistics-four__table-two-points-percent" style={{width: `${item.percent}%`}}></div>
                                </div>
                                <div className="statistics-four__table-two-points-text">{item.points}</div>
                            </div>
                            <div className="statistics-four__table-two-cell statistics-four__table-two-cell--forms">
								{ item.forms.length > 0
									? <div className="statistics-four__table-two-forms">
										{item.forms.map((form, index) => (
											<div key={`key-${index}`} className={`statistics-four__table-two-form statistics-four__table-two-form--${form.form}`}>
												{ form.form === 'win'? 'В' : 'П' }
											</div>
										))} 
									</div>
									: null
								}
							</div>
                            <div className="statistics-four__table-two-cell">{item.next}</div>
						</div>
					))}
				</div>	
			</div>
		</div>
	);
}

export default StatisticsFour;