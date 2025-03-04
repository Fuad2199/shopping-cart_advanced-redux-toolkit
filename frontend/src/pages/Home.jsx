import * as React from 'react'
import { useGetAllProductsQuery } from "../features/productsApi";

const Home = () => {
  const {data, error, isLoading} = useGetAllProductsQuery()
  if (isLoading) {
    return <p>Loading...</p>
  } else if (error) {
    return <p>Error: {error.message}</p>
  } else {
  return (
  <div>
    <h1>{data?.map(product => <div key={product.id} className='product'>
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <div className="details">
        <span>{product.desc}</span>
        <span className='price'>{product.price}</span>
      </div>
      <button>Add To Cart</button>
    </div>
  )}</h1>
  </div>
  );
}}

export default Home