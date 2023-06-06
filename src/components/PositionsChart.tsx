import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
);

const arrPosVertically: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrPosHorizontally: number[] = [1, 3, 5, 6, 9, 11, 13, 15, 17, 19, 21];

export const options = {
	responsive: true,
	drawTicks: true,
	scales: {
		y: {
			type: 'linear' as const,
			display: false,
			beginAtZero: true,
			reverse: true,
			min: 0,
			max: 11,
			grid: {
				color: 'rgba(255, 255, 255, 0.5)',
			}
		},
		x: {
			display: false,
		}
	}
};

const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

type PositionsChartData = {
	nameOne: string,
	arrOne: Array<number>,
	nameTwo: string,
	arrTwo: Array<number>,
};

function PositionsChart({ props } : { props: PositionsChartData }) {

	const arrPosOne: number[] = props.arrOne;
	const arrPosTwo: number[] = props.arrTwo;
	const nameOne: string = props.nameOne;
	const nameTwo: string = props.nameTwo;

	const data = {
		labels,
		datasets: [
			{
				data: arrPosOne,
				borderColor: '#F7FF13',
				backgroundColor: '#000',
			},
			{
				data: arrPosTwo,
				borderColor: '#F7FF13',
				backgroundColor: '#F7FF13',
			},
		],
	};

	return (
		<div className="pos-chart">
			<div className="pos-chart__wrapper">
				<div className="pos-chart__content-wrapper">
					<div className="pos-chart__content-numbers pos-chart__content-numbers--one">
						{arrPosVertically.map((posVertically, index) => (
							<div key={index} className="pos-chart__content-number">{posVertically}</div>
						))}
					</div>
					<div className="pos-chart__content-numbers pos-chart__content-numbers--two">
						{arrPosVertically.map((posVertically, index) => (
							<div key={index} className="pos-chart__content-number">{posVertically}</div>
						))}
					</div>
					<div className="pos-chart__content-numbers-bottom">
						{arrPosHorizontally.map((posHorizontally, index) => (
							<div key={index} className="pos-chart__content-number-bottom">{posHorizontally}</div>
						))}
					</div>
					<Line className="pos-chart__content" options={options} data={data} />
					<div className="pos-chart__content-bg">
						{ (arrPosOne.length !== 0) ? (
							<div className="pos-chart__content-line" style={{top: `${((arrPosOne[arrPosOne.length - 1]) / 10) * 99}%`, left: `${(100 / (labels.length - 1)) * (arrPosOne.length - 1)}%`}}></div>
						) : null }
						{ (arrPosTwo.length !== 0) ? (
						<div className="pos-chart__content-line" style={{top: `${((arrPosTwo[arrPosTwo.length - 1]) / 10) * 99}%`, left: `${(100 / (labels.length - 1)) * (arrPosOne.length - 1)}%`}}></div>
						) : null }
					</div>
				</div>
				<div className="pos-chart__info">
					<ul className="pos-chart__info-list">
						<li className="pos-chart__info-item pos-chart__info-item--playoff">Плей-офф (1)</li>
						<li className="pos-chart__info-item pos-chart__info-item--qualification">Квалификация, Плей-офф (2-5)</li>
					</ul>
					<ul className="pos-chart__info-list">
						{ (nameOne !== '') ? (
						<li className="pos-chart__info-item pos-chart__info-item--team-one">{nameOne}</li>
						) : null }
						{ (nameTwo !== '') ? (
						<li className="pos-chart__info-item pos-chart__info-item--team-two">{nameTwo}</li>
						) : null }
					</ul>
				</div>
			</div>
		</div>
	);
}

export default PositionsChart;