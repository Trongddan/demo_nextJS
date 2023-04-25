import React from 'react'

interface DataSer {
  data: [];
}
interface item {
  albumId:number,
  id:number,
  title:string,
  url:string
}
const About = ({data}:DataSer) => {
  return (
    <>
    <div>about</div>
    <div>{data.length}</div>
    </>
  )
}
export default About
export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();
  return { props: { data } };
}