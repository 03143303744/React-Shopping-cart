import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ items, cart, setCart }) => {
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
            <div className='container py-2 mt-5'>
                <div className='row'>
                    {
                        items.map((product) => (
                            <div className='col-lg-4 col-md-6 mt-3 text-center carditems' key={product.id}>
                                <Card style={{ width: '18rem' }}>
                                    <Link className='ProductDetail' to={`/product/${product.id}`}>
                                        <Card.Img variant="top" src={product.imgSrc} />
                                    </Link>
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>
                                            {product.description}
                                        </Card.Text>
                                        <Button variant="primary mx-2">{product.price + " ₹"}</Button>
                                        <Button
                                            onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}
                                            variant="warning"
                                        >Go To cart</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}

export default Product;
