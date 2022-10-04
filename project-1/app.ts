//Null

const n: null = null
// const n1: null = undefined

// "strictNullChecks": false

const n2: any = null
// const n3: number = null
// const n4: string = null
// const n5: boolean = null
// const n6: undefined = null

interface User {
name: string
}

function getUser(): User {
	if (Math.random() > 0.5) {
		return null
	} else {
		return { name: 'vasya' } as User
	}
}

const user = getUser()
const n55 = user.name
