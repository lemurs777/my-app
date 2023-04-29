import { Link } from 'react-router-dom';

import PromoMainBanner1 from '../assets/images/promo-main-banner-1-x2.min.jpg';
import PromoListImg1 from '../assets/images/promo-list-img-1-x2.min.png';
import PromoListImg2 from '../assets/images/promo-list-img-2-x2.min.png';
import PromoListImg3 from '../assets/images/promo-list-img-3-x2.min.png';

function PromotionPage(){

	return (
		<div className="promotion">
            <img className="promotion__bannner" src={PromoMainBanner1} alt="Banner" />
            <div className="promotion__info-wrapper">
                <div className="promotion__info">
                    <div className="promotion__info-top">
                        <div className="promotion__info-top-dates">02.07.2020 - 03.07.2020</div>
                        <h1 className="promotion__info-top-title">Ставь на киберспорт и выиграй спец. призы</h1>
                        <div className="promotion__info-top-content">
                            <p className="promotion__info-top-text">Правила акции очень просты.</p>
                            <p className="promotion__info-top-text">В период с 05.04.2021 по 27.04.2021 делайте ставки на любую из игр категории <Link className="promotion__info-top-link" to="/promotions/">киберспорт</Link> и станьте победителем розыгрыша 9999₽.</p>
                            <p className="promotion__info-top-text">Чем больше Вы ставите, тем больше ваши шансы выиграть главный приз!</p>
                        </div>
                    </div>
                    <div className="promotion__info-about">
                        <p className="promotion__info-about-text">Чем больше Вы ставите, тем больше ваши шансы выиграть главный приз!</p>
                        <ul className="promotion__info-about-list">
                            <li className="promotion__info-about-item">
                                <img className="promotion__info-about-item-img" src={PromoListImg1} alt="Step 1" width="90" height="90" />
                            </li>
                            <li className="promotion__info-about-item">
                                <img className="promotion__info-about-item-img" src={PromoListImg2} alt="Step 2" width="90" height="90" />
                            </li>
                            <li className="promotion__info-about-item">
                                <img className="promotion__info-about-item-img" src={PromoListImg3} alt="Step 3" width="90" height="90" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="promotion__tasks">
                    <h2 className="promotion__tasks-title">Вы готовы побеждать?</h2>
                    <div className="promotion__tasks-name">Задачи</div>
                    <ul className="promotion__tasks-list">
                        <li className="promotion__tasks-item"></li>
                        <li className="promotion__tasks-item"></li>
                    </ul>
                    <button className="promotion__tasks-btn promotion__tasks-btn--disable">Забрать приз</button>
                </div>
            </div>
		</div>
	);
};

export default PromotionPage;