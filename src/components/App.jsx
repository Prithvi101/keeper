import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/


function App() {
    const [notes,setNotes] = React.useState([])

    function addNote(noteData){
        setNotes(prev =>{
            return [...prev,noteData]
        })
    }

    function onDelete(id){
        console.log("id is ->"+ id)
        setNotes(prev => {
            return prev.filter((n,index)=>{
                return id!==index
            })
        })
    }


    return (
        <div>
            <Header/>
            <CreateArea noteData={addNote} />
            {
                notes.map((note,index)=>{
                   { console.log(note)}
                   return (<Note key={index} id={index} title={note.title} content={note.content} onDelete={onDelete} /> )
                })
            }
            <Footer/>
        </div>
    );
}

export default App