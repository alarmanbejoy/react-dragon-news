 import React from 'react';
 import Header from './../shared/header/Header';
import RightSideNav from './../shared/rightSideNav/RightSideNav';
import { useParams } from 'react-router-dom';
import Navbar from '../shared/navbar/Navbar';

 const News = () => {
    const {id} = useParams()
    return (
        <div>
        
         <div>
         <Header></Header>
         <Navbar></Navbar>
         </div>
          
         <div className='grid md:grid-cols-4'>
            <div className='col-span-3'>
                <h2>News Details</h2>
                <p>{id}</p>

            </div>
            <div>
         <RightSideNav></RightSideNav>
         </div>
           
         </div>

       
        

        </div>
    );
 };
 
 export default News;