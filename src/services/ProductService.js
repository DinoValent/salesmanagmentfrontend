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
    getProductById(id) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const product = this.products.find(product => product.id === parseInt(id));
          if (product) {
            resolve(product);
          } else {
            reject(new Error('Product not found'));
          }
        }, 500);
      });
    }
  
    updateProduct(id, updatedProduct) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const index = this.products.findIndex(product => product.id === parseInt(id));
          if (index !== -1) {
            this.products[index] = { ...this.products[index], ...updatedProduct };
            resolve(this.products[index]);
          } else {
            reject(new Error('Product not found'));
          }
        }, 500);
      });
    }
    createProduct(newProduct) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const exists = this.products.some(product => product.id === parseInt(newProduct.id));
          if (exists) {
            reject(new Error('Product ID already exists'));
          } else {
            this.products.push(newProduct);
            resolve(newProduct);
          }
        }, 500);
      });
    }
  }
  