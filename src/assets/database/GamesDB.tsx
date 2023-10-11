import csGoImg from '../images/games/cs_go.svg'
import dota2Img from '../images/games/dota-2.svg'
import overwatchImg from '../images/games/overwatch.svg'
import lolImg from '../images/games/lol.svg'
import valorantImg from '../images/games/valorant.svg'
import sc1Img from '../images/games/sc-1.svg'
import sc2Img from '../images/games/sc-2.svg'
import hearthstoneImg from '../images/games/hearthstone.svg'
import codImg from '../images/games/cod.svg'
import tf2Img from '../images/games/tf2.svg'
import hosImg from '../images/games/hos.svg'

export const GamesDB = [
	{ title: 'CS:GO', image: csGoImg, link: '/cs-go', live: true },
	{ title: 'Dota 2', image: dota2Img, link: '/dota2', live: true },
	{ title: 'Overwatch', image: overwatchImg, link: '/overwatch', live: false },
	{ title: 'LoL', image: lolImg, link: '/lol', live: true },
	{ title: 'Valorant', image: valorantImg, link: '/valorant', live: false },
	{ title: 'StarCraft I', image: sc1Img, link: '/sc1', live: false },
	{ title: 'StarCraft II', image: sc2Img, link: '/sc2', live: false },
	{
		title: 'Hearthstone',
		image: hearthstoneImg,
		link: '/hearthstone',
		live: true,
	},
	{ title: 'Call Of Duty', image: codImg, link: '/cod', live: false },
	{ title: 'TF2', image: tf2Img, link: '/tf2', live: false },
	{ title: 'HoS', image: hosImg, link: '/hos', live: false },
]
