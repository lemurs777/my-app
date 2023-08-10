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
