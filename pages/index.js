import MyHead from '../components/MyHead'
import Home from '../components/Home'
import React, { useEffect } from 'react'
// import fetch from 'isomorphic-unfetch'


const Index = () => {
  
    return(
        <div>
{/* 
            <MyHead pageName = {`Steve's Tracker`} />
            
              
            <div className="container mx-auto text-center">
                <h1 className="text-6xl m-12">My Tracker</h1>
                <p className="text-xl">Some random paragraph</p>

            </div> */}

            <Home />
        </div>
    )
}

export default Index