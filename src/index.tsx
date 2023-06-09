import ReactDOM from 'react-dom/client';
import './assets/styles/style.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import ProfileLayout from "./layouts/ProfileLayout";
import AppsLayout from "./layouts/AppsLayout";
import PromotionsLayout from "./layouts/PromotionsLayout";
import RequestsLayout from "./layouts/RequestsLayout";
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import NoPage from './pages/NoPage';
import HistoryOfConclusions from './pages/HistoryOfConclusions';
import HistoryBetting from './pages/HistoryBetting';
import VerificationPage from './pages/VerificationPage';
import MyPromo from './pages/MyPromo';
import DepositPage from './pages/DepositPage';
import AppsPage from './pages/AppsPage';
import PromotionsPage from './pages/PromotionsPage';
import PromotionPage from './pages/PromotionPage';
import EventsPage from './pages/EventsPage';
import StatisticsPageOne from './pages/StatisticsPageOne';
import StatisticsPageTwo from './pages/StatisticsPageTwo';
import StatisticsPageThree from './pages/StatisticsPageThree';
import StatisticsPageFour from './pages/StatisticsPageFour';
import StatisticsPageFive from './pages/StatisticsPageFive';
import SiteMapPage from './pages/SiteMapPage';
import HomePageGames from './pages/HomePageGames';
import ReturnProfile from './pages/ReturnProfile';
import StatisticsPageSix from './pages/StatisticsPageSix';
import StatisticsPageSeven from './pages/StatisticsPageSeven';
import StatisticsPageSearch from './pages/StatisticsPageSearch';
import ChoiceSportPage from './pages/ChoiceSportPage';
import ChoiceCountryPage from './pages/ChoiceCountryPage';
import FAQPage from './pages/FAQPage';
import RequestsPage from './pages/RequestsPage';
import RequestPage from './pages/RequestPage';
import EventsDetailedPage from './pages/EventsDetailedPage';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path="/cybersport" element={<HomePageGames/>} />
					<Route path="/choice-of-sport" element={<ChoiceSportPage/>} />
					<Route path="/choice-of-country" element={<ChoiceCountryPage/>} />
					<Route path="/faq" element={<FAQPage/>} />
					<Route path="/sitemap" element={<SiteMapPage/>} />
					<Route path="*" element={<NoPage />} />
				</Route>
				<Route path="/profile/" element={<ProfileLayout />}>
					<Route index element={<ProfilePage />} />
					<Route path="verification" element={<VerificationPage />} />
					<Route path="conclusions" element={<HistoryOfConclusions />} />
					<Route path="betting" element={<HistoryBetting />} />
					<Route path="promo" element={<MyPromo />} />
					<Route path="deposit" element={<DepositPage />} />
					<Route path="return" element={<ReturnProfile />} />
				</Route>
				<Route path="/requests/" element={<RequestsLayout />}>
					<Route index element={<RequestsPage />} />
					<Route path="request" element={<RequestPage />} />
				</Route>
				<Route path="/apps/" element={<AppsLayout />}>
					<Route index element={<AppsPage />} />
				</Route>
				<Route path="/promotions/" element={<PromotionsLayout />}>
					<Route index element={<PromotionsPage />} />
					<Route path="promo" element={<PromotionPage />} />
				</Route>
				<Route path="/events/" element={<MainLayout />}>
					<Route index element={<EventsPage />} />
					<Route path="detailed" element={<EventsDetailedPage />} />
				</Route>
				<Route path="/statistics/" element={<MainLayout />}>
					<Route index element={<StatisticsPageOne />} />
					<Route path="big-v-2023" element={<StatisticsPageTwo />} />
					<Route path="calendar" element={<StatisticsPageThree />} />
					<Route path="table" element={<StatisticsPageFour />} />
					<Route path="detailed" element={<StatisticsPageFive />} />
					<Route path="face-to-face" element={<StatisticsPageSix />} />
					<Route path="standings" element={<StatisticsPageSeven />} />
					<Route path="search" element={<StatisticsPageSearch />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
