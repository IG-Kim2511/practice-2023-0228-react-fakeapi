import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = styled.div`
    margin: auto;
    
    display: flex;
    justify-content:center;
    align-items:center;

    position: sticky;
    top: 0;
    background-color:#f8f9fa;
`

const Item = styled.span`
 padding: 1rem;
 margin: 1rem;

`


const Nav = () => {
  return (
    <Navbar>
      <h4 className='title'>Nav</h4>

            
      <Item><Link to="/" className='myBtn' >Home</Link></Item>
      <Item><Link to="/products" className='myBtn'>products</Link></Item>
      <Item><Link to="/cart" className='myBtn'>Cart(redux number)</Link></Item>    
 
    </Navbar>
  )
}

export default Nav



