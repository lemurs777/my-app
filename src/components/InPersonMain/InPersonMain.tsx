import styles from './InPersonMain.module.scss';

type InPersonMainData = {
	title: string,
	nameOne: string,
	nameTwo: string,
	date: string,
	time: string,
};

function InPersonMain(
	{ data } : {data : InPersonMainData}
) {

	return (
		<>
			<h1 className={styles.title}>{data.title}</h1>
			<div className={styles.info}>
				<div className={styles.name}>{data.nameOne}</div>
				<div className={styles.dateWrapper}>
					<div className={styles.date}>{data.date} - {data.time}</div>
					<button className={styles.btn}>Update</button>
				</div>
				<div className={styles.name}>{data.nameTwo}</div>
			</div>
		</>
	);
}

export default InPersonMain;