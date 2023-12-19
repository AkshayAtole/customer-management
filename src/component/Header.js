import React from 'react';

const Header = ({ setIsAdd }) => {
    return (
        <header>
            <h1>Customer Management Application</h1>
            <div style={{ marginTop: "30px", marginBottom: "13px" }}>
                <button onClick={() => setIsAdd(true)} className='round-button'>
                    Add Button
                </button>
            </div>
        </header>
    );
};

export default Header;
