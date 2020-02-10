
import Link from 'next/link';

const Result = ({post, id}) => {




    return(
        
        <div className='row'>
            <div className = 'col-12'>
                <h2 className="">
                <Link href="/p/[id]" as={`/p/${post.title}`}>
                    <a>{post.title}</a>
                </Link>
                </h2>
            </div>
            <div className = 'col-12'>
                <h5>{post.author}</h5>
                <h5>{post.date}</h5>
            </div>
            <div className="col-12">
                <p>{post.content}</p>
            </div>
            
      </div>
    )

}

export default Result