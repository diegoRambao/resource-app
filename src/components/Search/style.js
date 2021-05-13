import styled from 'styled-components'

export const Container = styled.div`
   margin: 0 auto;
   max-width: 502px;
   width: 100%;
   -webkit-transform: perspective;
   -ms-transform: translateY(-50%);
   transform: translateY(0%);
   margin-top: 70px;
`
export const ContainerIcon = styled.div`
   position: absolute;
   top: 0;
   bottom: 0;
   left: 16px;
   display: -webkit-box;
   display: -webkit-flex;
   display: -ms-flexbox;
   display: flex;
   -webkit-align-items: center;
   -webkit-box-align: center;
   -ms-flex-align: center;
   align-items: center;
`

export const Input = styled.input`
   width: 100%;
   margin: 0;
   padding: 18px;
   padding-left: 52px;
   font-size: inherit;
   line-height: 1;
   font-family: inherit;
   color: inherit;
   background-color: var(--theme-ui-colors-background, #fff);
   box-shadow: 7px 9px 17px -5px rgba(0, 0, 0, 0.1);
   border: 1px solid #efefef;
   -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;
   outline: 0;
   border-radius: 6px;
`
