import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Item from "@/components/item";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

interface DataSer {
  data: [];
}
interface item {
  albumId:number,
  id:number,
  title:string,
  url:string
}
export default function Home({ data }: DataSer) {
  return (
    <div className="bg-white ">
      This is the data
      {data.map((item:item) => (
        <Item key={item.id} albumId={item.albumId} id={item.id} title={item.title} url={item.url}/>
      ))}
      <Link href="/about">
      Truy cập trang about
      </Link>
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();
  return { props: { data } };
}
