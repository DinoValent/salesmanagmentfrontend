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

  getCustomerById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const customer = this.customers.find(customer => customer.id === parseInt(id));
        if (customer) {
          resolve(customer);
        } else {
          reject(new Error('Customer not found'));
        }
      }, 500);
    });
  }

    updateCustomer(id, updatedCustomer) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const index = this.customers.findIndex(customer => customer.id === parseInt(id));
          if (index !== -1) {
            this.customers[index] = { ...this.customers[index], ...updatedCustomer };
            resolve(this.customers[index]);
          } else {
            reject(new Error('Customer not found'));
          }
        }, 500);
      });
    }
    createCustomer(newCustomer) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const exists = this.customers.some(customer => customer.id === parseInt(newCustomer.id));
          if (exists) {
            reject(new Error('Customer ID already exists'));
          } else {
            this.customers.push(newCustomer);
            resolve(newCustomer);
          }
        }, 500);
      });
    }

  }
  