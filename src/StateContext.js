import React,{useState,createContext} from 'react';
const UserContext= createContext({});
const UserContextProvider=({children})=>
{
    const[events,setEvents]=useState('');
    const[currentDate,setCurrentDate]=useState(new Date());
   return(
       <UserContext.Provider value={{events,setEvents,currentDate,setCurrentDate}}>
        {children}
       </UserContext.Provider>
   );
    
};
export {UserContext,UserContextProvider};