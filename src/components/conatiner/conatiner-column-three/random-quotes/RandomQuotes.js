import React from 'react';
import { useState,useEffect } from 'react';
import './RandomQuotes.scss';
import axios from "axios";
// const api=axios.create({baseURL:`http://localhost:5169/v1/meetings?offset=0&fetchCount=10`})

function RandomQuotes() {
  const[quotes,setQuotes]=useState("");
  const[post,setPost]=useState('');
  const newQuote=()=>{
    fetch("https://type.fit/api/quotes")
    .then((res)=>res.json())
    .then((data)=>
    {
       let randomNum= Math.floor(Math.random()*data.length);
       setQuotes(data[randomNum]); 

    });
  };
  // const newQuotes=()=>
  // {
  //    fetch("http://localhost:5169/v1/meetings?offset=0&fetchCount=10")
  //     .then((res)=>res.json())
  //     .then((data)=>console.log(data))
  //     // .then((data)=>
  //     // {
  //     //   console.log(data);
  //     //    setPost(data); 
  
  //     // });
  // }
  useEffect(()=>{newQuote()},[]);
  // useEffect(() => {newQuotes()}, []);

  return (
    <div className='quotes-wrapper'>
      <div className="quotes-static">"Quote of the day"</div>
       <div className='quotes'>{quotes.text}</div>
       <div className='quotes-author'>-{quotes.author}</div>
       <div  onClick={newQuote}><button className='quote-refresh-button'>New quote</button></div>
       {/* <div></div> */}
       <div>{post.eventTitle}</div>
    </div>
  );
}

export default RandomQuotes;
