import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox(){
    let [city ,setCity]= useState("")
    let handleChange = (event)=>{
        setCity(event.target.value)
    }
    let handleSubmit = (event)=>{
        event.preventDefault();//preventDefault is used to prevent default functioning of event like page reload
        setCity("")
    }
    return(
        <div className='SearchBox'>
        <h3>Search</h3>
        <form action="" onSubmit={handleSubmit}>
        <TextField id="city" label="Add City" variant="outlined" value={city} onChange={handleChange} required/> 
        <br /><br />
        <Button variant="contained" type='Submit'>Search</Button>
        </form>
        </div>
    )
}