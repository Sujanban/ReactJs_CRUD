import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import "../../App.css"

const Home = () => {
    const [product, setProduct] = useState([]);


    const fetchProduct = () => {
        // return axios.get("https://fakestoreapi.com/products")
        return axios.get("http://localhost:3000/dataitem")
            .then((response) => setProduct(response.data));
    }

    // performing Delete
    const handleDelete = (id) => {
        const conf = window.confirm("Do you want to Delete");
        if (conf) {
            axios.delete("http://localhost:3000/dataitem/" + id)
                .then(res => alert("Product Deleted Sucessfully!"))
                .catch(err => console.log(err))
        }

    }

    useEffect(() => {
        fetchProduct();
    }, [])
    return (
        <>
            <h1 className='text-center p-8 font-bold text-xl'>Product List</h1>
            <Link className='px-4 py-2 bg-slate-600 rounded-md m-8 text-white uppercase' to="/create">Add Product</Link>
            <table className='m-8 border-black border-2'>
                <thead>
                    <tr className=' bg-slate-100 '>
                        <th className='p-4'>ID</th>
                        <th className='p-4'>TITLE</th>
                        <th>PRICE</th>
                        <th>CATEGORY</th>
                        <th>DESCRIPTION</th>
                        <th className='p-4'>IMAGE</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody className='border-2 border-black'>

                    {product && product.map((item) => (
                        <tr className=' border-2 border-black'>
                            <td className='px-2'>{item.id}</td>
                            <td className='px-2'>{item.title}</td>
                            <td className='px-2'>{item.price}</td>
                            <td className='px-2'>{item.category}</td>
                            <td className='px-2'>{item.description}</td>
                            <td className='px-2'><img className="w-96" src={item.image} /></td>
                            <td className='flex'>
                                <Link className='px-4 py-2 bg-slate-600 rounded-md m-2 text-white uppercase' to={`/edit/${item.id}`}>Edit</Link>
                                <button className='px-4 py-2 bg-red-600 rounded-md m-2 text-white uppercase' onClick={e => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Home