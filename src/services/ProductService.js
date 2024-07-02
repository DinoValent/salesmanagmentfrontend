export class ProductService {
    constructor() {
      this.products = [
        {
          id: 1,
          name: 'Laptop',
          brand: 'Dell',
          category: 'Electronics',
          price: 1000.00,
        },
        {
          id: 2,
          name: 'Smartphone',
          brand: 'Samsung',
          category: 'Electronics',
          price: 700.00,
        },
        // Agrega más productos de prueba según sea necesario
      ];
    }
  
    getAllProducts() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(this.products);
        }, 500);
      });
    }
  
    deleteProduct(id) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.products = this.products.filter(product => product.id !== id);
          resolve();
        }, 500);
      });
    }
  }
  