import {Component, View} from 'angular2/angular2';
import {RouteConfig, RouteParams, ROUTER_DIRECTIVES, APP_BASE_HREF, ROUTER_BINDINGS} from 'angular2/router';
import {HomeComponent} from './home/home';
import {ProductDetailComponent} from './product/product';
import {LoginPage} from './form/login';

@Component({
	selector: 'app',
})

@RouteConfig([
    {path: '/',        component: HomeComponent, as: 'Home'},
    {path: '/product', component: ProductDetailComponent, as: 'ProductDetail'  }
])

@View({
    template: `
        <h1>Hi <span #username>{{name}}</span></h1> 
        
        <input #inputvalue type="text">
        <button (click)="displayName(username, inputvalue)">Update name</button>

        <a [router-link]="['/Home']">Home</a>
        <a [router-link]="['/ProductDetail']">Product Details</a>
        <router-outlet></router-outlet>
        
        <home></home>
        <product></product>
        <login-page></login-page>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class App {
    public name:string;

    constructor() {
        this.name = 'Some name';
    }

    displayName(label, inputValue) {
        label.innerHTML = inputValue.value;
    }
}
