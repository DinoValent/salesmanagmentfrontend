import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CustomerService } from '../../services/CustomerService'; // Importa el servicio
import './NewCustomer.css';

const customerService = new CustomerService(); // Crea una instancia del servicio

const NewCustomer = () => {
  const [formData, setFormData] = useState({ Id: '', Name: '', Address: '', Email: '', Phone: '' });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    customerService.createCustomer({
      id: formData.Id,
      name: formData.Name,
      address: formData.Address,
      email: formData.Email,
      phone: formData.Phone,
    })
    .then(() => {
      alert('Customer created successfully'); // Muestra un mensaje de éxito
      navigate('/customer');
    })
    .catch(error => console.error(error));
  };

  return (
    <div className="card">
      <div className="card-header">New Customer</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Id">ID</label>
            <input
              type="text"
              name="Id"
              id="Id"
              className="form-control"
              placeholder=""
              aria-describedby="helpId"
              value={formData.Id}
              onChange={handleInputChange}
            />
            <small id="helpId" className="text-muted">
              Insert ID
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              name="Name"
              id="Name"
              className="form-control"
              placeholder=""
              aria-describedby="helpId"
              value={formData.Name}
              onChange={handleInputChange}
            />
            <small id="helpId" className="text-muted">
              Insert name
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="Address">Address</label>
            <input
              type="text"
              name="Address"
              id="Address"
              className="form-control"
              placeholder=""
              aria-describedby="helpId"
              value={formData.Address}
              onChange={handleInputChange}
            />
            <small id="helpId" className="text-muted">
              Insert Address
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              name="Email"
              id="Email"
              className="form-control"
              placeholder=""
              aria-describedby="helpId"
              value={formData.Email}
              onChange={handleInputChange}
            />
            <small id="helpId" className="text-muted">
              Insert Email
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="Phone">Phone</label>
            <input
              type="text"
              name="Phone"
              id="Phone"
              className="form-control"
              placeholder=""
              aria-describedby="helpId"
              value={formData.Phone}
              onChange={handleInputChange}
            />
            <small id="helpId" className="text-muted">
              Insert Phone
            </small>
          </div>
         
          <div className="btn-group" role="group" aria-label="">
            <button type="submit" className="btn btn-success">
              Add New Customer
            </button>
            <Link to={"/customer"} className="btn btn-primary">
              Cancel
            </Link>
          </div>
        </form>
      </div>
      <div className="card-footer text-muted">Footer</div>
    </div>
  );
};

export default NewCustomer;
