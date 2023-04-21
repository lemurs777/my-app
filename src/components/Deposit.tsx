import { Link } from 'react-router-dom';

function Deposit() {
	return (
		<div className="deposit">
			<div className="deposit__header">
				<Link className="deposit__header-btn" to="/profile/">Profile</Link>
				<h1 className="deposit__header-title">Пополнение счёта</h1>
			</div>
            <div className="deposit__top-wrapper">
                <div className="deposit__top">
                    <div className="deposit__top-text">Сумма пополнения</div>
                    <div className="deposit__top-sum">8500₽</div>
                </div>
            </div>
            <ul className="deposit__list">
                <li className="deposit__item">
                    <h2 className="deposit__item-title">Банковские карты</h2>
                </li>
                <li className="deposit__item">
                    <h2 className="deposit__item-title">QIWI</h2>
                </li>
                <li className="deposit__item">
                    <h2 className="deposit__item-title">Мобильные платежи</h2>
                </li>
                <li className="deposit__item">
                    <h2 className="deposit__item-title">Интернет кошельки</h2>
                </li>
            </ul>
		</div>
	);
}

export default Deposit;