
function Multiple() {

    const betsInfo = {
        betsArr : [
            {
                nameOne: 'Bayern Munich',
                nameTwo: 'Eintracht Frankfurt',
                betInfo: '3:2',
                betInfoLive: false,
                betInfoMore: 'Exact score',
                betInfoCoefficient: '3.05',
            },
            {
                nameOne: 'Borussia Dortmund',
                nameTwo: 'Schalke',
                betInfo: 'Stoke City (-1.0)',
                betInfoLive: true,
                betInfoMore: '1st card: Who will destroy the next.',
                betInfoCoefficient: '2.63',
                betInfoCoefficientOld: '2.10',
            },
            {
                nameOne: 'Stuttgart',
                nameTwo: 'Cologne',
                betInfo: 'X2',
                betInfoLive: false,
                betInfoMore: 'Double outcome',
                betInfoCoefficient: '1.75',
            },
        ],
        bonus: '1.5',
        bet: '500',
        betCurrency: '€',
    };

    console.log(betsInfo);

	return (
		<div className="multiple">
            <div className="multiple__light-bg">
                <div className="multiple__header">
                    <button className="multiple__header-btn  multiple__header-btn--settings">Settings</button>
                    <h2 className="multiple__header-title">MULTIPLE (3)</h2>
                    <button className="multiple__header-btn  multiple__header-btn--delete">Delete</button>
                </div>
                <ul className="multiple__list">
                    <li className="multiple__item">
                        <div className="multiple__item-top">
                            <button className="multiple__item-top-btn multiple__item-top-btn--check">Check</button>
                            <div className="multiple__item-top-names">Bayern Munich - Eintracht Frankfurt</div>
                            <button className="multiple__item-top-btn  multiple__item-top-btn--close">Close</button>
                        </div>
                        <div className="multiple__item-bottom">
                            <div className="multiple__item-bottom-left">
                                <div className="multiple__item-bottom-left-title">
                                    3:2
                                </div>
                                <div className="multiple__item-bottom-left-info">
                                    Exact score
                                </div>                               
                            </div>
                            <div className="multiple__item-bottom-right">
                                <div className="multiple__item-bottom-right-coefficient">
                                    3.05
                                </div>
                            </div>
                        </div>
                    </li> 
                    <li className="multiple__item">
                        <div className="multiple__item-top">
                            <button className="multiple__item-top-btn  multiple__item-top-btn--check">Check</button>
                            <div className="multiple__item-top-names">Borussia Dortmund - Schalke</div>
                            <button className="multiple__item-top-btn  multiple__item-top-btn--close">Close</button>
                        </div>
                        <div className="multiple__item-bottom">
                            <div className="multiple__item-bottom-left">
                                <div className="multiple__item-bottom-left-title multiple__item-bottom-left-title--live">
                                    Stoke City (-50.0)
                                </div>
                                <div className="multiple__item-bottom-left-info">
                                    Exact score
                                </div>                          
                            </div>
                            <div className="multiple__item-bottom-right">
                                <div className="multiple__item-bottom-right-coefficient multiple__item-bottom-right-coefficient--down">
                                    2.63
                                </div>
                                <div className="multiple__item-bottom-right-old-coefficient">
                                    1122.10
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="multiple__item">
                        <div className="multiple__item-top">
                            <button className="multiple__item-top-btn  multiple__item-top-btn--check">Check</button>
                            <div className="multiple__item-top-names">Borussia Dortmund - Schalke</div>
                            <button className="multiple__item-top-btn  multiple__item-top-btn--close">Close</button>
                        </div>
                        <div className="multiple__item-bottom">
                            <div className="multiple__item-bottom-left">
                                <div className="multiple__item-bottom-left-title multiple__item-bottom-left-title--live">
                                    Stoke City (-1.0)
                                </div>
                                <div className="multiple__item-bottom-left-info">
                                    1st card: Who will destroy the next.
                                </div>                          
                            </div>
                            <div className="multiple__item-bottom-right">
                                <div className="multiple__item-bottom-right-coefficient multiple__item-bottom-right-coefficient--upp">
                                    992.63
                                </div>
                                <div className="multiple__item-bottom-right-old-coefficient">
                                    22.10
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="multiple__item">
                        <div className="multiple__item-top">
                            <button className="multiple__item-top-btn multiple__item-top-btn--check multiple__item-top-btn--check-ok">Check</button>
                            <div className="multiple__item-top-names">Stuttgart - Cologne</div>
                            <button className="multiple__item-top-btn  multiple__item-top-btn--close">Close</button>
                        </div>
                        <div className="multiple__item-bottom">
                            <div className="multiple__item-bottom-left">
                                <div className="multiple__item-bottom-left-title">
                                    X2
                                </div>
                                <div className="multiple__item-bottom-left-info">
                                    Double outcome
                                </div>                              
                            </div>
                            <div className="multiple__item-bottom-right">
                                <div className="multiple__item-bottom-right-coefficient">
                                    1.75
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
			</div>
            <div className="multiple__total-wrapper">
                <div className="multiple__total-content">
                    <div className="multiple__total-bonus">
                        <div className="multiple__total-bonus-text">Multiples bonus</div>
                        <div className="multiple__total-bonus-count">1.5</div>
                    </div>
                    <div className="multiple__total">
                        <div className="multiple__total-text">Total odds:</div>
                        <div className="multiple__total-count">21.06</div>
                    </div>
                </div>
            </div>
            <div className="multiple__bet-payout">
                <div className="multiple__bet">
                    <div className="multiple__bet-text">Bet amount</div>
                    <div className="multiple__bet-count">500 €</div>
                </div>
                <div className="multiple__payout">
                    <div className="multiple__payout-text">Payout up to</div>
                    <div className="multiple__payout-count">10530 €</div>
                </div>
            </div>
            <div className="multiple__btn-bet-wrapper">
                <button className="multiple__btn-bet">Place a bet</button>
            </div>
		</div>
	);
}

export default Multiple;