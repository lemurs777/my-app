import { ModalType } from './types'

import captchaImg from '../../assets/images/captcha.png'

import styles from './ModalCheck.module.scss'

function ModalCheck(props: ModalType) {
	return (
		<div className={styles.modalOtherCountry}>
			<h2 className={styles.title}>ПРОВЕРКА</h2>
			<img className={styles.img} src={captchaImg} alt='Внимание' />
			<div className={styles.btns}>
				<button className={styles.btnDisable}>ВЕРНУТЬСЯ НАЗАД</button>
				<button className={styles.btn}>Продолжить</button>
			</div>
		</div>
	)
}

export default ModalCheck
