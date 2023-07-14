import { 
    Menu,
    TableLeagues,
} from '../components/';

function StatisticsPageFive(){
   return (
       <>
           <Menu />
           <main className="page page--statistics-five scroll">
               <TableLeagues />
           </main>
       </>	
   );
};

export default StatisticsPageFive;