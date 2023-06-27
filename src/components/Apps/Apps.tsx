import clsx from 'clsx';

import styles from './Apps.module.scss';

import QRCode from '../../assets/images/apps-qr-x2.min.png';

function Apps() {
    return (        
        <div className={styles.apps}>
            <div className={styles.content}>
                <h1 className={styles.title}>Скачивай Приложение <span className={styles.titleAccent}>PARI!</span></h1>
                <ul className={styles.list}>
                    <li className={styles.item}>Ставки на спорт и киберспорт</li>
                    <li className={styles.item}>Простая и удобная регистрация</li>
                    <li className={styles.item}>Удобные платежные методы</li>
                    <li className={styles.item}>Быстрый вывод денег</li>
                </ul>
                <div className={styles.qrWrapper}>
                    <img className={styles.qrImage} src={QRCode} alt="QR Code" width="140" height="140"/>
                    <p className={styles.qrText}>Наведите камеру на QR-код, чтобы скачать приложение</p>
                </div>
                <div className={styles.btnWrapper}>
                    <a 
                        className={clsx(styles.btn, styles.btnAppStore)} 
                        href="https://www.apple.com/app-store/" 
                        target="_blank" 
                        rel="noreferrer"
                    >Download on the App Store</a>
                    <a 
                        className={clsx(styles.btn, styles.btnGooglePlay)}
                        href="https://play.google.com/store/games" 
                        target="_blank" 
                        rel="noreferrer"
                    >Get it on Google Play</a>
                </div>
            </div>
        </div>
    );
    }
    
    export default Apps;