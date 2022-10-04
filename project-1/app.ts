//never никогда такого не произойдет

function generateError(message: string): never {
	throw new Error(message)
}

function dumpError(): never {
	//никогда не вернеться функция
	while (true) {}
}

function rec(): never {
	//никогда не вернеться функция
	rec()
}

const a: void = undefined
//const b: never = undefined //ошибка

type paymentAction = 'refund' | 'checkout' | 'reject'

function processAction(action: paymentAction) {
	switch (action) {
		case 'refund':
			//...
			break
		case 'checkout':
			//...
			break
		case 'reject':
			//...
			break
		default: //проверка что мы сюда не попадем с другим типам
			const s: never = action
			throw new Error('Нет такого action')
	}
}

function isString(x: string | number): boolean {
	if (typeof x === 'string') {
		return true
	} else if (typeof x === 'number') {
		return false
	}
	generateError('gfhj')
}
