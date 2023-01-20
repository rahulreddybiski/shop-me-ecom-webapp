import React from 'react'
import styled from 'styled-components'
import items from '../Helpers/bestseller'
import SellerProduct from './SellerProduct'
function KidsWear() {
  return (
    <Container>
        <Wrapper>
            {
                    items.map(item => (
                        <SellerProduct
                            key={item.id}
                            id={item.id}
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

export default KidsWear

const Container = styled.div`
    height : 100vh;
    display : flex;
    flex-direction : column;
    gap : 1rem;
    margin : 10px;
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

const Info = styled.div`
    
`
