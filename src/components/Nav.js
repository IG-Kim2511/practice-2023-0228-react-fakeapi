import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
/* 
.nav{
    display: flex;
    margin: auto;
    
    justify-content:center;
    align-items:center;

    position: sticky;
    top: 0;
    background-color:#f8f9fa;
}
.nav .item{
    padding: 1rem;
}

.nav .myBtn{
    margin:1rem;
    
}
*/

const Navbar = styled.div`
    margin: auto;
    
    display: flex;
    justify-content:center;
    align-items:center;

    position: sticky;
    top: 0;
    background-color:#f8f9fa;
`

const Item = styled.button`
 padding: 1rem;

`


const Nav = () => {
  return (
    <Navbar>
      <h4 className='title'>Nav</h4>

            
      <Item><Link to="/" className='item myBtn' >Home</Link></Item>
      <Item><Link to="/products" className='item myBtn'>products</Link></Item>
      <Item><Link to="/cart" className='item myBtn'>Cart(redux number)</Link></Item>              
    </Navbar>
  )
}

export default Nav



