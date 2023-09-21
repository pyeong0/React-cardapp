import React from 'react'
import { NavLink } from 'react-router-dom'
import { Items, Item, Image, ColorBox } from './styeldComp'
import { useSelector } from 'react-redux';

const Cards = () => {
  const contents = useSelector((state) => state.contents)
  return (
  <Items>
    {contents.map((content, idx) => {               
      return <Item key={idx}>                      
      <NavLink to={content.path}>                  
      <Image imagePath={content.imagePath} />      
      </NavLink>
      <h2 style={{textAlign:'center', color:'red'}}>{content.title}</h2>
      <p style={{padding: 10, textAlign: 'center'}}>{content.character}</p>
    </Item>
    })}
  </Items>
  )
}

export default Cards;