import clsx from 'clsx';
import { useState } from 'react';

import styles from './ModalSettings.module.scss';

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
	];

	const arrSettingsList = [
		{
			title: 'Прием пари',
			titleSmall: false,
			list: [
				{
					name: 'Пари в один клик. Сумма пари:',
					sum: '50 Ꝑ',
					check: true,
				},
				{
					name: 'Пари в один клик. Сумма пари:',
					sum: '150 Ꝑ',
					check: false,
				},
				{
					name: 'Пари в один клик. Сумма пари:',
					sum: '1200 Ꝑ',
					check: false,
				},					
			],
		},
		{
			title: 'Прием пари и подтверждение',
			titleSmall: true,
			list: [
				{
					name: 'Пари в один клик. Сумма пари:',
					sum: '50 Ꝑ',
					check: false,
				},
				{
					name: 'Пари в один клик. Сумма пари:',
					sum: '150 Ꝑ',
					check: true,
				},
				{
					name: 'Пари в один клик. Сумма пари:',
					sum: '1200 Ꝑ',
					check: false,
				},					
			],
		},
		{
			title: 'Любимые пари',
			titleSmall: true,
			list: [
				{
					name: 'Пари в один клик. Сумма пари:',
					sum: '50 Ꝑ',
					check: true,
				},
				{
					name: 'Пари в один клик. Сумма пари:',
					sum: '150 Ꝑ',
					check: false,
				},				
			],
		},
	];

	return (
		<div className={styles.modalSettings}>
			<div className={styles.menu}>
				<div className={styles.menuTitle}>Настройки сайта</div>
				<ul className={styles.menuList}>
					{arrSettings.map((item, index) => (
					<li key={index} className={styles.menuItem}>
						<button className={clsx(
							styles.menuItemBtn,
							{[styles.menuItemBtnActive]: index === showSettings}
						)} onClick={() => setShowSettings(() => index)}>
							<div className={clsx(
								styles.menuItemBtnIcon,
								{[styles.menuItemBtnIconActive]: index === showSettings}
							)}></div>
							<div className={styles.menuItemBtnIconText}>{item.name}</div>
						</button>
					</li>
					))}
				</ul>
				<button className={styles.menuBtn}>Вернуть настройки по умолчанию</button>
			</div>
			<div className={styles.content}>
				{arrSettingsList.map((item, index) => (
					<div key={index} className={styles.contentInner}>
						<div className={clsx(
							styles.contentTitle,
							{[styles.contentTitleSmall]: item.titleSmall}
						)}>{item.title}</div>
						<ul className={styles.checkboxList}>
							{item.list.map((item, index) => (
								<SettingsItem key={index} item={item}/>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}

export default ModalSettings;

interface ModalSettingsType {
	item: {
		name: string;
		sum: string;
		check: boolean;
	}
}

function SettingsItem ( data: ModalSettingsType ) {

	const [isCheck, setIsCheck] = useState(data.item.check);

	const handleCheck = () => {
		setIsCheck(current => !current);
	}
	return (
		<li className={styles.checkboxItem}>
			<label className={styles.checkboxLabel}>
				<input className={styles.checkbox} type="checkbox" checked={data.item.check} onChange={handleCheck}/>
				<div className={clsx(
					styles.check,
					{[styles.checkActive]: isCheck}
				)}></div>
				<div className={styles.checkboxText}>{data.item.name}</div>
			</label>
			<div className={styles.checkboxItemInfo}>{data.item.sum}</div>
		</li>
	);
};
