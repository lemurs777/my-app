import { ModalType } from './types';

import { useState } from 'react';
import clsx from 'clsx';

import styles from './ModalSupport.module.scss';

function ModalSupport (props: ModalType) {

	const [showContent, setShowContent] = useState(-1);

	const updateContent = (index: number) => {
		setShowContent((currentIndex) => 
			(currentIndex === -1 && currentIndex !== index)
			? currentIndex = index
			: (currentIndex === index) ? currentIndex = -1 :  currentIndex = index
		);
	}

	const supportList = [
		{
			question: 'Как зарегистрироваться в приложении?',
			answer: `
				<p>1 Зарегистрироваться в приложении, заполнив все необходимые поля в форме регистрации.</p>
				<p>2 Подтвердить свой аккаунт по почте, если это требуется приложением.</p>
				<p>3 Активировать бонус, если он не был активирован автоматически. Для этого нужно найти соответствующую кнопку или ввести промокод при регистрации.</p>
				<p>4 Удостовериться, что выполнены все условия для получения бонуса. Например, для получения бонуса за регистрацию может потребоваться сделать первую ставку или пополнить счет на определенную сумму.</p>
				<p>5 Получить бонус на свой бонусный счет, который можно использовать для совершения ставок.</p>
			`,
		},
		{
			question: 'Как пополнить баланс своего аккаунта?',
			answer: `
				<p>1 Зарегистрироваться в приложении, заполнив все необходимые поля в форме регистрации.</p>
				<p>2 Подтвердить свой аккаунт по почте, если это требуется приложением.</p>
				<p>3 Активировать бонус, если он не был активирован автоматически. Для этого нужно найти соответствующую кнопку или ввести промокод при регистрации.</p>
				<p>4 Удостовериться, что выполнены все условия для получения бонуса. Например, для получения бонуса за регистрацию может потребоваться сделать первую ставку или пополнить счет на определенную сумму.</p>
				<p>5 Получить бонус на свой бонусный счет, который можно использовать для совершения ставок.</p>
			`,
		},
		{
			question: 'Как вывести выигранные средства?',
			answer: `
				<p>1 Зарегистрироваться в приложении, заполнив все необходимые поля в форме регистрации.</p>
				<p>2 Подтвердить свой аккаунт по почте, если это требуется приложением.</p>
				<p>3 Активировать бонус, если он не был активирован автоматически. Для этого нужно найти соответствующую кнопку или ввести промокод при регистрации.</p>
				<p>4 Удостовериться, что выполнены все условия для получения бонуса. Например, для получения бонуса за регистрацию может потребоваться сделать первую ставку или пополнить счет на определенную сумму.</p>
				<p>5 Получить бонус на свой бонусный счет, который можно использовать для совершения ставок.</p>
			`,
		},
		{
			question: 'Как использовать промокоды?',
			answer: `
				<p>1 Зарегистрироваться в приложении, заполнив все необходимые поля в форме регистрации.</p>
				<p>2 Подтвердить свой аккаунт по почте, если это требуется приложением.</p>
				<p>3 Активировать бонус, если он не был активирован автоматически. Для этого нужно найти соответствующую кнопку или ввести промокод при регистрации.</p>
				<p>4 Удостовериться, что выполнены все условия для получения бонуса. Например, для получения бонуса за регистрацию может потребоваться сделать первую ставку или пополнить счет на определенную сумму.</p>
				<p>5 Получить бонус на свой бонусный счет, который можно использовать для совершения ставок.</p>
			`,
		},
		{
			question: 'Как получить бонус за регистрацию?',
			answer: `
				<p>1 Зарегистрироваться в приложении, заполнив все необходимые поля в форме регистрации.</p>
				<p>2 Подтвердить свой аккаунт по почте, если это требуется приложением.</p>
				<p>3 Активировать бонус, если он не был активирован автоматически. Для этого нужно найти соответствующую кнопку или ввести промокод при регистрации.</p>
				<p>4 Удостовериться, что выполнены все условия для получения бонуса. Например, для получения бонуса за регистрацию может потребоваться сделать первую ставку или пополнить счет на определенную сумму.</p>
				<p>5 Получить бонус на свой бонусный счет, который можно использовать для совершения ставок.</p>
			`,
		}
	]


	return (
		<div className={styles.modalSupport}>
			<h2 className={styles.title}>Поддержка</h2>
			<p className={styles.text}>Часто задаваемые вопросы</p>
			<ul className={styles.supportList}>
				{supportList.map((item, index) => ( 
					<li key={index} className={styles.supportItem}>
						<button className={clsx(
							styles.btn,
							{[styles.btnActive] : index === showContent}
						)} onClick={() => updateContent(index)}>{item.question}</button>
						{ index === showContent ? (
							<div className={styles.content} dangerouslySetInnerHTML={{__html: item.answer}}></div>
						) : null }
					</li>
				))}
			</ul>
		</div>
	);
}

export default ModalSupport;