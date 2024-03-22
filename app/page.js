import axios from "axios";
import Link from "next/link";


export default async function Home() {
  const res=await axios.get("https://jsonplaceholder.typicode.com/posts")
const response=res.data;
  return (
     <main>
      <div className='container mx-auto p-3' >
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 cursor-pointer'>
      {
        response.map((post)=>{
          const {userId,id,title,body}=post;
          return (
           <li key={id} className='bg-gradient-to-r from-gray-50 to-gray p-8 rounded-md'>
            <Link href={`${id}`}>
              <div className='title text-red-800 font-bold capitalize mb-4 text-xl font-serif' >{title}</div>
              <div className='body text-gray-600 capitalize text-justify'style={{  textIndent: '1em' }} >{body.slice(0, 100)}</div>
              <div className='author text-blue-200 text-sm font-sans mb-1 text-right'>author: {userId}</div>
            </Link>
            </li>
          )
        })
      }
      </ul>
      </div>
     </main>
  );
}
