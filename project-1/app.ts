type PaymentStatus = 'new' | 'paid'

class Payment {
	id: number
	status: PaymentStatus = 'new'

	constructor(id: number) {
		this.id = id
	}

	pay() {
		this.status = 'paid'
	}
}

class PersistedPayment extends Payment {
	databaseId: number
	payedAt: Date

	constructor() {
		const id = Math.random()
		super(id)
	}

	save() {}

	override pay(date?: Date) {
		super.pay()
		if (date) {
			this.payedAt = date
		}
	}
}

class User {
	name: string = 'user'

	constructor() {
		console.log(this.name)
	}
}

class Admin extends User {
	name: string = 'admin'
	constructor() {
		super()
		console.log(this.name)
	}
}

new Admin()

new Error('df')

class HttpError extends Error {
	code: number
	constructor(message: string, code?: number) {
		super(message)
		this.code = code ?? 500
	}
}
