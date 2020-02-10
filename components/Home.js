import React, { useState, useEffect } from 'react'
import MyHead from './MyHead'
import Result from './Result'


import NewPost from './NewPost'
import fetch from 'isomorphic-unfetch'



const Home = () => {

    const [posts, setPosts] = useState([])
    

    useEffect(() => {
        fetch('/api/blog').then(data => data.json()).then(data => setPosts(data))
    }, [])

    

    return(
        
            <div className ='container'>
                <MyHead pageName={'Home'} />
                
                <NewPost updateList = {setPosts} posts = {posts}/>
                
                <div className="">
                    {posts.map((post, index) => {
                        return(
                        <Result post = {post} key = {index} id = {index}/>
                        )
                    })}
                </div>
            
                
                
            
            
            
            </div>
    
    )
}

// Home.getInitialProps = async function() {
//     const res = await fetch('http://localhost:3000/api/blog');
//     const data = await res.json();
  
//     console.log(`Show data fetched. Count: ${data.length}`);
//     console.log(data)
  
//     return {
//       posts: data
//     };
//   };
export default Home