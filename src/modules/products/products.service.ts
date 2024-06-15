import { Injectable } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { Product } from 'src/model/product.model';

@Injectable()
export class ProductService {
  private products: Product[] = [
    { id: 1, categoryId: 1, productName: 'Bánh tráng trộn', price: 10000 },
    { id: 2, categoryId: 2, productName: 'Trà sữa', price: 20000 },
    { id: 3, categoryId: 2, productName: 'Trà đào siêu ngon', price: 10000 },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  createProduct(productDto: ProductDto): Product {
    const newProduct: Product = {
      id: this.products.length + 1,
      ...productDto
    }
    this.products.push(newProduct);

    return newProduct;
  }

  // Hỏi tại sao chỗ này không truyền Number
  detailProduct(id): Product | Product[] {
    return this.products.find((item) => item.id === Number(id));
  }

  updateProduct(id: number, productDto: ProductDto): Product {
    const index = this.products.findIndex(item => item.id === Number(id));
    
    this.products[index].categoryId = productDto.categoryId;
    this.products[index].productName = productDto.productName;
    this.products[index].price = productDto.price;

    return this.products[index];
  }

  deleteProduct(): string {
    return 'Delete product';
  }
}
