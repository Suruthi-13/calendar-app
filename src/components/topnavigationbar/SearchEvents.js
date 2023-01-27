// import {React,useState,useEffect} from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faSearch} from "@fortawesome/free-solid-svg-icons";
// import { SearchEvent } from '../../services/UserServices';

// function SearchEvents() {
//     var result;
//     const[search,setSearch]=useState('');
//     const[events,setEvents]=useState('');
//     useEffect(()=>
//     {
//         const searchEvent=async()=>
//         {
//             // result=await SearchEvent(search);

//             result=JSON.stringify(result);
//             console.log(result);
//             setEvents(result);
//         }
//         searchEvent();
       
//     },[search])
//     // result=await SearchEvent(search);
//     // result=JSON.stringify(result);
//     // setEvents(result);
//     const submitToggle=async (e)=>
//     {
//         e.preventDefault();
//        result=await SearchEvent(search);
//        result=JSON.stringify(result);
//        setEvents(result);
//        setSearch('');
//     }
//   return (
//     <div className='search-box'>
//     <div className='search-box'>
//     <div ><FontAwesomeIcon icon={faSearch}/></div>
//     <form onSubmit={(e)=>submitToggle(e)}>
//       <input type="text" input={search} placeholder='Eg.Catch Up' onChange={(e)=>setSearch(e.target.value)} onSubmit={(e)=>submitToggle(e)}/>
//     </form>
//     </div>
//     <div className='suggestions-box'>
//         {/* {console.log(result.length>0)} */}
//     {result&& result.map((event)=>{
//        <div>{event.eventTitle}</div>
//     })}
//     </div>
//     </div>
//   );
// }

// export default SearchEvents;
