import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2';

const Add = ({ customer, setCustomer, setIsAdd }) => {
    const [name, SetName] = useState('');
    const [address, SetAddress] = useState('');
    const [customerno, setCustomerNo] = useState('');
    const [srno, setSrNo] = useState('');
    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = (e) => {
        e.preventDefault();

        if (!name || !address || !customerno || !srno) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required',
                showConfirmButton: true
            });
        }

        const id = customer.length + 1;
        const newCustomer = {
            id,
            name,
            address,
            customerno,
            srno,
        };

        // Move these lines outside the if block
        customer.push(newCustomer);
        setCustomer([...customer]); // Ensure to create a new array to trigger re-render
        setIsAdd(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: 'Customer has been Added',
            showConfirmButton: false,
            timer: 1500,
        });
    };

    return (
        <div className='small-container'>
            <form onSubmit={handleAdd}>
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
                <label htmlFor='srno'>Serial Number</label>
                <input
                    id='srno'
                    type='Number'
                    name='srno'
                    value={srno}
                    onChange={(e) => setSrNo(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type='submit' value="Add" />
                    <input style={{ marginLeft: '12px' }}
                        className='muted-button'
                        type='button'
                        value="cancel"
                        onClick={() => setIsAdd(false)}
                    />


                </div>
            </form>

        </div>
    )
}

export default Add