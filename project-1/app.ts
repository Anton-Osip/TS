//unknow Мы не знаем что лежит в переменной

let input: unknown

input = 3
input = ['sd', 'df']

// let res: string = input

function run(i: unknown) {
	if (typeof i == 'number') {
		i++
	} else {
	}
}

run(input)

//Использовать так лучше
async function gatData() {
	try {
		await fetch('')
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message)
		}
	}
}

async function gatDataForce() {
	try {
		await fetch('')
	} catch (error) {
		const e = error as Error
		console.log(e.message)
	}
}

type U1 = unknown | null //unknown
type U2 = unknown & string //string
