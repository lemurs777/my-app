type AccordionData = {
	title: string;
	arrInfo: Array<{ 
		arrRow: Array<{
			name: string,
			count: string,
		}>
	}>;
};

function AccordionItem (
{ 
	data,
	isOpen,
	btnOnClick
} : {
	data: AccordionData;
	isOpen: boolean;
	btnOnClick: () => void;
}){

return (
	<li className={`accordion-item ${isOpen ? 'accordion-item--open' : ''}`}>
	<h2 className="accordion-item__title">
		<button className="accordion-item__btn" onClick={btnOnClick}>
		{data.title}
		</button>
	</h2>
	<div className="accordion-item__container">
		<div className="accordion-item__table">
			{data.arrInfo.map((info, index) => (
				<div key={index} className={`accordion-item__row accordion-item__row--${info.arrRow.length}`}>
					{info.arrRow.map((row, indexCell) => (
						<div key={indexCell} className="accordion-item__cell">
							<div className="accordion-item__name">{row.name}</div>
							<div className="accordion-item__count">{row.count}</div>
						</div>
					))}
				</div>
			))}
			</div>
	</div>
	</li>
);
}

export default AccordionItem;
