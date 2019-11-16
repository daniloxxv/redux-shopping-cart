import React from 'react';
import {MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md'

import {Container, ProductTable, Total} from './styles'

export default function Cart() {
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
                    <tr>
                        <td>
                            <img src='data:image/webp;base64,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' 
                             alt='Shoe'/>
                        </td>
                        <td>
                            <strong>An ordinary shoe</strong>
                            <span>$199.00</span>
                        </td>
                        <td>
                            <div>
                            <button type='button'>
                                <MdRemoveCircleOutline size= {20} color='#7159c1'/>
                            </button>

                        <input type="number" readOnly value={2} />

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
                                <MdDelete size= {20} color='#7159c1'/>
                            </button>
                            </div>
                        </td>
                    </tr>
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