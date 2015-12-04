import {bootstrap, provide} from 'angular2/angular2';
import {LocationStrategy, HashLocationStrategy, ROUTER_PROVIDERS} from 'angular2/router';
import {App} from './app';

bootstrap(App, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);