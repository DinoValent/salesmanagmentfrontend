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
  }
  