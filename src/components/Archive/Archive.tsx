import { Link } from 'react-router-dom';

import { 
	StatisticsNavigation,
} from '../';

import styles from './Archive.module.scss';

function Archive() {

	const arrChampionship = [
		{
			name: 'Big V 2023',
			first: '',
			second: '',
			link: '/statistics/overview',
		},
		{
			name: 'Big V 2022',
			first: 'Хьюм Сити',
			second: 'Wundham Basketball',
			link: '/statistics/overview',
		},
		{
			name: 'Big V 2021',
			first: 'Маккиннос Кургас',
			second: 'Хьюм Сити',
			link: '/statistics/overview',
		},
		{
			name: 'Big V 2019',
			first: 'Маккиннос Кургас',
			second: 'Wundham Basketball',
			link: '/statistics/overview',
		},
		{
			name: 'Big V 2018',
			first: 'Хьюм Сити',
			second: 'Рингвуд Хокс',
			link: '/statistics/overview',
		},
		{
			name: 'Big V 2017',
			first: 'Keysborought',
			second: 'Рингвуд Хокс',
			link: '/statistics/overview',
		},
		{
			name: 'Big V 2016',
			first: 'Рингвуд Хокс',
			second: 'Keysborought',
			link: '/statistics/overview',
		},
	];

	return (
		<div className={styles.archive}>
			<StatisticsNavigation name="archive"/>
			<div className={styles.wrapper}>
				<div className={styles.mainWrapper}>
					<div className={styles.title}>Архив</div>
					<div className={styles.top}>
						<div className={styles.topCell}>Сезон</div>
						<div className={styles.topCell}>Чемпион</div>
						<div className={styles.topCell}>Второе место</div>
					</div>
					{arrChampionship.map((item, index) => (
						<Link 
							key={index}
							to={item.link}
							className={styles.link}
						>
							<div className={styles.linkCell}>{item.name}</div>
							<div className={styles.linkCell}>{item.first}</div>
							<div className={styles.linkCell}>{item.second}</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default Archive;
