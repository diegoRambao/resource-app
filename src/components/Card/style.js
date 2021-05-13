import styled from 'styled-components'

export const Container = styled.article`
   background: #fff;
   box-shadow: 4px 8px 15px rgba(0, 0, 0, 0.08);
   border-radius: 10px;
`

export const Image = styled.img`
   object-fit: cover;
   border-top-right-radius: 10px;
   border-top-left-radius: 10px;
   width: 100%;
   height: 200px;
`

export const CardBody = styled.div`
   padding: 16px;
`

export const Title = styled.h2`
   color: #3a3a3a;
   padding: 0;
   margin: 0;
   font-size: 18px;
`

export const Type = styled.span`
   font-size: 14px;
   color: #8e8e8e;
   margin-top: 6px;
`

export const Description = styled.p`
   color: #3a3a3a;
   font-size: 14px;
`
