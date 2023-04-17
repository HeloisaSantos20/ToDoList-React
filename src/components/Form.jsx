import React from "react";
import {Paper} from "@mui/material";
import {TextField} from "@mui/material";
import {Button} from "@mui/material";
import { useState } from "react";



export default function Form({ addTodo }) {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);

  const todoCreate = (text) => {
    const todoObj = { text: text, id: id };
    setId(id + 1);
    addTodo(todoObj);
    setText('');

  }
   

  return (
    
    <Paper style={{padding:"1em"}}>
        <div style={{display:"flex", justifyContent:"center" }}>
            <TextField 
            id="outlined-basic" 
            label="Tarefa"
            variant="outlined" 
            value={text} // Define o valor do input para o estado 'text'
            onChange={(e) => setText(e.target.value)}
            fullWidth/>
            <Button variant="text" onClick = {() => todoCreate(text)} >Add</Button>
        </div>
    </Paper>
  )
}
