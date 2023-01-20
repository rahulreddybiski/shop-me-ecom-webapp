import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FiShoppingCart} from 'react-icons/fi'
import { useStateValue } from '../StateProvider'
function Header() {

  const [{cart}] = useStateValue();

  const cartFunction = () => {
    alert('Sorry... Cart is not yet Ready')
  }

  return (
    <TopMenu>
                <Shipping_header>
                    <Link to='/'>
                        <p>FREE SHIPPING ON ALL ORDERS</p>
                    </Link>
                </Shipping_header>
                <MainMenu>
                    <LeftMenu>
                        <p>NEW ARRIVALS</p>
                        <p>SHOP</p>
                    </LeftMenu>
                    <Logo>
                        <Link to='/'>
                            <h3>Shop-Me</h3>
                        </Link>
                    </Logo>
                    <RightMenu>
                        <p>track order</p>
                        <Link to='/Signin'>
                             <p>Sign In</p>
                        </Link>
                            <Cart onClick={cartFunction}>
                                <ShoppingCart>
                                    <FiShoppingCart />
                                </ShoppingCart>
                                <p>{cart?.length}</p>
                            </Cart>
                    </RightMenu>
                </MainMenu>
            </TopMenu>
  )
}

export default Header

const TopMenu = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    color : white;
    list-style : none;
`
const Shipping_header = styled.div`
    width : 100%;
    padding : 5px 0;
    text-align : center;
    color  : white;
    border-bottom : 1px solid white;
    cursor : pointer;
    text-decoration : none;
    letter-spacing : 0.2rem;
    font-size : 0.65rem;
    font-weight : 700;
`

const MainMenu= styled.div`
    height : 7rem;
    display : flex;
    align-items : center;
    justify-content : center;
    gap : 4rem;
`

const LeftMenu = styled.div`
    display : flex;
    gap : 1rem;
    p{
        cursor : pointer;
        border-bottom : 2px solid transparent;
        &:hover {
            border-bottom : 2px solid white;
        }
    }
`

const Logo = styled.div`
    font-size : 1.5rem;
    cursor: pointer;
`

const RightMenu = styled.div`
    display : flex;
    text-transform : uppercase;
    gap : 1rem;
    p{
        cursor : pointer;
        border-bottom : 2px solid transparent;


        &:hover {
            border-bottom : 2px solid white;
        }
    }

   
`
const ShoppingCart = styled.div`
    margin-left : 10px;
    cursor : pointer;
`
const Cart = styled.div`
    display : flex;
    p{
        font-size : 10px;
       
    }
`