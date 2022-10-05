class User {
	_login: string
	_password: string

	set login(l: string | number) {
		this._login = 'user-' + l
	}

	get login() {
		return this._login
	}
}

const user = new User()
user.login = 'myLogin'

console.log(user)
console.log(user.login)
