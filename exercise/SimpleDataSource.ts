import { Product } from "./Product";

export class SimpleDataSource{
    private products: Array<Product> ;

    constructor (){
        this.products = new Array<Product>(
            new Product(1,"OPPO Reno 4","Telefon",7500),
            new Product(2,"Samsumg S5","Telefon",8500),
            new Product(3,"OPPO Reno 4","Telefon",9500),
            new Product(4,"OPPO Reno 4","Telefon",40500)
        );
    }
    getProducts():Product[]{ 
        return this.products;
    }
}