import { useContext, useState } from "react";
import { Contextapi } from "./Contextapi";

function Contact() {
  const[username ,setUsername]=useState("")
  const[email,setEmail]=useState("")
 const[query,setQuery]=useState("")
 const [loginname]=useContext(Contextapi)
    function handleform (e){
      
console.log(username,email,query)
const formadata={username,email,query}
        e.preventDefault()
        fetch("/api/frt",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formadata)
        })
    }
    return ( 
        <>
     <form onSubmit={(e)=>{handleform(e)}}>
 
        <label>
          username
        </label>
        <input type="text"
     value={username} onChange={(e)=>{setUsername(e.target.value)}} className="form-control"/>
          <label>
            Email
        </label>
        <input type="Email"
        className="form-control"
        value={email} 
        onChange={(e)=>{setEmail(e.target.value )}}/>
          <label>
          QQuery
        </label>
        <input type="text"
        className="form-control"
    value={query} 
    onChange={(e)=>{setQuery(e.target.value )}}/>
<button className="form-control btn btn-danger">Submit</button>
     </form>
     </>
     );
}

export default Contact;