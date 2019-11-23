import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md'

import {formatPrice} from '../../util/format'
import history from '../../services/history'
import * as CartActions from '../../store/modules/cart/actions'
import {Container, ProductTable, Total} from './styles'

export default function Cart() {

    const total = useSelector(state => state.cart.reduce((total, product)=>total + product.price * product.amount, 0))

    const cart = useSelector(state=>state.cart.map(product=>({
        ...product,
        subtotal: formatPrice(product.price * product.amount)
    })))

    const dispatch = useDispatch()

    function increment(product){
        dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1))
    }
    function decrement(product){
        dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1))
    }

    return (
        <Container>
           <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th/>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(product=>(
                        <tr key = {product.id}>
                            <td>
                                <img src={product.image}
                                 alt={product.title}/>
                            </td>
                            <td>
                                <strong>{product.title}</strong>
                                <span>{product.formatedPrice}</span>
                            </td>
                            <td>
                                <div>
                                <button type='button'>
                                    <MdRemoveCircleOutline onClick={()=>decrement(product)} size= {20} color='#7159c1'/>
                                </button>

                            <input type="number" readOnly value={product.amount} />

                                <button type='button'>
                                    <MdAddCircleOutline    onClick={()=>increment(product)} size= {20} color='#7159c1'/>
                                </button>
                                </div>
                            </td>
                            <td>
                                <strong>
                                    {product.subtotal}
                                </strong>
                            </td>
                            <td>
                                <div>
                                <button type='button'>
                                    <MdDelete onClick={()=>dispatch(CartActions.removeFromCart(product.id)) } size= {20} color='#7159c1'/>
                                </button>
                                </div>
                            </td>
                        </tr>

                    ))}
                    
                </tbody>
           </ProductTable>

           <footer>
               <button type="button">Place my order</button>
               <button type="button" onClick={()=>history.push('/')}>Continue shopping</button>
               <Total>
                   <span>TOTAL</span>
                   <strong>{total}</strong>
               </Total>
           </footer>
        </Container>
    )
}