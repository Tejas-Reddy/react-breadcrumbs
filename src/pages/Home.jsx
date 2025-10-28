import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((res) => {
                const sliceProducts = res.products.slice(0, 6)
                setProducts(sliceProducts)
            })
    }, [])

    return (
        <>
            <div className='title'>Products List</div>
            <div className='product-main-con'>
                {products.map((product) => (
                    <div className='product-card' key={product.id}>
                        <Link className='prod-link' to={`/productList/${product.id}`}>
                            <img className='product-image' src={product.thumbnail} alt={product.title} />
                            <div className="product-title">{product.title}</div>
                            <div className="proudct-desc">{product.price}</div>
                            <div className="proudct-desc">{product.description}</div>
                        </Link>
                    </div>
                ))}
                 <Link to='/productList'>
                     <button className='view-all-btn'>View All Products</button>
                </Link>
            </div>
        </>
    )
}
