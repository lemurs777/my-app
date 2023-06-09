import { 
	FaqBigList,
} from '../components/';



function FAQPage(){

	const infoFaqList = {
		activeIndex: -1,
		activeCategory: "bet",
	}
	
	return (
		<>
			<main className="page page--faq-big-list scroll">
				<FaqBigList infoFaqList={ infoFaqList }/>
			</main>
		</>	
	);
};

export default FAQPage;
