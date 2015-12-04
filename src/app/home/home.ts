import {Component, View} from 'angular2/angular2';

// Home Component
@Component({
    selector: 'home',
    template: '<h1 class="home">Home Component</h1>',
    styles: ['.home {background: red}'],
})
export class HomeComponent {}