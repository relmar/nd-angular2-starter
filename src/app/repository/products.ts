import {Product} from '../model/product';

export class Products {
	constructor() {
		
	}
	
	public getProducts () : Promise<Product[]> {
		return Promise.resolve([{
			name: 'Product 1',
			price: 1100,
			description: 'test',
			image: 'http://lorempixel.com/400/200/'
		}, {
			name: 'Product 1',
			price: 1103,
			description: 'test',
			image: 'http://lorempixel.com/400/200/'
		}, {
			name: 'Product 1',
			price: 1102,
			description: 'test',
			image: 'http://lorempixel.com/400/200/'
		}, {
			name: 'Product 4',
			price: 1104,
			description: 'test',
			image: 'http://lorempixel.com/400/200/'
		},{
			name: 'Product 22',
			price: 1100,
			description: 'test',
			image: 'http://lorempixel.com/400/200/'
		},{
			name: 'Product 123',
			price: 1100,
			description: 'test',
			image: 'http://lorempixel.com/400/200/'
		},{
			name: 'Product 22',
			price: 1100,
			description: 'test',
			image: 'http://lorempixel.com/400/200/'
		},{
			name: 'Product 34234',
			price: 1120,
			description: 'test',
			image: 'http://lorempixel.com/400/200/'
		}]);
  }
}