import React from "react";
import AddTaskIcon from '@mui/icons-material/AddTask';
import Fab from '@mui/material/Fab';

import Zoom from '@mui/material/Zoom';
import { display } from "@mui/system";

function CreateArea(props) {
    const [expand,setExpand] = React.useState(false)
    const[note,setNote] =React.useState({
        title:"",
        content:""
    }) 
    function handleChange(event){
        const {name,value} = event.target
        setNote(prev =>{
            return ({
                ...prev,
                [name] :value
            })
        })
    }
    function submitNote(event){
        props.noteData(note);
        setNote(prev =>{
            return {
                title:"",
                content:""
            }
        })
        event.preventDefault();
    }
    function expandF(){
        setExpand(true)
    }

  return (
    <div>
      <form  className="create-note">
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title" style={{display:expand?"":"none"}}/>
        <textarea name="content" onChange={handleChange} onClick={expandF} value={note.content} placeholder="Take a note..." rows={expand?"3":"1"} />
        <Zoom in={expand?true:false}>
        <Fab  style={{display:expand?"":"none"}}   onClick={submitNote} ><AddTaskIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
