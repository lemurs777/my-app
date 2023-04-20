import { Link } from 'react-router-dom';

function Verification() {
	return (
		<div className="verification">
			<div className="verification__header">
				<Link className="verification__header-btn" to="/profile/">Profile</Link>
				<h1 className="verification__header-title">Верификация аккаунта</h1>
			</div>
			<div className="verification__content">
				<h2 className="verification__content-title">Пожалуйста, пройдите 3-х шаговую верификацию</h2>
				<label className="verification__content-label verification__content-label--phone">
					<p className="verification__content-label-text">Номер телефона<span className="verification__content-label-text--accent">*</span></p>
					<input className="verification__content-input" type="text" placeholder="+7 (___) ___-__-__" />
				</label>
				<label className="verification__content-label verification__content-label--code">
					<p className="verification__content-label-text">Код подтверждения<span className="verification__content-label-text--accent">*</span></p>
					<input className="verification__content-input" type="text" placeholder="_ _ _ _" />
				</label>
				<button className="verification__btn-next">Продолжить</button>
			</div>
		</div>
	);
}

export default Verification;