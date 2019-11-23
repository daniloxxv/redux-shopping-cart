import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { MdAddShoppingCart} from 'react-icons/md'

import api from '../../services/api'
import {formatPrice} from '../../util/format'
import { ProductList } from './styles'
import * as CartActions from '../../store/modules/cart/actions'

export default function Home() {

    const [products, setProducts] = useState([])

    const dispatch = useDispatch()

    const handleAddProduct = id =>{
        dispatch(CartActions.addToCartRequest(id))
    }

    const amount = useSelector(state=>state.cart.reduce((sum, product)=>({
        ...sum, [product.id]: product.amount
    }), {}))
    useEffect(()=>{
      (async ()=>{
        const response = await api.get('products')
        const data = response.data.map(product=>({
            ...product, 
            formattedPrice: formatPrice(product.price)
        }))
        setProducts(data)
      })()   
    },[])

    return (
        <ProductList>
            {products.map((product)=>(
                    <li key={product.id}>
                        <img src={product.image} alt={product.title}/>
                        <strong>{product.title}</strong>
                        <span>{product.formattedPrice}</span>
                        <button type="button" onClick={()=>handleAddProduct(product.id)}>
                            <div>
                                <MdAddShoppingCart size={16} color='#FFF'/> {amount[product.id] || 0}
                            </div>
                            <span>Add to cart</span>
                        </button>
                    </li>)
            )}

        </ProductList>
    )
}
