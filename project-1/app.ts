const skills: string[] = ['Dev', 'DevOps', 'testing']
const skills1: any[] = ['Dev', 'DevOps', 5]

for (const skill of skills) {
	console.log(skill.toUpperCase())
}
const res = skills
	.filter((s: string) => s !== 'DevOps')
	.map(s => s + '!')
	.reduce((a, b) => a + b)

console.log(res)
