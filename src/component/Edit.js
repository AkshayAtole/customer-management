import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2';

const Edit = ({ customer, selectedCustomer, setCustomer, setIsEdit }) => {
    const id = selectedCustomer.id;
    const [name, SetName] = useState(selectedCustomer.name);
    const [address, SetAddress] = useState(selectedCustomer.address);
    const [customerno, setCustomerNo] = useState(selectedCustomer.customerno);
    const [srno, setSrNo] = useState(selectedCustomer.srno);
    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])



    const handleUpdate = (e) => {
        e.preventDefault();

        if (!name || !address || !customerno || !srno) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required',
                showConfirmButton: true,
            });
        }

        const updatedCustomer = customer.map((c) =>
            c.id === id
                ? {
                    ...c,
                    name,
                    address,
                    customerno,
                    srno
                }
                : c
        );

        setCustomer(updatedCustomer);
        setIsEdit(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: 'Customer has been updated',
            showConfirmButton: false,
            timer: 1500,
        });
    };


    //     e.preventDefault();

    //     if (!name || !address || !customerno || !srno) {
    //       return Swal.fire({
    //         icon: 'error',
    //         title: 'Error!',
    //         text: 'All fields are required',
    //         showConfirmButton: true,
    //       });
    //     }


    //     const customer= {
    //       id,
    //       name,
    //       address,
    //       customerno,
    //       srno,
    //     };
    //     for(let i=0;i<customer.length;i++){
    //         if(customer[i].id===id)
    //         {
    //             customer.splice(i,1,customer);
    //             break;
    //         }
    //     }


    //     setCustomer(customer); 
    //     setIsEdit(false);

    //     Swal.fire({
    //       icon: 'success',
    //       title: 'updated!',
    //       text: 'Customer has been updated',
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //   };
    return (
        <div className='small-container'>
            <form onSubmit={handleUpdate}>
                <h1>Add Customer</h1>
                <label htmlFor='firstName'>Name</label>
                <input
                    id='name'
                    type='text'
                    ref={textInput}
                    name='name'
                    value={name}
                    onChange={(e) => SetName(e.target.value)}
                />
                <label htmlFor='address'>Address</label>
                <input
                    id='address'
                    type='text'
                    name='address'
                    value={address}
                    onChange={(e) => SetAddress(e.target.value)}
                />
                <label htmlFor='customerno'>Customer Number</label>
                <input
                    id='customer'
                    type='Number'
                    name='customer'
                    value={customerno}
                    onChange={(e) => setCustomerNo(e.target.value)}
                />
                <label htmlFor='srno'> Meter Serial Number</label>
                <input
                    id='srno'
                    type='Number'
                    name='srno'
                    value={srno}
                    onChange={(e) => setSrNo(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type='submit' value="Update" />
                    <input style={{ marginLeft: '12px' }}
                        className='muted-button'
                        type='button'
                        value="cancel"

                        onClick={() => setIsEdit(false)}
                    />


                </div>
            </form>

        </div>
    )
}

export default Edit