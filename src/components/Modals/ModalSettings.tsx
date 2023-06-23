import clsx from 'clsx';
import { useState } from 'react';

interface ModalType {
	toggleModal: () => void;
}

function ModalSettings (props: ModalType) {

	const [showSettings, setShowSettings] = useState(0);

	const arrSettings = [
		{
			name: 'Вид росписи событий',
		},
		{
			name: 'Вид росписи событий',
		},
		{
			name: 'Вид росписи событий',
		},
		{
			name: 'Вид росписи событий',
		},
		{
			name: 'Вид росписи событий',
		},
		{
			name: 'Вид росписи событий',
		},
		{
			name: 'Вид росписи событий',
		},
	]

	return (
		<div className="modal-settings">
			<div className="modal-settings__menu">
				<div className="modal-settings__menu-title">Настройки сайта</div>
				<ul className="modal-settings__menu-list">
					{arrSettings.map((item, index) => (
					<li key={index} className="modal-settings__menu-item">
						<button className={clsx(
							'modal-settings__menu-item-btn',
							{'modal-settings__menu-item-btn--active': index === showSettings}
						)} onClick={() => setShowSettings(() => index)}>
							<div className="modal-settings__menu-item-btn-icon"></div>
							<div className="modal-settings__menu-item-btn-text">{item.name}</div>
						</button>
					</li>
					))}
				</ul>
				<button className="modal-settings__menu-btn">Вернуть настройки по умолчанию</button>
			</div>
			<div className="modal-settings__content">
				<div className="modal-settings__content-title">Прием пари</div>
				<ul className="modal-settings__checkbox-list">
					<li className="modal-settings__checkbox-item">
						<label className="modal-settings__checkbox-label">
							<input className="modal-settings__checkbox" type="checkbox"/>
							<div className="modal-settings__check"></div>
							<div className="modal-settings__checkbox-text">Пари в один клик. Сумма пари:</div>
						</label>
						<div className="modal-settings__checkbox-item-info">50 Ꝑ</div>
					</li>
					<li className="modal-settings__checkbox-item">
						<label className="modal-settings__checkbox-label">
							<input className="modal-settings__checkbox" type="checkbox"/>
							<div className="modal-settings__check"></div>
							<div className="modal-settings__checkbox-text">Пари в один клик. Сумма пари:</div>
						</label>
						<div className="modal-settings__checkbox-item-info">150 Ꝑ</div>
					</li>
					<li className="modal-settings__checkbox-item">
						<label className="modal-settings__checkbox-label">
							<input className="modal-settings__checkbox" type="checkbox"/>
							<div className="modal-settings__check"></div>
							<div className="modal-settings__checkbox-text">Пари в один клик. Сумма пари:</div>
						</label>
						<div className="modal-settings__checkbox-item-info">1200 Ꝑ</div>
					</li>
				</ul>
				<div className="modal-settings__content-title modal-settings__content-title--small">Прием пари и подтверждение</div>
				<ul className="modal-settings__checkbox-list">
					<li className="modal-settings__checkbox-item">
						<label className="modal-settings__checkbox-label">
							<input className="modal-settings__checkbox" type="checkbox"/>
							<div className="modal-settings__check"></div>
							<div className="modal-settings__checkbox-text">Пари в один клик. Сумма пари:</div>
						</label>
						<div className="modal-settings__checkbox-item-info">50 Ꝑ</div>
					</li>
					<li className="modal-settings__checkbox-item">
						<label className="modal-settings__checkbox-label">
							<input className="modal-settings__checkbox" type="checkbox"/>
							<div className="modal-settings__check"></div>
							<div className="modal-settings__checkbox-text">Пари в один клик. Сумма пари:</div>
						</label>
						<div className="modal-settings__checkbox-item-info">150 Ꝑ</div>
					</li>
					<li className="modal-settings__checkbox-item">
						<label className="modal-settings__checkbox-label">
							<input className="modal-settings__checkbox" type="checkbox"/>
							<div className="modal-settings__check"></div>
							<div className="modal-settings__checkbox-text">Пари в один клик. Сумма пари:</div>
						</label>
						<div className="modal-settings__checkbox-item-info">1200 Ꝑ</div>
					</li>
				</ul>
				<div className="modal-settings__content-title modal-settings__content-title--small"> Любимые пари</div>
				<ul className="modal-settings__checkbox-list">
					<li className="modal-settings__checkbox-item">
						<label className="modal-settings__checkbox-label">
							<input className="modal-settings__checkbox" type="checkbox"/>
							<div className="modal-settings__check"></div>
							<div className="modal-settings__checkbox-text">Пари в один клик. Сумма пари:</div>
						</label>
						<div className="modal-settings__checkbox-item-info">50 Ꝑ</div>
					</li>
					<li className="modal-settings__checkbox-item">
						<label className="modal-settings__checkbox-label">
							<input className="modal-settings__checkbox" type="checkbox"/>
							<div className="modal-settings__check"></div>
							<div className="modal-settings__checkbox-text">Пари в один клик. Сумма пари:</div>
						</label>
						<div className="modal-settings__checkbox-item-info">150 Ꝑ</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default ModalSettings;