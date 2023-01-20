import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import image2 from '../Images/redshirt.jpg'
import { useStateValue } from '../StateProvider';
function SellerProduct({id,image,price,secondImage,description,title}) {
    const [{product},dispatch] = useStateValue();
    const [btn, setButton] = useState(false);
    const navigate = useNavigate();

    const openProduct = () => {
        dispatch({
            type : 'storeProduct',
            productDetails : {
                id : id,
                image : image,
                secondImage : secondImage,
                price : price,
                description  : description,
                title : title
            }
        }
        )
    }

    const navigateToProduct = () => {
        navigate('product')
    }

    const handleProductClick= () => {
        openProduct();
        navigateToProduct();
    }

    


  return (
    <Container button={false}>
        <img loading='lazy' onMouseEnter={() => setButton(prev => !prev)} onMouseLeave={() => setButton(prev => !prev)} src={image} alt=''/>
        {
            btn &&  
            <button onClick={handleProductClick} onMouseEnter={() => setButton(prev => !prev)} onMouseLeave={() => setButton(prev => !prev)}>
            Quick View
            </button>
        }
       
    </Container>
  )
}

export default SellerProduct

const Container = styled.div`
    position  : relative;
    img{
        height : 98%;
        width : 100%;
        cursor : pointer;

        &:hover{
            opacity : 0.7;
        }
    }
    button{
        position : absolute;
        bottom : 20px;
        left : 30%;
        height : 50px;
        width : 120px;
        cursor : pointer;
        background : black;
        color : white;
        &:hover{
            background : red;
            border : none;
        }
    }
`

