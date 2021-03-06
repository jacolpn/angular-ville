class Order {
  constructor(
    public address: string,
    public number: number,
    public optionalAddress: string,
    public paymentOption: string,
    public orderItems: OrderItem[] = [],
    public id?: string
  ) {}
}

class OrderItem {
  constructor(
    public quantity: number,
    public menuId: string,
    public name: string
  ) {}
}

export {
  Order,
  OrderItem
}
