import React from 'react';
import { useState,useEffect } from 'react';
import './RandomQuotes.scss';
import { GetRandomQuotes } from '../../../services/UserServices';
function RandomQuotes() {
  const[quotes,setQuotes]=useState("");
  const newQuote=async ()=>{
     var result= await GetRandomQuotes();
       let randomNum= Math.floor(Math.random()*result.length);
       setQuotes(result[randomNum]); 
   };
  useEffect(()=>{newQuote()},[]);
  return (
    <div className='quotes-wrapper'>
      <div className="quotes-static">"Quote of the day"</div>
       <div className='quotes'>{quotes.text}</div>
       <div className='quotes-author'>{quotes.author}</div>
       <div  onClick={newQuote}><button className='quote-refresh-button'>Refresh</button></div>
    </div>
  );
}

export default RandomQuotes;
