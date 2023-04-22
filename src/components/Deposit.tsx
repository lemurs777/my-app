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
                    <ul className="deposit__sublist">
                        <li className="deposit__subitem">
                            <div className="deposit__subitem-info">
                                <h3 className="deposit__subitem-title">Банковская карта</h3>
                                <div className="deposit__subitem-sum">100₽ - 20000₽</div>
                            </div>
                            <button className="deposit__subitem-btn">More</button>
                        </li>
                    </ul>
                </li>
                <li className="deposit__item">
                    <h2 className="deposit__item-title">QIWI</h2>
                    <ul className="deposit__sublist">
                        <li className="deposit__subitem">
                            <div className="deposit__subitem-info">
                                <h3 className="deposit__subitem-title">QIWI кошелёк</h3>
                                <div className="deposit__subitem-sum">100₽ - 20000₽</div>
                            </div>
                            <button className="deposit__subitem-btn">More</button>
                        </li>
                    </ul>
                </li>
                <li className="deposit__item">
                    <h2 className="deposit__item-title">Мобильные платежи</h2>
                    <ul className="deposit__sublist">
                        <li className="deposit__subitem">
                            <div className="deposit__subitem-info">
                                <h3 className="deposit__subitem-title">Билайн</h3>
                                <div className="deposit__subitem-sum">100₽ - 20000₽</div>
                            </div>
                            <button className="deposit__subitem-btn">More</button>
                        </li>
                        <li className="deposit__subitem">
                            <div className="deposit__subitem-info">
                                <h3 className="deposit__subitem-title">МТС</h3>
                                <div className="deposit__subitem-sum">100₽ - 20000₽</div>
                            </div>
                            <button className="deposit__subitem-btn">More</button>
                        </li>
                        <li className="deposit__subitem">
                            <div className="deposit__subitem-info">
                                <h3 className="deposit__subitem-title">Теле 2</h3>
                                <div className="deposit__subitem-sum">100₽ - 20000₽</div>
                            </div>
                            <button className="deposit__subitem-btn">More</button>
                        </li>
                    </ul>
                </li>
                <li className="deposit__item">
                    <h2 className="deposit__item-title">Интернет кошельки</h2>
                    <ul className="deposit__sublist">
                        <li className="deposit__subitem">
                            <div className="deposit__subitem-info">
                                <h3 className="deposit__subitem-title">Яндекс кошелёк</h3>
                                <div className="deposit__subitem-sum">100₽ - 20000₽</div>
                            </div>
                            <button className="deposit__subitem-btn">More</button>
                        </li>
                    </ul>
                </li>
            </ul>
		</div>
	);
}

export default Deposit;