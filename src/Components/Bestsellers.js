import React from 'react'
import styled from 'styled-components'
import items from '../Helpers/bestseller'
import SellerProduct from './SellerProduct'
function Bestsellers() {

  return (
    <Container>
        <h2>Best Sellers</h2>
        <Wrapper>
            {
                items.map(item => (
                    <SellerProduct
                        key={item.id}
                        id={item.id}
                        secondImage = {item.secondImage}
                        image = {item.image}
                        title = {item.Title}
                        price = {item.price}
                        description = {item.description}
                     />
                ))
            }
        </Wrapper>
    </Container>
  )
}

export default Bestsellers

const Container = styled.div`
    height : 500px;
    margin : 20px 10px;
    color : black;
    display : flex;
    flex-direction : column;

    h2{
        color : black;
        font-size : 40px;
        font-weight : 400;
        height : 50px;
    }
    
`
const Wrapper = styled.div`
    height : 400px;
    display : grid;
    grid-template-columns : repeat(5,1fr);
    height : 400px;
    width : 100%;
    gap : 2rem;
    margin-top : 30px;
`

