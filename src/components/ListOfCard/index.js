import React from 'react'
import { List } from './style'
import { Card } from '../Card'

export function ListOfCard() {
   return (
      <div className="container">
         <List>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
         </List>
      </div>
   )
}
