import { HTMLAttributes } from 'react';
import styled from "@emotion/styled";
interface HeaderTextProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
}
export const HeaderText = styled.div<HeaderTextProps>`
  color: blue;
  width:300px;
  margin-top:200px;
  height:200px;
  background:yellow;
  display:flex;
  justify-content: center;
  align-items:center;
  position: relative;
  ${({ name }) =>
  name &&
    `&:before{
    color:red;
    content:"${name}";
    position:absolute;
    top:10px;
    right:10px
  }
  `}
`;
