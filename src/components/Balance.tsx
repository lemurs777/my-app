function Balance() {
return (
	<div className="balance">
		<div className="balance__header">
			<button className="balance__copy">
				ID 537073408
			</button>
			<button className="balance__update">
				Update information
			</button>
			<button className="balance__show">
				Show information
			</button>
		</div>
		<div className="balance__count">
			1850.00₽
		</div>
		<div className="balance__text">
			Баланс
		</div>
		<div className="balance__btn-wrapper">
			<button className="balance__btn balance__btn--add">
				+ Пополнить
			</button>
			<button className="balance__btn balance__btn--verification">
				Начать верификацию
			</button>
		</div>
		<div className="balance__info-wrapper">
			<div className="balance__info-game">
				<div className="balance__info-game-count">1850.00₽</div>
				<div className="balance__info-game-text">В игре</div>
			</div>
			<div className="balance__info-out">
				<div className="balance__info-out-count">0.00₽</div>
				<div className="balance__info-out-text">На выплату</div>
			</div>
		</div>
	</div>
);
}

export default Balance;
