import React from 'react'
import { Container, ContainerIcon, Input } from './style'
import searchIcon from '../../static/icons/search.svg'

export function Search() {
   return (
      <div className="container">
         <Container>
            <ContainerIcon>
               <img src={searchIcon} alt="Icon searh" />
            </ContainerIcon>
            <Input placeholder="Search..." />
         </Container>
      </div>
   )
}
