function Multiple() {
	return (
		<div className="multiple">
            <div className="multiple__light-bg">
                <div className="multiple__header">
                    <button className="multiple__header-btn  multiple__header-btn--settings">Settings</button>
                    <h2 className="multiple__header-title">Broadcast</h2>
                    <button className="multiple__header-btn  multiple__header-btn--delete">Delete</button>
                </div>
                <ul className="multiple__list">
                    <li className="multiple__item">
                        <div className="multiple__item-top">
                            <button className="multiple__item-top-btn  multiple__item-top-btn--check">Check</button>
                            <div className="multiple__item-top-names">Bayern Munich - Eintracht Frankfurt</div>
                            <button className="multiple__item-top-btn  multiple__item-top-btn--close">Close</button>
                        </div>
                    </li>
                    <li className="multiple__item">
                    <div className="multiple__item-top">
                            <button className="multiple__item-top-btn  multiple__item-top-btn--check">Check</button>
                            <div className="multiple__item-top-names">Borussia Dortmund - Schalke</div>
                            <button className="multiple__item-top-btn  multiple__item-top-btn--close">Close</button>
                        </div>
                    </li>
                    <li className="multiple__item">
                        <div className="multiple__item-top">
                            <button className="multiple__item-top-btn  multiple__item-top-btn--check">Check</button>
                            <div className="multiple__item-top-names">Stuttgart - Cologne</div>
                            <button className="multiple__item-top-btn  multiple__item-top-btn--close">Close</button>
                        </div>
                    </li>
                </ul>
            </div>
		</div>
	);
}

export default Multiple;