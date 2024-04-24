import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { items } from './data';
import Product from './Product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();
  const [product, setproduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    const FillterProduct = items.filter((product) => product.id == id)
    setproduct(FillterProduct[0]);
    const RelatedProduct = items.filter((RelProduct) => RelProduct.category === product.category)
    setRelatedProduct(RelatedProduct);
  }, [id, product.category]);



  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id, price, title, description, imgSrc
    }
    setCart([...cart, obj]);
    console.log("this is cart ", cart)

    toast.success('Item Added on Cart', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

    });

  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"

      />
      <div className='container mt-5'>
        <div className='itemsdetailsbox'>
          <div className='img-box'>
            <img src={product.imgSrc} alt="" />
          </div>
          <div className='productDetails'>
            <Card.Body className='text-center card-details-items'>
              <div>
                <Card.Title><h2>{product.title}</h2></Card.Title>
              </div>
              <div>
                <Card.Text>
                  <p>{product.description}</p>
                </Card.Text>
              </div>
              <div>
                <Button variant="primary mx-2">{product.price + " ₹"}</Button>
                <Button
                  onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}
                  variant="warning"
                >Go To cart</Button>
              </div>
            </Card.Body>
          </div>
        </div>
      </div>
      <h1 className='text-center mt-5'>Related Products</h1>
      <Product cart={cart} setCart={setCart} items={relatedProduct} />
    </>
  )
}
export default ProductDetail;
