import { Link } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';

function FaqSmallList() {

	const [isCategory, setIsCategory] = useState("bet");

	const updateCategory = (category: string) => {
		setIsCategory((currentValue) => (currentValue = category));
	};

	const categoryList = [
		{
			name: "Ставки",
			category: "bet",
		},
		{
			name: "Технические вопросы",
			category: "technical",
		},
		{
			name: "Личные данные",
			category: "personal",
		},
	];

	const faqList = [
		{
			question: "Как сделать ставку?",
			category: "bet",
		},
		{
			question: "На что можно ставить в PARI?",
			category: "bet",
		},
		{
			question: "Как выбирать тип ставки?",
			category: "bet",
		},
		{
			question: "Как продать ставку? Как продать ставку? Как продать ставку?",
			category: "bet",
		},
		{
			question: "Можно ли отменить ставку?",
			category: "bet",
		},
		{
			question: "Каков минимальный и максимальный размер ставки?",
			category: "bet",
		},
		{
			question: "Как задать технический вопрос 1?",
			category: "technical",
		},
		{
			question: "Как задать технический вопрос 2?",
			category: "technical",
		},
		{
			question: "Как задать технический вопрос 3?",
			category: "technical",
		},
		{
			question: "Как изменить личные данные 1?",
			category: "personal",
		},
		{
			question: "Как изменить личные данные 2?",
			category: "personal",
		},
		{
			question: "Как изменить личные данные 3?",
			category: "personal",
		},
	];

	return (
	<div className="faq-big-list">
		<label className="faq-big-list__search-label">
			<input className="faq-big-list__search" type="text" placeholder="Поиск по вопросам"/>
			<svg className="faq-big-list__search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path className="faq-big-list__search-icon-path" d="M15.7 14.3L11.5 10.1C11.3 9.9 11 9.8 10.7 9.8C11.5 8.8 12 7.4 12 6C12 2.7 9.3 0 6 0C2.7 0 0 2.7 0 6C0 9.3 2.7 12 6 12C7.4 12 8.8 11.5 9.8 10.6C9.8 10.9 9.8 11.2 10.1 11.4L14.3 15.6C14.5 15.8 14.8 15.9 15 15.9C15.2 15.9 15.5 15.8 15.7 15.6C16.1 15.3 16.1 14.7 15.7 14.3ZM6 10.5C3.5 10.5 1.5 8.5 1.5 6C1.5 3.5 3.5 1.5 6 1.5C8.5 1.5 10.5 3.5 10.5 6C10.5 8.5 8.5 10.5 6 10.5Z" fill="#898989"/>
			</svg>
		</label>
		<div className="faq-big-list__main-nav">
			<h1 className="faq-big-list__main-nav-title">Вопрос-ответ</h1>
			<Link className="faq-big-list__main-nav-link" to="/sitemap">Задать вопрос</Link>
		</div>
		<ul className="faq-big-list__filters">
			{categoryList.map((categoryItem, index) =>( 
				<li key={index} className="faq-big-list__filter">
					<button className={clsx(
						'faq-big-list__filter-btn',
						{'faq-big-list__filter-btn--active': categoryItem.category === isCategory}
					)} onClick={() => updateCategory(categoryItem.category)}>{categoryItem.name}</button>
				</li>
			))}
		</ul>
		<div className="faq-big-list__wrapper">
			<ul className="faq-big-list__list">
				{faqList.map((faqItem, index) => (faqItem.category === isCategory) ? ( 
					<li key={index}className="faq-big-list__item">
						<button className="faq-big-list__item-btn">
							<div className="faq-big-list__item-btn-title">{faqItem.question}</div>
							<div className="faq-big-list__item-btn-icon"></div>
						</button>
					</li>
					) : null
				)}
			</ul>
		</div>
	</div>
	);
}

export default FaqSmallList;