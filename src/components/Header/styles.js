import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    h1 {
        color: white;
        font: 20px Roboto, sans-serif;
    }
`

export const Logo = styled(Link)`
    display: flex;
    align-items: baseline;
    svg {
        color: #FFF;
        margin-left: 10px;
        height: 15px;
        width: 30px;
    }
`

export const Cart = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.7
    }

    div {
      text-align: right;
      margin-right: 10px;

      strong {
          display: block;
          color: #FFF;
      }  

      span {
          font-size: 12px;
          color: #999;
      }
    }
`