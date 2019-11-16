import React from 'react';
import { Link } from 'react-router-dom'
import { FaShoePrints} from 'react-icons/fa'
import { MdShoppingBasket } from 'react-icons/md'

import { Container, Cart} from './styles'

export default function Header() {
    return (
        <Container>
            <Link to="/" style={{textDecoration: "none"}}>
                <h1>Redux Shoestore <FaShoePrints /> </h1>
            </Link>
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