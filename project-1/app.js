"use strict";
// Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)
class Product {
    constructor(id, price, name) {
        this.id = id;
        this.price = price;
        this.name = name;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(date, adress) {
        super(date);
        this.adress = adress;
    }
}
class ShopDelivery extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProducts(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }
    getSum() {
        return this.products.map((p) => p.price).reduce((p1, p2) => p1 + p2);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkout() {
        if (this.products.length == 0) {
            throw new Error('Нет товара в корзине');
        }
        if (!this.delivery) {
            throw new Error('не указан способ доставки');
        }
        return { success: true };
    }
}
const cart = new Cart();
cart.addProduct(new Product(1, 10, 'xa'));
cart.addProduct(new Product(2, 20, ',kf'));
cart.addProduct(new Product(3, 60, 'ff'));
cart.removeProducts(2);
// cart.setDelivery(new HomeDelivery(new Date(), ' sdf'))
console.log(cart.getSum());
console.log(cart.checkout());
