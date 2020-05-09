export class Product {
    constructor(
        public sku: string,
        public name: string,
        public imgUrl: string,
        public department: string[],
        public price: number
        ){
            
        }
}