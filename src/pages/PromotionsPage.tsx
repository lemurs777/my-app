import { Link } from 'react-router-dom';

import PromoBanner1 from '../assets/images/promo-banner-1-x2.min.jpg';
import PromoBanner2 from '../assets/images/promo-banner-2-x2.min.jpg';

function PromotionsPage(){
	return (
        <div className="promotions">
            <section className="promotions__banner">

            </section>
            <section className="promotions__info">
                <h2 className="promotions__title">Акции</h2>
                <ul className="promotions__list">
                    <li className="promotions__item">
                        <Link className="promotions__item-link" to="/promotions/">
                            <img className="promotions__item-img" src={PromoBanner1} alt="Promotion" />
                            <div className="promotions__item-dates">02.07.2020 - 03.07.2020</div>
                            <h3 className="promotions__item-title">Получи броню от Parimatch во время игр..</h3>
                            <p className="promotions__item-text">Покупка бронежилетов в каждом раунде CS:GO – важная инвестиция в игру, которая повысит ваши шансы на победу.</p>
                        </Link>
                    </li>
                    <li className="promotions__item">
                        <Link className="promotions__item-link" to="/promotions/">
                            <img className="promotions__item-img" src={PromoBanner2} alt="Promotion" />
                            <div className="promotions__item-dates">02.07.2020 - 03.07.2020</div>
                            <h3 className="promotions__item-title">Заводи двигатель и получи 50 фриспинов</h3>
                            <p className="promotions__item-text">Вам знакомо то сильное чувство, которое вы испытываете, когда едете быстро, чувствуете прилив адреналина, и ваше сердце начинает биться намного быстрее?</p>
                        </Link>
                    </li>
                    <li className="promotions__item">
                        <Link className="promotions__item-link" to="/promotions/">
                            <img className="promotions__item-img" src={PromoBanner1} alt="Promotion" />
                            <div className="promotions__item-dates">02.07.2020 - 03.07.2020</div>
                            <h3 className="promotions__item-title">Получи броню от Parimatch во время игр..</h3>
                            <p className="promotions__item-text">Покупка бронежилетов в каждом раунде CS:GO – важная инвестиция в игру, которая повысит ваши шансы на победу.</p>
                        </Link>
                    </li>
                </ul>
            </section>
            <section className="promotions__info">
                <h2 className="promotions__title">Бонусы</h2>
                <ul className="promotions__list">
                    <li className="promotions__item">
                        <Link className="promotions__item-link" to="/promotions/">
                            <img className="promotions__item-img" src={PromoBanner2} alt="Promotion" />
                            <div className="promotions__item-dates">02.07.2020 - 03.07.2020</div>
                            <h3 className="promotions__item-title">Заводи двигатель и получи 50 фриспинов</h3>
                            <p className="promotions__item-text">Вам знакомо то сильное чувство, которое вы испытываете, когда едете быстро, чувствуете прилив адреналина, и ваше сердце начинает биться намного быстрее?</p>
                        </Link>
                    </li>
                    <li className="promotions__item">
                        <Link className="promotions__item-link" to="/promotions/">
                            <img className="promotions__item-img" src={PromoBanner1} alt="Promotion" />
                            <div className="promotions__item-dates">02.07.2020 - 03.07.2020</div>
                            <h3 className="promotions__item-title">Получи броню от Parimatch во время игр..</h3>
                            <p className="promotions__item-text">Покупка бронежилетов в каждом раунде CS:GO – важная инвестиция в игру, которая повысит ваши шансы на победу.</p>
                        </Link>
                    </li>
                    <li className="promotions__item">
                        <Link className="promotions__item-link" to="/promotions/">
                            <img className="promotions__item-img" src={PromoBanner2} alt="Promotion" />
                            <div className="promotions__item-dates">02.07.2020 - 03.07.2020</div>
                            <h3 className="promotions__item-title">Заводи двигатель и получи 50 фриспинов</h3>
                            <p className="promotions__item-text">Вам знакомо то сильное чувство, которое вы испытываете, когда едете быстро, чувствуете прилив адреналина, и ваше сердце начинает биться намного быстрее?</p>
                        </Link>
                    </li>
                </ul>
            </section>
        </div>
	);
};

export default PromotionsPage;