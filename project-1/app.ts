type httpMethod = 'post' | 'get'

type coolString = string

function fetchWithAuth(url: coolString, method: httpMethod) {}

fetchWithAuth('fgh', 'get')
// ---------------------------
let user: {
	name: string
	age: number
	skills: string[]
} = {
	name: 'asd',
	age: 33,
	skills: ['1', '2'],
}

// ----------------------
type User = {
	name: string
	age: number
	skills: string[]
}

let user1: User = {
	name: 'asd',
	age: 33,
	skills: ['1', '2'],
}

// -------------------------

type User1 = {
	name: string
	age: number
	skills: string[]
}
type Role = { id: number }

type UserWithRole = User1 & Role // Объеденения

let user2: UserWithRole = {
	name: 'asd',
	age: 33,
	skills: ['1', '2'],
	id: 5,
}
