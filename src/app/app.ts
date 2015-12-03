import {Component, View} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS, RouterLink, RouterOutlet} from 'angular2/router';

@Component({
	selector: 'app'
})

@RouteConfig([
  { path: '/',                  redirectTo: '/search' },
  { path: '/search',            as: 'search',     component: HomeComponent },
  { path: '/artist/:id',        as: 'artist',     component: AboutUsComponent }
])

@View({
    template: `
        <h1>Hi {{name}}</h1> <button (click)="sayMyName()">Say my name</button>
        <li *ng-for="#hero of heroes">
            {{ hero }}
        </li>
        <a [router-link]="['/search']">Search</a>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES, RouterLink, RouterOutlet]
})
export class App {
    public name:string;
    public heroes = ['me', 'd', 'x'];

    constructor() {
        this.name = 'sss';
        
    }

    sayMyName() {
        console.log('My name is', this.name)
    }
}


// Home Component
@Component({
    selector: 'home',
    template: '<h2>Welcome to <a href="http://www.codeandyou.com" target="_blank"> www.codeandyou.com </a></h2>',
    styles: ['.home {background: red}'],

})

export class HomeComponent {
    constructor() {
        console.log('dw');
    }
}

// About Us Component

@Component({
    selector: 'aboutus',
    templateUrl: 'aboutUs.html'
})
export class AboutUsComponent {}
    


