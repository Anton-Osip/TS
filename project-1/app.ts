class User {
	name: string
	constructor(name: string) {
		this.name = name
	}
}

const user = new User('VASYA')
console.log(user)

user.name = 'Petya'

console.log(user)

class Admin {
	role: number //"strictPropertyInitialization": false or !
}

const admin = new Admin()
admin.role = 1
