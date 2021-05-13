import React from 'react'
import { Container, Image, CardBody, Title, Type, Description } from './style'

export function Card() {
   return (
      <Container>
         <Image src="https://desircle.co/wp-content/uploads/2021/04/notion-300x300.jpg" />
         <CardBody>
            <Title>Notion</Title>
            <Type>Bookmarks</Type>
            <Description>
               Notion is an all-in-one project and task management tool perfect for any creative business. With
            </Description>
         </CardBody>
      </Container>
   )
}
