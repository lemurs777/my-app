import { 
    Menu,
    StatisticsTwo,
} from '../components/';

function StatisticsPageTwo(){
   return (
       <>
           <Menu />
           <main className="page page--statistics-one scroll">
               <StatisticsTwo />
           </main>
       </>	
   );
};

export default StatisticsPageTwo;