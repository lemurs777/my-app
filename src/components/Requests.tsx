import clsx from 'clsx';

function Requests() {

	const arrRequest = [];
	
	return (
		<div className="requests">
			<div className="requests__wrapper">
				<div className="requests__header">
					<h1 className="requests__header-title">Запросы</h1>
					<button className="requests__header-btn">+ Новый запрос</button>
				</div>
				<div className={clsx(
						'requests__content',
						{'requests__content--empty': arrRequest.length === 0}
					)}>
					{ (arrRequest.length === 0) ? (
						<div className="requests__empty">Список текущих запросов пуст</div>
					) : null }
				</div>
			</div>
		</div>
	);
}

export default Requests;