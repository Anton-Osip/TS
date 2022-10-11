class Vehical {
	public make: string //метод публчный

	private demages: string[] //приватный метод или свойство доступно только внутри
	private _model: string

	protected run: number //жоступны в наследуемых классах но не доступны снаружи

	#price:number//==private

	set model(model: string) {
		this._model = model
	}

	get model() {
		return this._model
	}

	addDemage(demage: string) {
		this.demages.push(demage)
	}
}

class EuroTruck extends Vehical {
	setRun(km: number) {
		this.run = km / 0.62
	}
}

new Vehical()
