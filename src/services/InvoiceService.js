export class InvoiceService {
    constructor() {
      this.invoices = [
        {
          id: 1,
          date: '2024-01-01',
          customer: { name: 'John Doe' },
          total: 100.00,
        },
        {
          id: 2,
          date: '2024-01-02',
          customer: { name: 'Jane Smith' },
          total: 150.00,
        },
        // Agrega más facturas de prueba según sea necesario
      ];
    }
  
    getAllInvoices() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(this.invoices);
        }, 500);
      });
    }
  
    deleteInvoice(id) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.invoices = this.invoices.filter(invoice => invoice.id !== id);
          resolve();
        }, 500);
      });
    }
    createInvoice(newInvoice) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const exists = this.invoices.some(invoice => invoice.id === newInvoice.id);
          if (exists) {
            reject(new Error('Invoice ID already exists'));
          } else {
            this.invoices.push(newInvoice);
            resolve(newInvoice);
          }
        }, 500);
      });
    }
  }
  