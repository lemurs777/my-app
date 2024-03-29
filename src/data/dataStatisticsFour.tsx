const arrTables = {

    dataLeagueTable: {
        title: null,
        info: true,
		forms: true,
		btnShowTable: false,
        dataTable: [
            {
                show: true,
                number: 1,
                playTournamentClass: 'playoff',
                directionClass: 'empty',
                name: 'Хьюм Сити',
                game: 3,
                away: '3-0',
                scored: 248,
                conceded: 225,
                ratio: 1.262,
                pct: 1,
                points: 6,
                forms: [
                    { form: 'win' },
                    { form: 'win' },
                    { form: 'win' },
                ],
            },
            {
                show: true,
                number: 2,
                playTournamentClass: 'qualification',
                directionClass: 'empty',
                name: 'Wyndham Basketball',
                game: 2,
                away: '2-0',
                scored: 231,
                conceded: 138,
                ratio: 1.673,
                pct: 1,
                points: 6,
                forms: [
                    { form: 'win' },
                    { form: 'win' },
                ],
            },
            {
                show: true,
                number: 3,
                playTournamentClass: 'qualification',
                directionClass: 'upp',
                name: 'Camberwell Dragons',
                game: 3,
                away: '2-1',
                scored: 282,
                conceded: 163,
                ratio: 1.072,
                pct: 0.667,
                points: 6,
                forms: [
                    { form: 'win' },
                    { form: 'win' },
                    { form: 'loss' },
                ],
            },
            {
                show: true,
                number: 4,
                playTournamentClass: 'empty',
                directionClass: 'down',
                name: 'Блэкберн Викингс',
                game: 1,
                away: '1-0',
                scored: 66,
                conceded: 60,
                ratio: 1.1,
                pct: 1,
                points: 3,
                forms: [
                    { form: 'win' },
                ],
            },
            {
                show: true,
                number: 4,
                playTournamentClass: 'qualification',
                directionClass: 'down',
                name: 'Sanbury Jest',
                game: 1,
                away: '1-0',
                scored: 96,
                conceded: 68,
                ratio: 1.412,
                pct: 1,
                points: 3,
                forms: [
                    { form: 'win' },
                ],
            },
            {
                show: true,
                number: 4,
                playTournamentClass: 'empty',
                directionClass: 'upp',
                name: 'Western Port Steeltrs',
                game: 1,
                away: '1-0',
                scored: 88,
                conceded: 81,
                ratio: 1.086,
                pct: 1,
                points: 3,
                forms: [
                    { form: 'win' },
                ],
            },
            {
                show: true,
                number: 7,
                playTournamentClass: 'empty',
                directionClass: 'down',
                name: 'Keysborought',
                game: 2,
                away: '1-1',
                scored: 176,
                conceded: 155,
                ratio: 1.135,
                pct: 0.5,
                points: 3,
                forms: [
                    { form: 'win' },
                    { form: 'loss' },
                ],
            },
            {
                show: true,
                number: 8,
                playTournamentClass: 'empty',
                directionClass: 'down',
                name: 'Bellarine',
                game: 1,
                away: '0-1',
                scored: 85,
                conceded: 92,
                ratio: 0.924,
                pct: 0,
                points: 0,
                forms: [
                    { form: 'loss' },
                ],
            },
            {
                show: true,
                number: 8,
                playTournamentClass: 'empty',
                directionClass: 'down',
                name: 'Маккиннон Кугарс',
                game: 2,
                away: '0-2',
                scored: 205,
                conceded: 218,
                ratio: 0.94,
                pct: 0,
                points: 0,
                forms: [
                    { form: 'loss' },
                ],
            },
            {
                show: true,
                number: 8,
                playTournamentClass: 'empty',
                directionClass: 'down',
                name: 'Мельбург Тайгерс',
                game: 0,
                away: '0-0',
                scored: 0,
                conceded: 0,
                ratio: 0,
                pct: 0,
                points: 0,
                forms: [
                    { form: 'loss' },
                    { form: 'loss' },
                ],
            },
        ]
    },

    dataFormTable: [
		{
			number: 1,
			name: 'Wyndham Basketball',
			scored: 326,
			conceded: 232,
			game: 3,
			points: 9,
            percent: 100,
            forms: [
                { form: 'win' },
                { form: 'win' },
                { form: 'win' },
            ],
            next: 'Маккиннон Кургас'
		},
		{
			number: 2,
			name: 'Wyndham Basketball',
			scored: 326,
			conceded: 232,
			game: 3,
			points: 9,
            percent: 93.25,
            forms: [
                { form: 'win' },
                { form: 'win' },
                { form: 'win' },
            ],
            next: 'Маккиннон Кургас'
		},
		{
			number: 3,
			name: 'Wyndham Basketball',
			scored: 326,
			conceded: 232,
			game: 3,
			points: 9,
            percent: 80.25,
            forms: [
                { form: 'win' },
                { form: 'win' },
                { form: 'win' },
            ],
            next: 'Маккиннон Кургас'
		},
		{
			number: 4,
			name: 'Wyndham Basketball',
			scored: 326,
			conceded: 232,
			game: 3,
			points: 9,
            percent: 75.25,
            forms: [
                { form: 'win' },
                { form: 'win' },
                { form: 'win' },
            ],
            next: 'Маккиннон Кургас'
		},
		{
			number: 5,
			name: 'Wyndham Basketball',
			scored: 326,
			conceded: 232,
			game: 3,
			points: 9,
            percent: 74,
            forms: [
                { form: 'loss' },
                { form: 'win' },
                { form: 'win' },
            ],
            next: 'Маккиннон Кургас'
		},
		{
			number: 6,
			name: 'Wyndham Basketball',
			scored: 326,
			conceded: 232,
			game: 3,
			points: 9,
            percent: 63,
            forms: [
                { form: 'win' },
                { form: 'loss' },
                { form: 'win' },
            ],
            next: 'Маккиннон Кургас'
		},
		{
			number: 7,
			name: 'Wyndham Basketball',
			scored: 326,
			conceded: 232,
			game: 3,
			points: 9,
            percent: 40,
            forms: [
                { form: 'win' },
                { form: 'loss' },
                { form: 'win' },
            ],
            next: 'Маккиннон Кургас'
		},
		{
			number: 8,
			name: 'Wyndham Basketball',
			scored: 326,
			conceded: 232,
			game: 3,
			points: 9,
            percent: 25,
            forms: [
                { form: 'loss' },
                { form: 'win' },
                { form: 'loss' },
            ],
            next: 'Маккиннон Кургас'
		},
		{
			number: 9,
			name: 'Wyndham Basketball',
			scored: 326,
			conceded: 232,
			game: 3,
			points: 9,
            percent: 10.25,
            forms: [
                { form: 'win' },
                { form: 'win' },
                { form: 'loss' },
            ],
            next: 'Маккиннон Кургас'
		},
		{
			number: 10,
			name: 'Wyndham Basketball',
			scored: 326,
			conceded: 232,
			game: 3,
			points: 9,
            percent: 0,
            forms: [
                { form: 'loss' },
                { form: 'loss' },
                { form: 'loss' },
            ],
            next: 'Маккиннон Кургас'
		},
	]
};

export default arrTables;