import { useRouter } from 'next/router';
import Link from 'next/link'
import {useBlogContext} from '../components/context'

const Page = () => {
  const router = useRouter();
  const {posts} = useBlogContext() 
  console.log('HELLO')
  return (
      <>
        <Link href='/'>
          <a>Home</a>
        </Link>
    
        <h1>{router.query.title}</h1>
        <p>{router.query.content}</p>
      </>
  );
};

Page.getInitialProps = async function(context) {
    const { id } = context.query;
    console.log(id)
    // const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    // const show = await res.json();

    const {posts} = useBlogContext() 
    console.log('HELLO')
  
    // console.log(`Fetched show: ${show.name}`);
  
    // return { show };
  };

export default Page;