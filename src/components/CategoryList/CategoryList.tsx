import clsx from 'clsx';

import styles from './CategoryList.module.scss';

function CategoryList(
	{
		categoryList
	}: {
		categoryList: Array<{
			name: string,
			active: boolean,
		}>;
	}
) {

return (	
	<div className={styles.categotyList}>
		<ul className={styles.list}>
			{categoryList.map((category, index) => (
				<li key={index} className={styles.item}>
					<button className={clsx(
						styles.itemBtn,
						{[styles.itemBtnActive]: category.active}
					)}>{category.name}</button>
				</li>
			))}
		</ul>
	</div>
);
}

export default CategoryList;
