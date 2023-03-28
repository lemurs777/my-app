import { Link } from 'react-router-dom';

function Sports() {
    return (
    <section className="sports">
        <ul className="sports__list">
            <li className="sports__item">
                <Link className="sports__item-link sports__item-link--top" to="/">Top</Link>
            </li>
            <li className="sports__item">
                <Link className="sports__item-link sports__item-link--bookmarks" to="/">BOOKMARKS</Link>
            </li>
            <li className="sports__item">
                <Link className="sports__item-link sports__item-link--soccer" to="/">SOCCER</Link>
            </li>
            <li className="sports__item">
                <Link className="sports__item-link sports__item-link--hockey" to="/">HOCKEY</Link>
            </li>
            <li className="sports__item">
                <Link className="sports__item-link sports__item-link--basketball" to="/">BASKETBALL</Link>
            </li>
            <li className="sports__item">
                <Link className="sports__item-link sports__item-link--tennis" to="/">TENNIS</Link>
            </li>
            <li className="sports__item">
                <Link className="sports__item-link sports__item-link--regby" to="/">RUGBY</Link> 
            </li>
            <li className="sports__item">
                <Link className="sports__item-link sports__item-link--volleyball" to="/">VOLLEYBALL</Link>
            </li>
            <li className="sports__item">
                <Link className="sports__item-link sports__item-link--mma" to="/">MMA</Link>
            </li>
        </ul>
        <div className="sports__best">
            <h2 className="sports__best-title">Today’s best moments</h2>
            <ul className="sports__best-list">
                <li className="sports__best-item">
                    <Link className="sports__best-link sports__best-link--soccet" to="/">
                        <h3 className="sports__best-link-title">
                            <span className="sports__best-link-title-one">
                                Phoenix Suns
                            </span>
                            <span className="sports__best-link-title-two">
                                Atlanta Hawks
                            </span>
                        </h3>
                        <div className="sports__best-link-live">
                            live
                        </div>
                    </Link>
                </li>
                <li className="sports__best-item">
                    <Link className="sports__best-link sports__best-link--basketball" to="/">
                        <h3 className="sports__best-link-title">
                            <span className="sports__best-link-title-one">
                                Manchester United
                            </span>
                            <span className="sports__best-link-title-two">
                                Galatasaray
                            </span>
                        </h3>
                        <div className="sports__best-link-live">
                            live
                        </div>
                    </Link>
                </li>
                <li className="sports__best-item">
                    <Link className="sports__best-link sports__best-link--hockey" to="/">
                        <h3 className="sports__best-link-title">
                            <span className="sports__best-link-title-one">
                                Chicago Bulls
                            </span>
                            <span className="sports__best-link-title-two">
                                Brooklyn Nets
                            </span>
                        </h3>
                        <div className="sports__best-link-live">
                            live
                        </div>
                    </Link>
                </li>
                <li className="sports__best-item">
                    <Link className="sports__best-link sports__best-link--soccet" to="/">
                        <h3 className="sports__best-link-title">
                            <span className="sports__best-link-title-one">
                                Chelsea
                            </span>
                            <span className="sports__best-link-title-two">
                                Barcelona
                            </span>
                        </h3>
                        <div className="sports__best-link-live">
                            live
                        </div>
                    </Link>
                </li>
                <li className="sports__best-item">
                    <Link className="sports__best-link sports__best-link--volleyball" to="/">
                        <h3 className="sports__best-link-title">
                            <span className="sports__best-link-title-one">
                                Marin Cilic
                            </span>
                            <span className="sports__best-link-title-two">
                                Andrey Rublev
                            </span>
                        </h3>
                        <div className="sports__best-link-live">
                            live
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    </section>
    );
}

export default Sports;
