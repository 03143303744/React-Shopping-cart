import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './data';
import Product from './Product';

  const Searchitems = ({cart , setCart}) => {
  const { term } = useParams();
  const [fillterData, setfillterData] = useState([]);
  useEffect(() => {
    const filteredData = () => {
      const data = items.filter((p) => p.title.toLowerCase().includes(term.toLowerCase()))
      setfillterData(data)
    }
    filteredData()
  }, [term])
  return (
    <>
      <Product cart={cart} setCart={setCart}  items={fillterData} />
    </>
  )
}

export default Searchitems;
