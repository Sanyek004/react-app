import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product = () => {
 const [product, setProduct] = useState(null);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState(null);
 const [number, setNumber] = useState('1');

 const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

 useEffect(() => {
   const fetchProduct = async () => {
     try {
       const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${number}`);
       setProduct(response.data);
     } catch (error) {
       setError('Такого товара нет');
     } finally {
       setIsLoading(false);
     }
   };
   fetchProduct();
 }, [number]);

 if (isLoading) {
   return <p>Товар грузится</p>;
 }

 if (error) {
   return (
     <div>
       <p>{error}</p>
       <img src="https://media.tenor.com/JvArM7ZO5JIAAAAM/bavatogay-ricardo-milos.gif"/>
     </div>
   );
 }

 return (
    <div>
    {product && (
   <div>
    {/* <input type="text" value={number} onChange={handleNumberChange} /> */}
    
     <h2>{product.name}</h2>
     <p>{product.description}</p>
     <img src="https://media.tenor.com/-68EBlyuEi4AAAAM/%D1%87%D1%82%D0%BE-%D0%B7%D0%B0-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D0%BC%D0%B5%D0%BB%D1%81%D1%82%D1%80%D0%BE%D0%B9.gif"/>   
   </div>
   )}
   </div>
 );
};

export default Product;