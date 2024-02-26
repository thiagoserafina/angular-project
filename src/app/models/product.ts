export class Product {
  id: number;
  src: string;
  title: string;
  description: string;

  constructor(id: number, src: string, title: string, description: string) {
    this.id = id;
    this.src = src;
    this.title = title;
    this.description = description;
  }
}

export class ProductIterator implements IterableIterator<Product> {
  private index = 0;

  constructor(private products: Product[]) {}

  next(): IteratorResult<Product> {
    if (this.index < this.products.length) {
      return { value: this.products[this.index++], done: false };
    } else {
      return { done: true, value: undefined };
    }
  }

  [Symbol.iterator](): IterableIterator<Product> {
    return this;
  }
}
