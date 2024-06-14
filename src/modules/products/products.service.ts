import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  getProducts(): string {
    return 'Get list products';
  }

  createProduct(): string {
    return 'Create product';
  }

  detailProduct(): string {
    return 'Detail product';
  }

  updateProduct(): string {
    return 'Update product';
  }

  deleteProduct(): string {
    return 'Delete product';
  }
}
