import styles from './FaqSmallList.module.scss';

function FaqSmallList() {
	return (
	<div className={styles.faqSmallList}>
		<h2 className={styles.title}>Вопрос – ответ</h2>
		<ul className={styles.list}>
			<li className={styles.item}>Какие доступные форматы коэффициентов?</li>
			<li className={styles.item}>Какие ограничения доступны для аккаунта?</li>
			<li className={styles.item}>В чём разница между одинаром и экспрессом?</li>
		</ul>
	</div>
	);
}

export default FaqSmallList;