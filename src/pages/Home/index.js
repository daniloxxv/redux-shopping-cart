import React, {useEffect, useState} from 'react';
import { MdAddShoppingCart} from 'react-icons/md'
import api from '../../services/api'
import {formatPrice} from '../../util/format'
import { ProductList } from './styles'

export default function Home() {

    const [products, setProducts] = useState([])

    useEffect(()=>{
      (async ()=>{
        const response = await api.get('products')
        const data = response.data.map(product=>({
            ...product, 
            price: formatPrice(product.price)
        }))
        setProducts(data)
      })()   
    },[])

    return (
        <ProductList>
            {products.map(({id, title, price, image})=>(
                    <li key={id}>
                        <img src={image} alt={title}/>
                        <strong>{title}</strong>
                        <span>{price}</span>
                        <button type="button">
                            <div>
                                <MdAddShoppingCart size={16} color='#FFF'/> 3
                            </div>
                            <span>Add to cart</span>
                        </button>
                    </li>)
            )}

        </ProductList>
    )
}