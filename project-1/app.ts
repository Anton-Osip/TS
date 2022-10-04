let a: number = 5
let b: string = a.toString()

let c: string = 'asdf'
let d: number = +c
let g: number = parseInt(c)

let e: string = new String(a).valueOf()
let Str: String = new String(a)
let bool: boolean = new Boolean(a).valueOf()

interface User {
	name: string
	email: string
	login: string
}

const user: User = {
	name: 'Vasya',
	email: 'v@mail.ru',
	login: 'vas',
}

const user1 = {
	name: 'Vasya',
	email: 'v@mail.ru',
	login: 'vas',
} as User

const user3 = <User>{
	name: 'Vasya',
	email: 'v@mail.ru',
	login: 'vas',
}
//не рекоминдуют использовать

interface Admin {
	name: string
	role: number
}
//Преобразование
//получили из пользователя админа
const admin: Admin = {
	...user,
	role: 1,
}

//ДЕЛАТ ТАК ФУНКЦИЯ MAPING
function userToAdmin(user: User): Admin {
	return {
		name: user.name,
		role: 1,
	}
}
