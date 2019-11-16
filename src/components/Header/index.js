import React from 'react';
import { FaShoePrints} from 'react-icons/fa'
import { MdShoppingBasket } from 'react-icons/md'

import { Container, Cart, Logo} from './styles'

export default function Header() {
    return (
        <Container>
            <Logo to="/" style={{textDecoration: "none"}}>
                <h1>Redux Shoestore </h1><FaShoePrints width='100%' height='100%'/> 
            </Logo>
            <Cart to="/cart">
                <div>
                    <strong>My cart</strong>
                    <span>3 items</span>
                </div>
                <MdShoppingBasket size= {36} color="#FFF"/>
            </Cart>  
        </Container>
    )
}