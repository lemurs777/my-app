import { useState } from 'react';
import { AccordionItem } from '../components/';

function AccordionList (
    { 
        dataItems,
    } : {
        dataItems: Array<{
            title: string,
            favourite: boolean,
            arrInfo: Array<{
                arrRow: Array<{
                    name: string,
                    countOne: string,
                    countTwo: string | null,
                    class: string,
                }>, 
            }>,
        }>,
    }){

    const [currentIdx, setCurrentIdx] = useState(-1);
    const btnOnClick = (idx: number) => {
	    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
    };

return (
	<ul className="events-info__accordion">
			{dataItems.map((item, idx) => (
				<AccordionItem
					key={idx}
					data={item}
					isOpen={idx === currentIdx}
					btnOnClick={() => btnOnClick(idx)}
				/>
			))}
	  	</ul>
);
}

export default AccordionList;