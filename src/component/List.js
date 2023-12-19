import React from 'react'

const List = ({ customer, handleEdit, handleDelete }) => {
    // const formatter=new Intl.NumberFormat('en-us',{
    //     style:'currency',
    //     currency:'usp',
    //     minimumFractionDigits:null
    // })
    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Customer Number</th>
                        <th> Meter Serial Number</th>
                        <th colSpan={2} className='text-center'>Action</th>


                    </tr>
                </thead>

                <tbody>
                    {
                        customer.length > 0 ? (
                            customer.map((customer, i) => (
                                <tr key={customer.id}>
                                    <td>{i + 1}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.address}</td>
                                    <td>{customer.customerno}</td>
                                    <td>{customer.srno}</td>
                                    <td className='text-right'>
                                        <button className='button muted button' onClick={() => handleEdit(customer.id)}>Edit</button>
                                    </td>
                                    <td className='text-left'>
                                        <button className='button muted button' onClick={() => handleDelete(customer.id)}>Delete</button>

                                    </td>
                                </tr>
                            )

                            )
                        ) :
                            (
                                <tr>
                                    <td colSpan={6}>No Employees</td>
                                </tr>
                            )

                    }
                </tbody>
            </table>
        </div>
    )
}

export default List