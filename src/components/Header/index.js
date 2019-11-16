import React from 'react';
import {connect} from 'react-redux';
import { FaShoePrints} from 'react-icons/fa'
import { MdShoppingBasket } from 'react-icons/md'

import { Container, Cart, Logo} from './styles'

function Header({numberOfItems}) {
    return (
        <Container>
            <Logo to="/" style={{textDecoration: "none"}}>
                <h1>Redux Shoestore </h1><FaShoePrints width='100%' height='100%'/> 
            </Logo>
            <Cart to="/cart">
                <div>
                    <strong>My cart</strong>
                    <span>{numberOfItems} items</span>
                </div>
                <MdShoppingBasket size= {36} color="#FFF"/>
            </Cart>  
        </Container>
    )
}

export default connect(state=>({
    numberOfItems: state.cart.length
}))(Header);