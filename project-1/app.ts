function logId(id: string | number): void {
	//функция ничего не возвращает void
	console.log(id)
}

const a = logId(1) //a:void

function multiply(f: number, s?: number) {
	if (!s) {
		return f * f
	}
}

type voidFunc = () => void

const f1: voidFunc = () => {}

const f2: voidFunc = () => {
	return true
}

const b = f2()

console.log(b)

const skills = ['dev', 'DecOps']

const user = {
	s: ['s'],
}

skills.forEach(skill => user.s.push(skill))
