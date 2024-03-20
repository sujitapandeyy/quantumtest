import axios from "axios";
const res=await axios.get("https://jsonplaceholder.typicode.com/posts")
const response=res.data;

export default function Home() {
  return (
     <main>
      {
        response.map((post)=>{
          const {userId,id,title,body}=post;
          return (
           <p key={id}>{id}{title}</p>
          )
        })
      }
     </main>
  );
}
