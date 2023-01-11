import React from 'react';
import { useState,useEffect } from 'react';
import './RandomQuotes.scss';
import axios from "axios";
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
  useEffect(()=>{newQuote()},[]);

  return (
    <div className='quotes-wrapper'>
      <div className="quotes-static">"Quote of the day"</div>
       <div className='quotes'>{quotes.text}</div>
       <div className='quotes-author'>-{quotes.author}</div>
       <div  onClick={newQuote}><button className='quote-refresh-button'>Refresh</button></div>
       <div>{post.eventTitle}</div>
    </div>
  );
}

export default RandomQuotes;
