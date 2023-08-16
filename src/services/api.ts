interface UserReply {
	Status: string;
	Error: string;
	Message: string;
	Login: string;
	Email: string;
	FirstName: string;
	LastName: string;
	FatherName: string;
	Phone: string;
	Password: string;
	CreatedAt: any;
	UpdatedAt: any;
	EmailVerified: boolean;
	PhoneVerified: boolean;
}

export interface Registration {
	Email: string;
	Phone: string;
	Currency: string;
}

export interface Login {
	Email: string;
	Phone: string;
}

export interface Promocode {
	Promocode: string;
}

export interface Code {
	Code: string;
}

export interface Verification {
	Phone: string;
	Code: string;
	FirstName: string;
	LastName: string;
	FatherName: string;
	Passport: string;
	Country: string;
	Address: string;
	Photo: any;
}

export interface EventsTeamsInfo {
	TeamOne : {
		Name: string,
		Logo: string,
		Yellow: number,
		Red: number,
		Corner: number,
		ShotOnGoal: number,
		UniformName: string,
		Goals: Array<
			{goal: number}
		>
	},
	TeamTwo : {
		Name: string,
		Logo: string,
		Yellow: number,
		Red: number,
		Corner: number,
		ShotOnGoal: number,
		UniformName: string,
		Goals: Array<
			{goal: number}
		>
	},
	Time: number,
	Score: string,
	Info: string,
}

interface EventsCategoryDataItem {
	Name: string,
	Active: boolean,
}

export interface EventsCategoryData extends Array<EventsCategoryDataItem>{}

interface EventsDataItem {
	Title: string,
	Favourite: boolean,
	ArrInfo: Array<{
		ArrRow: Array<{
			Name: string,
			CountOne: string,
			CountTwo: string | null,
			Up: boolean,
			Down: boolean,
		}>,
	}>,
}

export interface EventsData extends Array<EventsDataItem>{}

interface EventsSportTablesDataItem {
	Sport: string,
	Class: string,
	ArrRows: Array<{
		Name: string,
		Time: string,
		Date: string,
		NameOne: string,
		NameTwo: string,
		LastNumber: number,
		ArrNumbers: Array<{
			Number: number,
			Class: string, //upp/down/disable/empty
		}>,
	}>
}

export interface EventsSportTablesData extends Array<EventsSportTablesDataItem>{}


export async function registration(data: Registration): Promise<UserReply> {
	const res = await fetch('http://localhost:8000/api/registration', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: 'include',
		body: JSON.stringify(data)
	});
	const reply = await res.json();
	return reply as UserReply;
}

export async function login(data: Login): Promise<UserReply> {
	const res = await fetch('http://localhost:8000/api/auth/login', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: 'include',
		body: JSON.stringify(data)
	});
	const reply = await res.json();
	return reply as UserReply;
}

export async function promocode(data: Promocode): Promise<UserReply> {
	const res = await fetch('http://localhost:8000/api/promocode', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: 'include',
		body: JSON.stringify(data)
	});
	const reply = await res.json();
	return reply as UserReply;
}

export async function code(data: Code): Promise<UserReply> {
	const res = await fetch('http://localhost:8000/api/code', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: 'include',
		body: JSON.stringify(data)
	});
	const reply = await res.json();
	return reply as UserReply;
}

export async function verification(data: Verification): Promise<UserReply> {
	const res = await fetch('http://localhost:8000/api/verification', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: 'include',
		body: JSON.stringify(data)
	});
	const reply = await res.json();
	return reply as UserReply;
}

export async function eventsTeamsInfo(): Promise<EventsTeamsInfo> {
	const res = await fetch('http://localhost:8000/api/events-teams', {
		credentials: 'include',
	});
	const reply = await res.json();
	return reply as EventsTeamsInfo;
}

export async function eventsCategoryData(): Promise<EventsCategoryData> {
	const res = await fetch('http://localhost:8000/api/events-category', {
		credentials: 'include',
	});
	const reply = await res.json();
	return reply as EventsCategoryData;
}

export async function eventsData(): Promise<EventsData> {
	const res = await fetch('http://localhost:8000/api/events', {
		credentials: 'include',
	});
	const reply = await res.json();
	return reply as EventsData;
}

export async function eventsSportTablesData(): Promise<EventsSportTablesData> {
	const res = await fetch('http://localhost:8000/api/events-sport-tables', {
		credentials: 'include',
	});
	const reply = await res.json();
	return reply as EventsSportTablesData;
}
