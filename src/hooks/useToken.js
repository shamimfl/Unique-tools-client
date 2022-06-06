import { useEffect, useState } from "react"

const useToken = user=>{
    const [token , setToken] =useState('')
    useEffect(()=>{
     const email =user?.user?.email;
     const name =user?.user?.displayName;
     const currentUser ={email: email ,role: 'user' ,name: name}
     if(email){
         fetch(`https://frozen-sands-98061.herokuapp.com/user/${email}`,{
             method : 'PUT',
             headers :{
                 'content-type' : 'application/json'
             },
             body: JSON.stringify(currentUser)
         })
         .then(res=> res.json())
         .then(data=> { console.log(data)
            })
     }
    console.log(currentUser)
    },[user])
    return token
}
export default useToken;