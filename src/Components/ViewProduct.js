import React, { useEffect, useState } from 'react'
import { useStateValue } from '../StateProvider'
import styled from 'styled-components';
import Header from './Header';
import {claculatePrice} from '../reducer'
import myImage from '../Images/hover.jpg'

function ViewProduct() {
    const [{product,cart},dispatch] = useStateValue();
    const [addedToCartMessage, SetAddedToCartMessage] = useState(false);

    const addToCart = () => {
        dispatch({
            type : 'ADD_TO_Cart',
            newCartItem : {
                id: product.id,
                image : product.image,
                secondImage : product.secondImage,
                title : product.title,
                price : product.price,
                secondImage : product.secondImage
            }
        })
        
    }
    const removeFromCart = () => {
        dispatch(
            {
                type : 'REMOVE_FROM_CART',
                removedItem : product.id
            }
        )
    }


  return (
    <Container>
        <TopInfo>
            <Header />
        </TopInfo>
        <ProductInfo>

            {
                product != null ? 
                (
                    <>  
                        <img src={product.image} />
                       
                        <h3>{product.title}</h3>
                        <p>price : <span>{product.price}</span>$</p>
                        <h5>{claculatePrice(product)}$</h5>
                        <small>{product.description}</small>
                        {
                            cart.some(p => p.id == product.id) ?
                            (<button onClick={removeFromCart}>Remove From Cart</button>) :
                            (<button onClick={addToCart}>Add To Cart</button>)

                        }
                        <button>Buy Now</button>
                        {
                            addedToCartMessage ? (<p>Added to cart</p>) : (<p></p>)
                        }

                    </>
                ) 
                :(<h2>Please select a product from home page</h2>)
            }
           
        </ProductInfo>
    </Container>
  )
}

export default ViewProduct

const Container = styled.div`
    color : black;
    
`
const TopInfo = styled.div`
    color : black;
    background : red;
    margin-bottom : 50px;
`

const ProductInfo = styled.div`
    margin : 40px;
    display : flex;
    flex-direction  :column;
    width : 14rem;
    gap : 0.5rem;
    img{
        width : 14rem;
        height  : 17rem;
        &:hover{
            transform : scale(1.05)
        }
    }

    h3{
        color : black;
    }

    h5{
        color : black;
    }

    p{
        color : black;
        span{
            color : black;
            text-decoration : line-through;
        }
    }
    small{
        color : black
    }
    button{
        color : black;
        height : 3rem;
        cursor : pointer;
        font-size : 15px;
        &:hover{
            color : white;
            background : red;
            border : none;
        }
    }
`