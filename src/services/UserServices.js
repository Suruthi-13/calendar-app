import React from 'react';

export async function UserServices() {
    Axios.get('http://localhost:5169/v1/meetings/bulk?offset=0&fetchCount=500')
    .then(function (response) {
       return response;
    }) 
  
}
