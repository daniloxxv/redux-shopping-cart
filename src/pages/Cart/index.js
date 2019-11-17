import React from 'react';
import {connect} from 'react-redux'
import {MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md'

import {Container, ProductTable, Total} from './styles'

function Cart({cart, dispatch}) {
    console.log(cart)
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
                                <span>{product.price}</span>
                            </td>
                            <td>
                                <div>
                                <button type='button'>
                                    <MdRemoveCircleOutline size= {20} color='#7159c1'/>
                                </button>

                            <input type="number" readOnly value={product.amount} />

                                <button type='button'>
                                    <MdAddCircleOutline size= {20} color='#7159c1'/>
                                </button>
                                </div>
                            </td>
                            <td>
                                <strong>
                                    $398.00
                                </strong>
                            </td>
                            <td>
                                <div>
                                <button type='button'>
                                    <MdDelete onClick={()=>dispatch({type: 'REMOVE_FROM_CART', id: product.id}) } size= {20} color='#7159c1'/>
                                </button>
                                </div>
                            </td>
                        </tr>

                    ))}
                    
                </tbody>
           </ProductTable>

           <footer>
               <button type="button">Place my order</button>

               <Total>
                   <span>TOTAL</span>
                   <strong>$1,999.00</strong>
               </Total>
           </footer>
        </Container>
    )
}

const mapStateToProps = state =>({
  cart: state.cart  
})

export default connect(mapStateToProps)(Cart)