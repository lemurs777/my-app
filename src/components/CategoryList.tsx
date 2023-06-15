import clsx from 'clsx';

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
	<div className="categoty-list scroll-horizontal">
		<ul className="categoty-list__list">
			{categoryList.map((category, index) => (
				<li key={index} className="categoty-list__item">
					<button className={clsx(
						'categoty-list__item-btn',
						{'categoty-list__item-btn--active': category.active}
					)}>{category.name}</button>
				</li>
			))}
		</ul>
	</div>
);
}

export default CategoryList;
