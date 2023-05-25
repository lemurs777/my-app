import { 
    Menu,
    StatisticsFive,
} from '../components/';

function StatisticsPageFive(){
   return (
       <>
           <Menu />
           <main className="page page--statistics-five scroll">
               <StatisticsFive />
           </main>
       </>	
   );
};

export default StatisticsPageFive;