import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ProductList() {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((res) => {
                setAllProducts(res.products)
            })
    }, [])
    return (
        <>
            <div className='title'> All Products</div>
            <div className='product-main-con'>
                {allProducts.map((product) => (
                    <div className='product-card' key={product.id}>
                        <Link className='prod-link' to={`/productList/${product.id}`}>
                            <img className='product-image' src={product.thumbnail} alt={product.title} />
                            <div className="product-title">{product.title}</div>
                            <div className="proudct-desc">{product.price}</div>
                            <div className="proudct-desc">{product.description}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}
