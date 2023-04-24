import * as React from 'react';
import {HeaderText} from './style'
export interface IAppProps {
    name:string,
    age:number
}

export default function Header ({name,age}: IAppProps) {
  return (
    <HeaderText name={name}>
      xin chao
    </HeaderText>
  );
}
