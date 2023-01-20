import React, { useEffect } from 'react';
import styled from 'styled-components';
import subhero from '../Images/children_section.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
function Children() {
  
  useEffect(() =>{
    AOS.init({duration : 1000})
  }
  ,[])
  
  /* if(Math.random() > 0.5) {
    return new Error("Test Error Boundary");
  } */
  
  return (
    <Container data-aos='fade-left'>
       <h1>Kids Wear</h1>
       <Link to='/kids'>
          <p>Shop- now</p>
       </Link>
    </Container>
  )
}

export default Children

const Container = styled.div`
  margin : 20px 10px;
  height : 800px;
  width : 100vw;
  cursor : pointer;
  position : relative;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
  
    & ::before{
      content : '';
      height : 100%;
      width : 100%;
      top : 0;
      left : 0;
      position : absolute;
      background-image : url(${subhero});
      background-size : cover;
      background-position : center;
      background-repeat :no-repeat;
      z-index : -1;
    }
    
    h1{
      font-size : 60px;
      font-weight : 300;
    }

    p{
      color: white;
      font-size : 20px;
      text-decoration : underline;
    }
 
`


