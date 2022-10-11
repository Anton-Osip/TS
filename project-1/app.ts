// Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)

class Product {
	constructor(public id: number, public price: number, public name: string) {}
}

class Delivery {
	constructor(public date: Date) {}
}

class HomeDelivery extends Delivery {
	constructor(date: Date, public adress: string) {
		super(date)
	}
}

class ShopDelivery extends Delivery {
	constructor(public shopId: number) {
		super(new Date())
	}
}
type DeliveryOptions = HomeDelivery | ShopDelivery

class Cart {
	private products: Product[] = []
	private delivery: DeliveryOptions

	public addProduct(product: Product): void {
		this.products.push(product)
	}

	public removeProducts(productId: number): void {
		this.products = this.products.filter((p: Product) => p.id !== productId)
	}

	public getSum(): number {
		return this.products.map((p: Product) => p.price).reduce((p1: number, p2: number) => p1 + p2)
	}
	public setDelivery(delivery: DeliveryOptions): void {
		this.delivery = delivery
	}
	public checkout() {
		if (this.products.length == 0) {
			throw new Error('Нет товара в корзине')
		}
		if (!this.delivery) {
			throw new Error('не указан способ доставки')
		}
		return { success: true }
	}
}

const cart = new Cart()
cart.addProduct(new Product(1, 10, 'xa'))
cart.addProduct(new Product(2, 20, ',kf'))
cart.addProduct(new Product(3, 60, 'ff'))

cart.removeProducts(2)

// cart.setDelivery(new HomeDelivery(new Date(), ' sdf'))

console.log(cart.getSum())

console.log(cart.checkout())
