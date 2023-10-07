import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate, useParams,Link } from 'react-router-dom'


const Edit = () => {
  const [product, setProduct] = useState([]);
  const { id, title } = useParams();
  const navigate = useNavigate();


  const fetchProduct = () => {
    axios.get("http://localhost:3000/dataitem/" + id)
      // axios.get("https://fakestoreapi.com/products/" + id)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    fetchProduct();
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    axios.put("http://localhost:3000/dataitem/" + id, product)
      .then(res => alert("Records Updated Sucessfully"))
    console.log(product)
    navigate('/')
  }
  return (
    <>
      <h1 className='text-center font-bold text-xl uppercase  py-8'>Edit products</h1>
      <Link className='mx-16 p-2 bg-slate-600 text-white rounded-md' to='/'>Back</Link>
      <form className='max-w-4xl mx-auto  grid border-2 border-slate-100' onSubmit={handleClick}>

        <div className=' mb-4 '>
          <h1 className='p-2 bg-slate-100 font-semibold'>Product ID</h1>
          <input className=' p-2 w-full outline-none' type="text" disabled placeholder='ID' value={id} />
        </div>

        <div className=' mb-4 '>
          <h1 className='p-2 bg-slate-100 font-semibold'>Enter Product Name</h1>
          <input className=' p-2 w-full outline-none' type="text" placeholder='Price' value={product?.title} onChange={(e) => setProduct({ ...product, title: e.target.value })} />
        </div>

        <div className=' mb-4 '>
          <h1 className='p-2 bg-slate-100 font-semibold'>Enter Price</h1>
          <input className=' p-2 w-full outline-none' type="text" placeholder='Price' value={product?.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} />
        </div>

        <div className=' mb-4 '>
          <h1 className='p-2 bg-slate-100 font-semibold'>Choose Category</h1>
          <input className=' p-2 w-full outline-none' type="text" placeholder='Category' value={product?.category} onChange={(e) => setProduct({ ...product, category: e.target.value })} />
        </div>

        <div className=' mb-4 '>
          <h1 className='p-2 bg-slate-100 font-semibold'>Enter Product Description</h1>
          <input className=' p-2 w-full outline-none' type="text" placeholder='Description' value={product?.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} />
        </div>

        <div className=' mb-4 '>
          <h1 className='p-2 bg-slate-100 font-semibold'>Insert Product Image</h1>
          <input className=' p-2 w-full outline-none' type="file" placeholder='Image' onChange={(e) => setProduct({ ...product, image: e.target.value })} />
        </div>

        <div className=' mb-4 '>
          <img className='w-40' src={product?.image} alt="" />
        </div>

        <div className=' mb-4 '>
          <button className='p-2 bg-slate-600 text-white rounded-md'>Update</button>
        </div>
      </form>
    </>

  )
}

export default Edit