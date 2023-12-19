import React, { useState } from 'react';
import { CustomerData } from '../data';
import List from './List';
import Header from './Header';
import Add from './Add';
import Edit from './Edit';
import Swal from 'sweetalert2';

const Dasboards = () => {
  const [customer, setCustomer] = useState(CustomerData);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  

  const handleEdit = (id) => {
    const selectedCustomer = customer.find((c) => c.id === id);
    setSelectedCustomer(selectedCustomer);
    setIsEdit(true);
  };
  
  const handleDelete = (id) => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: 'You won`t be able to delete',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it',
      cancelButtonText: 'No, cancel',
    }).then((result) => {
      if (result.value) {
        const updatedCustomer = customer.filter((c) => c.id !== id);
        setCustomer(updatedCustomer);
        
        Swal.fire({
          icon: 'success',
          title: 'Deleted',
          text: 'Data has been deleted successfully',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  

  return (
    <div className='container'>
      {!isAdd && !isEdit && (
        <>
          <Header setIsAdd={() => setIsAdd(true)} />
          <List
            customer={customer}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}

      {isAdd && (
        <Add
          customer={customer}
          setCustomer={setCustomer}
          setIsAdd={() => setIsAdd(false)}
        />
      )}

      {isEdit && (
        <Edit
          customer={customer}
          selectedCustomer={selectedCustomer}
          setCustomer={setCustomer}
          setIsEdit={() => setIsEdit(false)}
        />
      )}
    </div>
  );
};

export default Dasboards;
