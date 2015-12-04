import {Component, View} from 'angular2/angular2';
import {Products} from '../repository/products';

// Product Details Component
@Component({
    selector: 'product',
    template: `
        <h1 class="product">Product Detail Component</h1>
        <li *ng-for="#hero of heroes">
            {{ hero }}
        </li>
        <div *ng-for="#product of products">
            <h4>{{ product.name }}</h4>
            <div class="description">{{ product.description }}</div>
            <div>{{ product.price }}</div> 
            <img src="{{ product.image }}"/>
        </div>
    `,
    styles: ['.product {background: cyan}']
})
export class ProductDetailComponent {
    public heroes = ['abc', 'bcd', 'cde'];
    private productsRepository:Products;
    public products;
    
    constructor() {
        this.productsRepository = new Products();
        this.productsRepository.getProducts().then((products) => {
            this.products = products;
        });
    }
}
