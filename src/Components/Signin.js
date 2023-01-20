import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
function Signin() {

  const [toggleLogin, setToggleLogin] = useState(true);

  const handleLogin = () => {
    setToggleLogin(prev => !prev)
  }



  return (
    <>
    {
        toggleLogin ? (
            <Sigincontainer>
            <Formconatiner>
                <Title>
                    <h2>WELCOME!!</h2>
                </Title>
                <form >
                    <p>Login</p>
                    <input type="text" placeholder='username' />
                    <input type="Password" placeholder='Password' />
                    <button >Login</button>
                    <p>OR</p>
                    <button >Login With Google</button>
                    <CraeteAaccount>
                        <Link onClick={handleLogin}><p>Create New Account</p></Link>
                    </CraeteAaccount>
                </form>
            </Formconatiner>
        </Sigincontainer>
        ) : 

        (
            <p>okokok</p>
        )
    }
    </>
  )
}

const Sigincontainer = styled.div`
    width : 100vw;
    height : 100vh;
    display  :flex;
    align-items : center;
    justify-content : center;
    flex-direction : column;
    gap : 1rem;
`
const Formconatiner = styled.div`
    width : 20rem;
    padding :2rem;
    border : 2px solid grey;
    border-radius : 10px;
    display : flex;
    flex-direction : column;
    gap : 1rem;

    input{
        border : none;
        border-bottom : 2px solid black;
        height : 2rem;
        width : 16rem;
        outline : none;
        font-size : 1.2rem;
        margin-bottom  :2rem;
    }
    
    p{
        text-align : center;
        margin-bottom  :1rem;
    }

    button{
        height : 2.2rem;
        width : 100%;
        font-size : 1.2rem;
        margin-bottom  :1rem;
        cursor : pointer;
        background : red;
        color : white;
        border : none;
    }

    Link{
        color : black;
    }
`

const Title = styled.div`
    display : flex;
    justify-content : center;
`

const CraeteAaccount = styled.div`
    color : black;
    p{
        color : black;
    }
`

export default Signin
