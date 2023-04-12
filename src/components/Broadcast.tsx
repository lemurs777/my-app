import clsx from 'clsx';

function Broadcast() {

	const gamesArr = [
		{
			nameOne: 'Spartak Moscow',
			nameTwo: 'Lokomotiv Moscow',
			isLive: true,
		},
		{
			nameOne: 'Spartak Moscow',
			nameTwo: 'Zenit',
			isLive: false,
		},
		{
			nameOne: 'Dinamo Moscow',
			nameTwo: 'Lokomotiv Moscow',
			isLive: true,
		},
	];

	return (
		<div className="broadcast">
			<div className="broadcast__header">
				<button className="broadcast__header-btn  broadcast__header-btn--lock">Lock</button>
				<h2 className="broadcast__header-title">Broadcast</h2>
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
			<button className="broadcast__btn-more">+ 5 MORE</button>
		</div>
	);
}

export default Broadcast;
