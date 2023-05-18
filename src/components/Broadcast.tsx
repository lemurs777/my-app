import clsx from 'clsx';

import BroadcastLive from '../assets/images/broadcast-live-x2.min.jpg';
/*import broadcastLiveBest1 from '../assets/images/broadcast-live-best-1.min.jpg';
import broadcastLiveBest2 from '../assets/images/broadcast-live-best-2.min.jpg';
import broadcastLiveBest3 from '../assets/images/broadcast-live-best-3.min.jpg';*/

function Broadcast() {

	const gamesArr = [
		{
			nameOne: 'Бавария',
			nameTwo: 'Айнтрахт Франкфурт',
			isLive: true,
		},
	];

	/*const liveBestArr = [
		{
			img: broadcastLiveBest1,
			alt: 'Best Moment',
		},
		{
			img: broadcastLiveBest2,
			alt: 'Best Moment',
		},
		{
			img: broadcastLiveBest3,
			alt: 'Best Moment',
		},
		{
			img: broadcastLiveBest2,
			alt: 'Best Moment',
		},
		{
			img: broadcastLiveBest1,
			alt: 'Best Moment',
		},
		{
			img: broadcastLiveBest3,
			alt: 'Best Moment',
		},
		{
			img: broadcastLiveBest2,
			alt: 'Best Moment',
		},
		{
			img: broadcastLiveBest3,
			alt: 'Best Moment',
		},
	];*/

	return (
		<div className="broadcast">
			<div className="broadcast__header">
				<button className="broadcast__header-btn  broadcast__header-btn--lock">Lock</button>
				<h2 className="broadcast__header-title">Трансляция</h2>
				<button className="broadcast__header-btn  broadcast__header-btn--arrow">Open</button>
			</div>
			<ul className="broadcast__list">
				{gamesArr.map((gamesItem, index) => (
					<li key={index} className={clsx(
						'broadcast__item',
						{'broadcast__item--live': gamesItem.isLive}
					)}>
						{gamesItem.nameOne} - {gamesItem.nameTwo}
					</li>
				))}
			</ul>
			<img className="broadcast__live-img" src={BroadcastLive} alt="Live" />
			<div className="broadcast__best">
				<h3 className="broadcast__statistics-title">Лучшие моменты</h3>
			</div>
			<div className="broadcast__statistics">
				<h3 className="broadcast__statistics-title">Статистика</h3>
				<ul className="broadcast__statistics-list">
					<li className="broadcast__statistics-item">
						<span className="broadcast__statistics-count broadcast__statistics-count--accent">64</span>
						<span className="broadcast__statistics-name">Удары</span>
						<span className="broadcast__statistics-count">63</span>
					</li>
					<li className="broadcast__statistics-item">
						<span className="broadcast__statistics-count">16</span>
						<span className="broadcast__statistics-name">В цель</span>
						<span className="broadcast__statistics-count broadcast__statistics-count--accent">17</span>
					</li>
					<li className="broadcast__statistics-item">
						<span className="broadcast__statistics-count">36</span>
						<span className="broadcast__statistics-name">Владение %</span>
						<span className="broadcast__statistics-count broadcast__statistics-count--accent">64</span>
					</li>
					<li className="broadcast__statistics-item">
						<span className="broadcast__statistics-count">0</span>
						<span className="broadcast__statistics-name">Угловые</span>
						<span className="broadcast__statistics-count broadcast__statistics-count--accent">1</span>
					</li>
					<li className="broadcast__statistics-item">
						<span className="broadcast__statistics-count broadcast__statistics-count--accent">3</span>
						<span className="broadcast__statistics-name">Офсайды</span>
						<span className="broadcast__statistics-count">1</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Broadcast;
