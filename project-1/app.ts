// Запрос в виде платежа
// {
// 	"sum": 10000,
// 	"from": 2,
// 	"to": 4
// }
// Ответ
// {
// 	"status": "success",
// 	"data": {
// 		"databaseId": 567,
// 		"sum": 10000,
// 		"from": 2,
// 		"to": 4
// 	}
// },
// {
// 	"status": "failed",
// 	"data": {
// 		"errorMessage": "Недостаточно средств",
// 		"errorCode": 4
// 	}
// }

interface IPayment {
	sum: number
	from: number
	to: number
}

enum PaymentStatus {
	Success = 'success',
	Failed = 'failed',
}

interface IPaymentRequest extends IPayment {}

interface IDataSuccess extends IPaymentRequest {
	databaseId: number
}

interface IDataFailed {
	errorMessage: string
	errorCode: number
}

interface IResponseSuccess {
	status: PaymentStatus.Success
	data: IDataSuccess
}

interface IResponseFaild {
	status: PaymentStatus.Failed
	data: IDataFailed
}
