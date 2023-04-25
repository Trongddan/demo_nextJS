import * as React from "react";
import { HeaderText } from "./style";

export interface baseProp {
 
}
export interface IAppProps {
  name: string;
  age: number;
  className:string
}

export default function Header({className,name, age }: IAppProps) {
  return <HeaderText className={className} name={name}>xin chao</HeaderText>;
}
