import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {
    const handleAllProduct=() =>{
        fetch('https://rocky-garden-16450.herokuapp.com/addProduct',{
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        })
    }
    return (
        <div>
           <form action="">
           <p><span>Name:</span><input type="text"/></p>
            <p><span>Price</span><input type="text"/></p>
            <p><span>Quantity</span><input type="text"/></p>
            <p><span>image upload</span><input type="file"/></p>
           </form>
            <button onClick={handleAllProduct}>Add Product</button>
        </div>
    );
};

export default Inventory;