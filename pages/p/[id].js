import { useRouter } from 'next/router';
import Link from 'next/link'


const Page = (props) => {
  const router = useRouter();

  return (
      <>
      <Link href='/'>
          <a>Home</a>
      </Link>
    
    <div className = 'row'>
      <div className = 'col-12'>
        <h1>{router.query.id}</h1>
      </div>
      <div className = 'col-12'>
        <h5>{props.myObject.author}</h5>
        <h5>{props.myObject.date}</h5>
      </div>
      <div className = 'col-12'>
        <p>{props.myObject.content}</p>
      </div>
    </div>
      
      
      
      </>
  );
};

Page.getInitialProps = async function(context) {
    const { id } = context.query;
    console.log(id)
    const res = await fetch(`/api/blog`);
    const post = await res.json();
    const myArr = post.filter(obj => {
      return obj.title === id
    })
    const myObject = myArr[0]
    
    
  
    // console.log(`Fetched show: ${show.name}`);
  
    return { myObject };
  };

export default Page;

