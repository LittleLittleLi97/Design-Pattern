abstract class Product {
    public abstract use(): void;
}

abstract class Factory {
    public create(owner: string): Product {
        const p: Product = this.createProduct(owner);
        this.registerProduct(p);
        return p;
    };
    protected abstract createProduct(owner: string): Product;
    protected abstract registerProduct(p: Product): void;
}

class IDCard extends Product {
    private owner: string;
    constructor(owner: string) {
        super();
        this.owner = owner;
    }
    public use(): void {
        console.log(`${this.owner}使用IDCard`);
    }
}

class IDCardFactory extends Factory {
    private registerList: Product[] = [];
    protected createProduct(owner: string): Product {
        const p: Product = new IDCard(owner);
        return p;
    }
    protected registerProduct(p: Product): void {
        this.registerList.push(p);
    }
}

;(()=>{
    const idcard_factory: Factory = new IDCardFactory();
    const xiaoming_idcard: Product = idcard_factory.create('xiaoming');
    xiaoming_idcard.use();
})();