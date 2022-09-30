function getFullName(firstName: string, surName: string): string {
	return `${firstName} ${surName}`
}

const getFullName2 = (firstName: string, surName: string): string => {
	return `${firstName} ${surName}`
}

console.log(getFullName('Anton', 'Osipchyk'))
