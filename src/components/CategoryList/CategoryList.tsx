import clsx from 'clsx';

import { CategoryListData } from './types';

import styles from './CategoryList.module.scss';

function CategoryList({ data } : { data: CategoryListData }) {

return (	
	<div className={styles.categotyList}>
		<ul className={styles.list}>
			{data.map((category, index) => (
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
