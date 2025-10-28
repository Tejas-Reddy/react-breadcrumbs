import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {

    const { id } = useParams()

    const [singleProduct, setSingleProduct] = useState(null)

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json()).then((res) => {
            setSingleProduct(res)
        })
    }, [])

    return (
        <>
            <div className='title'>Product Details</div>
            {singleProduct && (
                <div className='product-main-con'>
                    <div className='product-card' key={singleProduct.id}>
                        <img className='product-image' src={singleProduct.thumbnail} alt={singleProduct.title} />
                        <div className="product-title">{singleProduct.title}</div>
                        <div className="proudct-desc">{singleProduct.price}</div>
                        <div className="proudct-desc">{singleProduct.description}</div>
                    </div>
                </div>
            )}

        </>
    )
}
