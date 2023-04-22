import { Link } from 'react-router-dom';

function Betting() {
	return (
		<div className="betting">
			<div className="betting__header">
				<Link className="betting__header-btn" to="/profile/">Profile</Link>
				<h1 className="betting__header-title">Мои ставки</h1>
			</div>
            <div className="betting__content">
                <div className="betting__content-top">
                    <div className="betting__content-top-title">История ставок</div>
                    <button  className="betting__content-top-btn">More</button>
                </div>
                <div className="betting__table">
                    <div className="betting__table-top">
                        <div className="betting__table-top-cell">Результат</div>
                        <div className="betting__table-top-cell">Номер ставки</div>
                        <div className="betting__table-top-cell">Дата</div>
                        <div className="betting__table-top-cell">Время</div>
                        <div className="betting__table-top-cell">Сумма</div>
                        <div className="betting__table-top-cell">Статус</div>
                    </div>
                    <ul className="betting__table-list">
                        <li className="betting__table-item">
                            <div className="betting__table-item-cell">Проигрыш</div>
                            <div className="betting__table-item-cell">29847938</div>
                            <div className="betting__table-item-cell">2023-03-31</div>
                            <div className="betting__table-item-cell">20:31:41</div>
                            <div className="betting__table-item-cell">500 руб.</div>
                            <div className="betting__table-item-cell">Линия</div>
                        </li>
                        <li className="betting__table-item">
                            <div className="betting__table-item-cell">Проигрыш</div>
                            <div className="betting__table-item-cell">29847938</div>
                            <div className="betting__table-item-cell">2023-03-31</div>
                            <div className="betting__table-item-cell">20:31:41</div>
                            <div className="betting__table-item-cell">500 руб.</div>
                            <div className="betting__table-item-cell">Линия</div>
                        </li>
                        <li className="betting__table-item">
                            <div className="betting__table-item-cell">Проигрыш</div>
                            <div className="betting__table-item-cell">29847938</div>
                            <div className="betting__table-item-cell">2023-03-31</div>
                            <div className="betting__table-item-cell">20:31:41</div>
                            <div className="betting__table-item-cell">500 руб.</div>
                            <div className="betting__table-item-cell">Линия</div>
                        </li>
                        <li className="betting__table-item">
                            <div className="betting__table-item-cell">Проигрыш</div>
                            <div className="betting__table-item-cell">29847938</div>
                            <div className="betting__table-item-cell">2023-03-31</div>
                            <div className="betting__table-item-cell">20:31:41</div>
                            <div className="betting__table-item-cell">500 руб.</div>
                            <div className="betting__table-item-cell">Линия</div>
                        </li>
                        <li className="betting__table-item">
                            <div className="betting__table-item-cell">Проигрыш</div>
                            <div className="betting__table-item-cell">29847938</div>
                            <div className="betting__table-item-cell">2023-03-31</div>
                            <div className="betting__table-item-cell">20:31:41</div>
                            <div className="betting__table-item-cell">500 руб.</div>
                            <div className="betting__table-item-cell">Линия</div>
                        </li>
                        <li className="betting__table-item">
                            <div className="betting__table-item-cell">Проигрыш</div>
                            <div className="betting__table-item-cell">29847938</div>
                            <div className="betting__table-item-cell">2023-03-31</div>
                            <div className="betting__table-item-cell">20:31:41</div>
                            <div className="betting__table-item-cell">500 руб.</div>
                            <div className="betting__table-item-cell">Линия</div>
                        </li>
                        <li className="betting__table-item">
                            <div className="betting__table-item-cell">Проигрыш</div>
                            <div className="betting__table-item-cell">29847938</div>
                            <div className="betting__table-item-cell">2023-03-31</div>
                            <div className="betting__table-item-cell">20:31:41</div>
                            <div className="betting__table-item-cell">2500 руб.</div>
                            <div className="betting__table-item-cell">Линия</div>
                        </li>
                        <li className="betting__table-item">
                            <div className="betting__table-item-cell">Проигрыш</div>
                            <div className="betting__table-item-cell">29847938</div>
                            <div className="betting__table-item-cell">2023-03-31</div>
                            <div className="betting__table-item-cell">20:31:41</div>
                            <div className="betting__table-item-cell">500 руб.</div>
                            <div className="betting__table-item-cell">Линия</div>
                        </li>
                    </ul>
                </div>
            </div>
		</div>
	);
}

export default Betting;
