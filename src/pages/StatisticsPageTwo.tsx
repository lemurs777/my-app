import { 
    Menu,
    StatisticsTwo,
} from '../components/';

function StatisticsPageTwo(){
   return (
       <>
           <Menu />
           <main className="page page--statistics-two scroll">
               <StatisticsTwo />
           </main>
       </>	
   );
};

export default StatisticsPageTwo;