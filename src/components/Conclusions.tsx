import { Link } from 'react-router-dom';

function Conclusions() {
	return (
		<div className="conclusions">
			<div className="conclusions__header">
				<Link className="conclusions__header-btn" to="/profile/">Profile</Link>
				<h1 className="conclusions__header-title">Транзакции</h1>
			</div>
            <div className="conclusions__content">
                <div className="conclusions__content-top">
                    <div className="conclusions__content-top-title">История выводов</div>
                    <button  className="conclusions__content-top-btn">More</button>
                </div>
                <div className="conclusions__table">
                    <div className="conclusions__table-top">
                        <div className="conclusions__table-top-cell">Номер</div>
                        <div className="conclusions__table-top-cell">Счет пополнения</div>
                        <div className="conclusions__table-top-cell">Дата</div>
                        <div className="conclusions__table-top-cell">Время</div>
                        <div className="conclusions__table-top-cell">Сумма</div>
                        <div className="conclusions__table-top-cell">Статус</div>
                    </div>
                    <ul className="conclusions__table-list">
                        <li className="conclusions__table-item">
                            <div className="conclusions__table-item-cell">187323</div>
                            <div className="conclusions__table-item-cell">
                                <div className="conclusions__table-item-cell-top">Visa Platinum</div>
                                <div className="conclusions__table-item-cell-bottom">**** 5534</div>
                            </div>
                            <div className="conclusions__table-item-cell">2023-03-31</div>
                            <div className="conclusions__table-item-cell">20:31:41</div>
                            <div className="conclusions__table-item-cell">- 83 096,25 руб.</div>
                            <div className="conclusions__table-item-cell">Обрабатывается</div>
                        </li>
                        <li className="conclusions__table-item">
                            <div className="conclusions__table-item-cell">187323</div>
                            <div className="conclusions__table-item-cell">
                                <div className="conclusions__table-item-cell-top">Visa Platinum</div>
                                <div className="conclusions__table-item-cell-bottom">**** 5534</div>
                            </div>
                            <div className="conclusions__table-item-cell">2023-03-31</div>
                            <div className="conclusions__table-item-cell">20:31:41</div>
                            <div className="conclusions__table-item-cell">- 83 096,25 руб.</div>
                            <div className="conclusions__table-item-cell">Выплачен</div>
                        </li>
                        <li className="conclusions__table-item">
                            <div className="conclusions__table-item-cell">187323</div>
                            <div className="conclusions__table-item-cell">
                                <div className="conclusions__table-item-cell-top">Visa Platinum</div>
                                <div className="conclusions__table-item-cell-bottom">**** 5534</div>
                            </div>
                            <div className="conclusions__table-item-cell">2023-03-31</div>
                            <div className="conclusions__table-item-cell">20:31:41</div>
                            <div className="conclusions__table-item-cell">- 83 096,25 руб.</div>
                            <div className="conclusions__table-item-cell">Выплачен</div>
                        </li>
                        <li className="conclusions__table-item">
                            <div className="conclusions__table-item-cell">187323</div>
                            <div className="conclusions__table-item-cell">
                                <div className="conclusions__table-item-cell-top">Visa Platinum</div>
                                <div className="conclusions__table-item-cell-bottom">**** 5534</div>
                            </div>
                            <div className="conclusions__table-item-cell">2023-03-31</div>
                            <div className="conclusions__table-item-cell">20:31:41</div>
                            <div className="conclusions__table-item-cell">- 83 096,25 руб.</div>
                            <div className="conclusions__table-item-cell">Выплачен</div>
                        </li>
                        <li className="conclusions__table-item">
                            <div className="conclusions__table-item-cell">187323</div>
                            <div className="conclusions__table-item-cell">
                                <div className="conclusions__table-item-cell-top">Visa Platinum</div>
                                <div className="conclusions__table-item-cell-bottom">**** 5534</div>
                            </div>
                            <div className="conclusions__table-item-cell">2023-03-31</div>
                            <div className="conclusions__table-item-cell">20:31:41</div>
                            <div className="conclusions__table-item-cell">- 83 096,25 руб.</div>
                            <div className="conclusions__table-item-cell">Обрабатывается</div>
                        </li>
                        <li className="conclusions__table-item">
                            <div className="conclusions__table-item-cell">187323</div>
                            <div className="conclusions__table-item-cell">
                                <div className="conclusions__table-item-cell-top">Visa Platinum</div>
                                <div className="conclusions__table-item-cell-bottom">**** 5534</div>
                            </div>
                            <div className="conclusions__table-item-cell">2023-03-31</div>
                            <div className="conclusions__table-item-cell">20:31:41</div>
                            <div className="conclusions__table-item-cell">- 83 096,25 руб.</div>
                            <div className="conclusions__table-item-cell">Обрабатывается</div>
                        </li>
                        <li className="conclusions__table-item">
                            <div className="conclusions__table-item-cell">187323</div>
                            <div className="conclusions__table-item-cell">
                                <div className="conclusions__table-item-cell-top">Visa Platinum</div>
                                <div className="conclusions__table-item-cell-bottom">**** 5534</div>
                            </div>
                            <div className="conclusions__table-item-cell">2023-03-31</div>
                            <div className="conclusions__table-item-cell">20:31:41</div>
                            <div className="conclusions__table-item-cell">- 83 096,25 руб.</div>
                            <div className="conclusions__table-item-cell">Обрабатывается</div>
                        </li>
                        <li className="conclusions__table-item">
                            <div className="conclusions__table-item-cell">187323</div>
                            <div className="conclusions__table-item-cell">
                                <div className="conclusions__table-item-cell-top">Visa Platinum</div>
                                <div className="conclusions__table-item-cell-bottom">**** 5534</div>
                            </div>
                            <div className="conclusions__table-item-cell">2023-03-31</div>
                            <div className="conclusions__table-item-cell">20:31:41</div>
                            <div className="conclusions__table-item-cell">- 83 096,25 руб.</div>
                            <div className="conclusions__table-item-cell">Обрабатывается</div>
                        </li>
                    </ul>
                </div>
            </div>
		</div>
	);
}

export default Conclusions;