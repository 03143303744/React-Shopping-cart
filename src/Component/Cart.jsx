import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {

  const [expandedIds, setExpandedIds] = useState([]);
  
  const toggleExpand = (productId) => {
    if (expandedIds.includes(productId)) {
      setExpandedIds(expandedIds.filter(id => id !== productId));
    } else {
      setExpandedIds([...expandedIds, productId]);
    }
  };

  const isExpanded = (productId) => expandedIds.includes(productId);

  return (
    <>
    <div className='container mt-3 ' style={{ width: '700px' }}>
      <div className='row'>
        {cart.length === 0 ? (
          <>
            <div className='text-center'>
              <p>Your Cart is Empty</p>
              <Link to='/' className='btn btn-warning'>Continue Shopping</Link>
            </div>
          </>
        ) : (
          cart.map((product) => (
            <div key={product.id} className='col Cart-main-box my-2'>
              <div className='img-box-cart'>
                <img src={product.imgSrc} alt='' />
              </div>
              <div className='cart-DTl-box'>
                <h4>{product.title}</h4>
                {product.description.split(' ').length > 10 ? (
                  <div>
                    <p>
                      {isExpanded(product.id)
                        ? product.description
                        : `${product.description.split(' ').slice(0, 15).join(' ')}...`}
                    </p>
                    <Button
                      variant='link'
                      onClick={() => toggleExpand(product.id)}
                    >
                      {isExpanded(product.id) ? 'Read less' : 'Read more'}
                    </Button>
                  </div>
                ) : (
                  <p>{product.description}</p>
                )}
                <div className=''>
                  <Button className='mx-2'>Buy Now</Button>
                  <Button>Remove</Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    {
      cart.length != 0 &&(
        <div className='container my-5 text-centers' style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <button className='btn btn-warning mx-4'>CheckOut</button>
      <button onClick={()=>setCart("")} className='btn btn-danger'>Clear Cart</button>
    </div>
      )
    }
    </>
  );
};

export default Cart;
