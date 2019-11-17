import React, {useEffect, useState} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { MdAddShoppingCart} from 'react-icons/md'

import api from '../../services/api'
import {formatPrice} from '../../util/format'
import { ProductList } from './styles'
import * as CartActions from '../../store/modules/cart/actions'

function Home({addToCartRequest, amount}) {

    const [products, setProducts] = useState([])

    const handleAddProduct = id =>{
        addToCartRequest(id)
    }

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

const mapDispatchToProps = dispatch => bindActionCreators(CartActions,dispatch)

const mapStateToprops = state =>({
    amount: state.cart.reduce((amount, product)=>({
        ...amount, [product.id]: product.amount
    }), {})
})

export default connect(mapStateToprops,mapDispatchToProps)(Home);