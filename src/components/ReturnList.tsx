import { useState } from 'react';
import clsx from 'clsx';

function ReturnList() {

	const [isChecked, setIsChecked] = useState(false);
	const [isTabActive, setIsTabActive] = useState('one');
	const [isCheckedOne, setIsCheckedOne] = useState(false);
	const [isCheckedTwo, setIsCheckedTwo] = useState(false);
	const [isCheckedThree, setIsCheckedThree] = useState(false);
	const [isCheckedFour, setIsCheckedFour] = useState(false);
	const [isCheckedFive, setIsCheckedFive] = useState(false);
	const [isCheckedSix, setIsCheckedSix] = useState(false);

	return (
		<div className="return">
            <h1 className="return__title">Ответственная игра</h1>
			<ul className="return__tab-list">
				<li className="return__tab-item">
					<button className={clsx(
						'return__tab-item-btn',
						{'return__tab-item-btn--active': isTabActive === 'one'},
					)} onClick={() => setIsTabActive((tabActive) => 'one')}>Самоограничения</button>
				</li>
				<li className="return__tab-item">
					<button className={clsx(
						'return__tab-item-btn',
						{'return__tab-item-btn--active': isTabActive === 'two'},
					)} onClick={() => setIsTabActive((tabActive) => 'two')}>Лимиты на пополнение</button>
				</li>
				<li className="return__tab-item">
					<button className={clsx(
						'return__tab-item-btn',
						{'return__tab-item-btn--active': isTabActive === 'three'},
					)} onClick={() => setIsTabActive((tabActive) => 'three')}>Лимиты игровой сессии</button>
				</li>
			</ul>
			<ul className="return__tab-content-list">
				<li className={clsx(
						'return__tab-content-item',
						{'return__tab-content-item--active': isTabActive === 'one'},
					)}>
					<div className="return__tab-content-one">
						<div className="return__tab-content-one-hand"></div>
						<div className="return__tab-content-one-info">
							<div className="return__tab-content-one-info-text">
								Режим “Самоисключение из игры” не может быть отменён или прерван до тех пор, пока не истечет срок его действия. Ты не сможешь пользоваться аккаунтом на протяжении всего срока самоисключения.
							</div>
							<label className={clsx(
								'return__tab-content-one-info-label',
								{'return__tab-content-one-info-label--active': isChecked},
							)}>
								<input className="return__tab-content-one-info-checkbox" type="checkbox" checked={isChecked} onChange={() => setIsChecked((check) => !check)} />Включить ограничение сессии
							</label>
							<div className="return__tab-content-one-info-name">Самоисключение из игры</div>
							<div className="return__tab-content-one-info-select">Выберите срок самоисключения</div>
							<button className="return__tab-content-one-info-save">Сохранить</button>
						</div>
					</div>
				</li>
				<li className={clsx(
					'return__tab-content-item',
					{'return__tab-content-item--active': isTabActive === 'two'},
				)}>
					<div className="return__tab-content-two">
						<div className="return__tab-content-two-title">Текущие ограничения</div>
						<div className="return__tab-content-two-info">Не установлен</div>
						<div className="return__tab-content-two-title-two">Будущие ограничения</div>
						<ul className="return__tab-content-two-list">
							<li className="return__tab-content-two-item">
								<label className={clsx(
									'return__tab-content-two-item-label',
									{'return__tab-content-two-item-label--active': isCheckedOne},
								)}>
									<input className="return__tab-content-two-item-checkbox" type="checkbox" checked={isCheckedOne} onChange={() => setIsCheckedOne((checkOne) => !checkOne)} />Дневной лимит
								</label>
								<input className="return__tab-content-two-item-input" type="text" placeholder="Введите сумму"/>
							</li>
							<li className="return__tab-content-two-item">
								<label className={clsx(
									'return__tab-content-two-item-label',
									{'return__tab-content-two-item-label--active': isCheckedTwo},
								)}>
									<input className="return__tab-content-two-item-checkbox" type="checkbox" checked={isCheckedTwo} onChange={() => setIsCheckedTwo((checkTwo) => !checkTwo)} />Недельный лимит
								</label>
								<input className="return__tab-content-two-item-input" type="text" placeholder="Введите сумму"/>
							</li>
							<li className="return__tab-content-two-item">
								<label className={clsx(
									'return__tab-content-two-item-label',
									{'return__tab-content-two-item-label--active': isCheckedThree},
								)}>
									<input className="return__tab-content-two-item-checkbox" type="checkbox" checked={isCheckedThree} onChange={() => setIsCheckedThree((checkThree) => !checkThree)} />Месячный лимит
								</label>
								<input className="return__tab-content-two-item-input" type="text" placeholder="Введите сумму"/>
							</li>
						</ul>
					</div>
				</li>
				<li className={clsx(
					'return__tab-content-item',
					{'return__tab-content-item--active': isTabActive === 'three'},
				)}>
					<div className="return__tab-content-three">
						<div className="return__tab-content-three-title">Текущие ограничения</div>
						<div className="return__tab-content-three-info">Не установлен</div>
						<div className="return__tab-content-three-title-two">Будущие ограничения</div>
						<ul className="return__tab-content-three-list">
							<li className="return__tab-content-three-item">
								<div className="return__tab-content-three-item-left">
									<label className={clsx(
										'return__tab-content-three-item-label',
										{'return__tab-content-three-item-label--active': isCheckedFour},
									)}>
										<input className="return__tab-content-three-item-checkbox" type="checkbox" checked={isCheckedFour} onChange={() => setIsCheckedFour((checkFour) => !checkFour)} />Дневной лимит
									</label>
									<div className="return__tab-content-three-item-text">Не установлен</div>
								</div>
								<div className="return__tab-content-three-item-right">
									<div className="return__tab-content-three-item-line"></div>
									<ul className="return__tab-content-three-item-line-list">
										<li className="return__tab-content-three-item-line-item">
											<button className="return__tab-content-three-item-line-item-btn return__tab-content-three-item-line-item-btn--active">0 ч.</button>
										</li>
										<li className="return__tab-content-three-item-line-item">
											<button className="return__tab-content-three-item-line-item-btn">6 ч.</button>
										</li>
										<li className="return__tab-content-three-item-line-item">
											<button className="return__tab-content-three-item-line-item-btn">12 ч.</button>
										</li>
										<li className="return__tab-content-three-item-line-item">
											<button className="return__tab-content-three-item-line-item-btn">18 ч.</button>
										</li>
										<li className="return__tab-content-three-item-line-item">
											<button className="return__tab-content-three-item-line-item-btn">24 ч.</button>
										</li>
									</ul>
								</div>
							</li>
							<li className="return__tab-content-three-item">
								<div className="return__tab-content-three-item-left">
									<label className={clsx(
										'return__tab-content-three-item-label',
										{'return__tab-content-three-item-label--active': isCheckedFive},
									)}>
										<input className="return__tab-content-three-item-checkbox" type="checkbox" checked={isCheckedFive} onChange={() => setIsCheckedFive((checkFive) => !checkFive)} />Недельный лимит
									</label>
									<div className="return__tab-content-three-item-text">Не установлен</div>
								</div>
								<div className="return__tab-content-three-item-right">
									<div className="return__tab-content-three-item-line"></div>
									<ul className="return__tab-content-three-item-line-list">
										<li className="return__tab-content-three-item-line-item">
											<button className="return__tab-content-three-item-line-item-btn return__tab-content-three-item-line-item-btn--active">0 ч.</button>
										</li>
										<li className="return__tab-content-three-item-line-item">
											<button className="return__tab-content-three-item-line-item-btn">1 д.</button>
										</li>
										<li className="return__tab-content-three-item-line-item">
											<button className="return__tab-content-three-item-line-item-btn">2 д.</button>
										</li>
										<li className="return__tab-content-three-item-line-item">
											<button className="return__tab-content-three-item-line-item-btn">3 д.</button>
										</li>
										<li className="return__tab-content-three-item-line-item">
											<button className="return__tab-content-three-item-line-item-btn">4 д.</button>
										</li>
										<li className="return__tab-content-three-item-line-item">
											<button className="return__tab-content-three-item-line-item-btn">5 д.</button>
										</li>
										<li className="return__tab-content-three-item-line-item">
											<button className="return__tab-content-three-item-line-item-btn">6 д.</button>
										</li>
										<li className="return__tab-content-three-item-line-item">
											<button className="return__tab-content-three-item-line-item-btn">7 д.</button>
										</li>
									</ul>
								</div>
							</li>
							<li className="return__tab-content-three-item">
								<div className="return__tab-content-three-item-left">
									<label className={clsx(
										'return__tab-content-three-item-label',
										{'return__tab-content-three-item-label--active': isCheckedSix},
									)}>
										<input className="return__tab-content-three-item-checkbox" type="checkbox" checked={isCheckedSix} onChange={() => setIsCheckedSix((checkSix) => !checkSix)} />Месячный лимит
									</label>
									<div className="return__tab-content-three-item-text">Не установлен</div>
								</div>
								<div className="return__tab-content-three-item-right">
									<div className="return__tab-content-three-item-line"></div>
									<ul className="return__tab-content-three-item-line-list">
										<li className="return__tab-content-three-item-line-item">
											<button className="return__tab-content-three-item-line-item-btn return__tab-content-three-item-line-item-btn--active">0 ч.</button>
										</li>
										<li className="return__tab-content-three-item-line-item">
											<button className="return__tab-content-three-item-line-item-btn">5 д.</button>
										</li>
										<li className="return__tab-content-three-item-line-item">
											<button className="return__tab-content-three-item-line-item-btn">10 д.</button>
										</li>
										<li className="return__tab-content-three-item-line-item">
											<button className="return__tab-content-three-item-line-item-btn">15 д.</button>
										</li>
										<li className="return__tab-content-three-item-line-item">
											<button className="return__tab-content-three-item-line-item-btn">20 д.</button>
										</li>
										<li className="return__tab-content-three-item-line-item">
											<button className="return__tab-content-three-item-line-item-btn">25 д.</button>
										</li>
										<li className="return__tab-content-three-item-line-item">
											<button className="return__tab-content-three-item-line-item-btn">1 м.</button>
										</li>
									</ul>
								</div>
							</li>
						</ul>
						<button className="return__tab-content-three-btn" disabled>Установить</button>
					</div>
				</li>
			</ul>
        </div>
	);
}

export default ReturnList;