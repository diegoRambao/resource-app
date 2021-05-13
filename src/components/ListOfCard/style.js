import styled from 'styled-components'

export const List = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
   place-items: stretch;
   -webkit-box-align: stretch;
   grid-column-gap: 30px;
   grid-row-gap: 40px;
   margin-top: 100px;
`
