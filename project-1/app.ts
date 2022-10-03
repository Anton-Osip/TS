interface User {
	login: string
	password?: string
}

const user: User = {
	login: 'a@mail.com',
	// password: 'gfhj', Опциональный пароль  Может быть а может и не быть
}

function multiply(a: number, b?: number): number {
	if (!b) {
		return a * a
	}
	return a * b
}

interface UserPro {
	login: string
	password?: {
		type: 'primary' | 'secondary'
	}
}

function testPass(user: UserPro) {
	const t = user.password?.type // может быть андефаин
	const f = user.password!.type // точно пароль будет
}

function test(param?: string) {
	const t = param ?? multiply(5)
}
