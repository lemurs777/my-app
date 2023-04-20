import ReactDOM from 'react-dom/client';
import './assets/styles/style.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import ProfileLayout from "./layouts/ProfileLayout";
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import NoPage from './pages/NoPage';
import HistoryOfConclusions from './pages/HistoryOfConclusions';
import HistoryBetting from './pages/HistoryBetting';
import Verification from './pages/Verification';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path="*" element={<NoPage />} />
				</Route>
				<Route path="/profile/" element={<ProfileLayout />}>
					<Route index element={<Profile />} />
					<Route path="verification" element={<Verification />} />
					<Route path="conclusions" element={<HistoryOfConclusions />} />
					<Route path="betting" element={<HistoryBetting />} />
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
