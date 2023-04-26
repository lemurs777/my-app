import QRCode from '../assets/images/apps-qr-x2.min.png';

function Apps() {
    return (        
        <div className="apps">
            <div className="apps__content">
                <h1 className="apps__title">Скачивай Приложение <span className="apps__title--accent">PARI!</span></h1>
                <ul className="apps__list">
                    <li className="apps__item">Ставки на спорт и киберспорт</li>
                    <li className="apps__item">Простая и удобная регистрация</li>
                    <li className="apps__item">Удобные платежные методы</li>
                    <li className="apps__item">Быстрый вывод денег</li>
                </ul>
                <div className="apps__qr-wrapper">
                    <img className="apps__qr-image" src={QRCode} alt="QR Code" width="140" height="140"/>
                    <p className="apps__qr-text">Наведите камеру на QR-код, чтобы скачать приложение</p>
                </div>
                <div className="apps__btns-wrapper">
                    <a className="apps__btn apps__btn--app-store" href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">Download on the App Store</a>
                    <a className="apps__btn apps__btn--google-play" href="https://play.google.com/store/games" target="_blank" rel="noreferrer">Get it on Google Play</a>
                </div>
            </div>
        </div>
    );
    }
    
    export default Apps;