import React,{username,useref} from 'react'
function Addform(){
    const{name,setname}=useState("");
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert('The entered name is ${name}');
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter your name: </label>
                <input type='text' value={name} onChange={(e) => setname(e.target.value)}/>
                
            </form>
        </div>
    )
}