function Broadcast() {
	return (
		<div className="broadcast">
			<div className="broadcast__header">
				<button className="broadcast__header-btn  broadcast__header-btn--lock">Lock</button>
				<h2 className="broadcast__header-title">Broadcast</h2>
				<button className="broadcast__header-btn  broadcast__header-btn--arrow">Open</button>
			</div>
			<ul className="broadcast__list">
				<li className="broadcast__item broadcast__item--live">Spartak Moscow - Lokomotiv Moscow</li>
				<li className="broadcast__item">Spartak Moscow - Lokomotiv Moscow</li>
				<li className="broadcast__item broadcast__item--live">Dinamo Kiev - Dinamo Moscow</li>
				<li className="broadcast__item broadcast__item--live">Spartak Moscow - Lokomotiv Moscownewersleep</li>
			</ul>
			<button className="broadcast__btn-more">+ 5 MORE</button>
		</div>
	);
}

export default Broadcast;
