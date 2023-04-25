import * as React from 'react';
import {ListItem,ItemData} from "./styles"
export interface item {
    albumId:number,
    id:number,
    title:string,
    url:string
}

export default function Item ({albumId,id,title,url}: item) {
  return (

    <ItemData>{title}</ItemData>

  );
}
