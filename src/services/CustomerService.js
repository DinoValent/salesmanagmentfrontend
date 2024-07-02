export class CustomerService {
    constructor() {
      this.customers = [
        {
          id: 1,
          name: 'John Doe',
          address: '123 Main St',
          phone: '555-1234',
          email: 'john@example.com',
        },
        {
          id: 2,
          name: 'Jane Smith',
          address: '456 Elm St',
          phone: '555-5678',
          email: 'jane@example.com',
        },
        // Agrega más clientes de prueba según sea necesario
      ];
    }
  
    getAllCustomers() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(this.customers);
        }, 500);
      });
    }
  
    deleteCustomer(id) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.customers = this.customers.filter(customer => customer.id !== id);
          resolve();
        }, 500);
      });
    }
  }
  