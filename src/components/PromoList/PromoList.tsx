import { Link } from 'react-router-dom';

import styles from './PromoList.module.scss';

type PromoListData = {
	title: string,
	items: Array<{
		link: string,
		image: string,
		alt: string,
		dateStart: string,
		dateEnd: string,
		title: string,
		info: string,
	}>;
};

function PromoList( data: {data : PromoListData}) {
	
return (
	<section className={styles.promoList}>
		<h2 className={styles.mainTitle}>{data.data.title}</h2>
		<ul className={styles.list}>
			{data.data.items.map((item, index) => (
				<li key={index}className={styles.item}>
					<Link className={styles.link} to={item.link}>
						<img className={styles.img} src={item.image} alt={item.alt} />
						<div className={styles.dates}>{item.dateStart} - {item.dateEnd}</div>
						<h3 className={styles.title}>{item.title}</h3>
						<p className={styles.text}>{item.info}</p>
					</Link>
				</li>
			))}
		</ul>
	</section>
);
}

export default PromoList;
