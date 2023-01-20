import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import img1 from '../Images/suits2.jpg'
import img2 from '../Images/winter-wear.jpg'
function Hero() {
  return (
    <Container>
        <Link to='/weddingsuits'>
            <Heroleft>
                <img  src={img1} alt=''/>
                <h2>Wedding Suits</h2>
            </Heroleft>
        </Link>
        <Link to='/winterwear'>
            <Heroright>
                <img src={img2} />
                <h2>Winter-Jackets</h2>
            </Heroright>
        </Link>
    </Container>
  )
}

export default Hero



const Container = styled.div`
    margin : 20px 10px;
    display : grid;
    grid-template-columns : repeat(2, 1fr);
    gap : 1rem;
`

const Heroleft = styled.div`
    position : relative;
    cursor : pointer;
    &:hover{
        opacity : 0.6;
        color : white;
    }
    img{
        width : 100%;
        position : relative;     
    }
    
    h2{
        color : black;
        position : absolute;
        top : 50%;
        left : 20%;
        font-size : 40px;
        font-weight : 200;
    }
    `
    
    const Heroright = styled.div`
    position : relative;
    cursor : pointer;
    img{
        &:hover{
            opacity : 0.6;
            
        }
        width : 100%;
    }
    h2{
        color : black;
        position : absolute;
        top : 50%;
        left : 20%;
        font-size : 40px;
        font-weight : 200;
    }
`