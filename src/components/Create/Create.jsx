import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import "../../App.css"
import axios from 'axios';

const Create = () => {
  const [product, setProduct] = useState({ title: "", price: "", category: "", description: "", image: "" });
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    // axios.post("https://fakestoreapi.com/products",product)
    axios.post("http://localhost:3000/dataitem", product)
      .then((res) => alert("Sucessfull"));

    navigate('/');
  }

  return (
    <div className=''>
      <h1 className='text-center font-bold text-xl uppercase  py-8'>ADD Products</h1>
      <form className='max-w-4xl mx-auto  grid border-2 border-slate-100' action="" onSubmit={handleClick}>

        <div className=' mb-4 '>
          <h1 className='p-2 bg-slate-100 font-semibold'>Enter Product Name</h1>
          <input className=' p-2 w-full outline-none' type="text" placeholder='Title' onChange={(e) => setProduct({ ...product, title: e.target.value })} />
        </div>

        <div className=' mb-4 '>
          <h1 className='p-2 bg-slate-100 font-semibold'>Enter Price</h1>
          <input className=' p-2 w-full outline-none' type="text" placeholder='Price' onChange={(e) => setProduct({ ...product, price: e.target.value })} />
        </div>

        <div className=' mb-4 '>
          <h1 className='p-2 bg-slate-100 font-semibold'>Choose Category</h1>
          <input className=' p-2 w-full outline-none' type="text" placeholder='Category' onChange={(e) => setProduct({ ...product, category: e.target.value })} />
        </div>

        <div className=' mb-4 '>
          <h1 className='p-2 bg-slate-100 font-semibold'>Enter Product Description</h1>
          <input className=' p-2 w-full outline-none' type="text" placeholder='Description' onChange={(e) => setProduct({ ...product, description: e.target.value })} />
        </div>

        <div className=' mb-4 '>
          <h1 className='p-2 bg-slate-100 font-semibold'>Insert Product Image</h1>
          <input className=' p-2 w-full outline-none' type="file" placeholder='Image' onChange={(e) => setProduct({ ...product, image: e.target.value })} />
        </div>

        <div className=' mb-4 '>
          <button className='p-2 bg-slate-600 text-white rounded-md'>Create</button>
        </div>
      </form>
    </div>
  )
}

export default Create