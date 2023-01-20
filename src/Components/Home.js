import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bgImage from '../Images/bg-image.jpg'
// import Bestsellers from './Bestsellers'
import Hero from './Hero'
import { ErrorBoundary } from 'react-error-boundary';
import SellerProduct from './SellerProduct'
// import Subhero from './Subhero'
import {FiShoppingCart} from 'react-icons/fi'
import Header from './Header'
import Footer from './Footer'
import ErrorFallback from './Errorboundries'
const Subhero = React.lazy(() => import('./Subhero'))
const Bestsellers = React.lazy(() => import('./Bestsellers'))
function Home() {
  return (
    <>
        <Container>
            <Headercontainer>
                <Header />
            </Headercontainer>
            <BottomMenu>
                <h3>shop the newwest trends</h3>
                <p>Shop now</p>
            </BottomMenu>
        </Container>
        <Hero />
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
            <Suspense fallback={<div>loading...</div>}>
                <Subhero />
            </Suspense>
        </ErrorBoundary>
        <Suspense fallback={<div>Loading....</div>} onReset={() => {}}>
            <Bestsellers />
        </Suspense>
        <Footer />
    </>
  )
}

export default Home

const Container = styled.div`
    height : 98vh;
    width : 100vw;
    position : relative;
    display : flex;
    flex-direction : column;
    justify-content: space-between;
    opacity : 0.7;
    color : white;

    & ::before{
        content : '';
        position : absolute;
        width: 100vw;
        height : 98vh;
        top:0px;
        left:0px;
        background-image : url(${bgImage});
        background-size : cover;
        background-position : center;
        background-repeat :no-repeat;
        box-shadow: inset 195px 107px 122px #000000,  inset -120px -100px 250px #000000;
        z-index:-1;
        cursor : auto;
    }
`

const Headercontainer = styled.div`
   
`

const BottomMenu = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    gap: 0.3rem;
    text-align : center;
    padding : 20px 0;
    text-transform : uppercase;

    h3{
        font-weight : 300;
    }

    p{
        border-bottom : 2px solid white;
        cursor : pointer;
    }

`

