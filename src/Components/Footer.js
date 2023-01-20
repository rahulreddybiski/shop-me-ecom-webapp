import React from 'react'
import styled from 'styled-components'
import {CiFacebook,CiTwitter,CiInstagram} from 'react-icons/ci'
function Footer() {
  return (
    <Container>
        <Topcontainer>
            <Left>
                <h3>OUR STORY</h3>
                <ul>
                    <li>About Us</li>
                    <li>Care</li>
                    <li>Terms of service</li>
                    <li>Refund policy</li>
                    <li>Blog</li>
                </ul>
            </Left>
            <Middle>
                <h3>SUPPORT</h3>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Shipping Policy</li>
                    <li>Return Policy</li>
                    <li>Contact Us</li>
                    <li>FAQ</li>
                </ul>
            </Middle>
            <Middle>
                <h3>SHOP BY CATEGORY</h3>
                <ul>
                    <li>Shirts</li>
                    <li>Jeans</li>
                    <li>Shorts</li>
                    <li>T-shirts</li>
                    <li>More</li>
                </ul>
            </Middle>
            <Middle>
                <h3>ORDERS</h3>
                <ul>
                    <li>Track Your Order</li>
                    <li>Return</li>
                </ul>
            </Middle>
            <Middle>
                <h3>SUPPORT</h3>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Shipping Policy</li>
                    <li>Return Policy</li>
                    <li>Contact Us</li>
                    <li>FAQ</li>
                </ul>
            </Middle>
        </Topcontainer>
        <Bottomcontainer>
            <CiFacebook />
            <CiTwitter />
            <CiInstagram />
        </Bottomcontainer>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    margin-top  : 30px;
    height : 20rem;
    width : 100%;
    background-color : #DCDCDC;
    display : flex;
    flex-direction : column;

`
const Topcontainer = styled.div`
    display : grid;
    grid-template-columns : repeat(5,1fr);
    margin : 30px;
    
`

const Left = styled.div`
    h3{
        margin-bottom : 20px;
        color : black;
    }
    ul{
        li{
            color : black;
            margin-bottom : 10px;
        }
    }
    `
    
    const Middle = styled.div`
        h3{
            margin-bottom : 20px;
            color : black;
        }
        ul{
            li{
                color : black;
                margin-bottom : 10px;
            }
        }
    `

const Bottomcontainer = styled.div`
        display : flex;
        gap : 1rem;
        font-size : 40px;
        color : black;
        margin-inline : auto;
    `
