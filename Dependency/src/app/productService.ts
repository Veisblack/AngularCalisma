export class ProductService {
    getProduct(): Product[] {
        return [
            { name: "Keyboard", quantity: 10 },
            { name: "Mouse", quantity: 10 },
            { name: "Pencil", quantity: 10 }
        ];
        
    }
}

export class Product {
    name: string;
    quantity: number;
}