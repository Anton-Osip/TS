// enum ReqestType {
// 	GET = 'get',
// 	POST = 'post',
// }

function fetchWithAuth(url: string, method: 'post' | 'get') {}

fetchWithAuth('fgh', 'get')

let method = 'post'

fetchWithAuth('fgh', method as 'post')
