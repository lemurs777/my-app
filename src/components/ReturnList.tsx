
function ReturnList() {

	return (
		<div className="return">
            <h1 className="return__title">Ответственная игра</h1>
			<ul className="return__tab-list">
				<li className="return__tab-item">
					<button className="return__tab-item-btn return__tab-item-btn--active">Самоограничения</button>
				</li>
				<li className="return__tab-item">
					<button className="return__tab-item-btn">Лимиты на пополнение</button>
				</li>
				<li className="return__tab-item">
					<button className="return__tab-item-btn">Лимиты игровой сессии</button>
				</li>
			</ul>
			<ul className="return__tab-content-list">
				<li className="return__tab-content-item">

				</li>
			</ul>
        </div>
	);
}

export default ReturnList;