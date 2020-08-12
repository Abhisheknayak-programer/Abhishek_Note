import React, { useState } from "react";
import "./index.css"
import Menu from "./Menu";
import Footer from "./Footer";
import MainNote from "./MainNote";
import Note from "./Note";



const App = () =>{

    const [NoteList,setNoteList] = useState([]);

    const Func1 = (Input) =>{
        setNoteList( (prevdata)=>{
            return [...prevdata,Input];
        })
    }

    const Delete_function = (id) =>{
        setNoteList( (olddata) =>[
            olddata.filter( (currentdata,indx)=>{
                return indx !== id;
            })
        ])
    }

    return (
        <>
        <Menu/>

        <MainNote Passnote={Func1}/>

        {NoteList.map((val,index)=>{
            return <Note title={val.title} name={val.name} content={val.content} delete={Delete_function} id={index} key={index} />
        })}

        <Footer/>
        </>
    )
}


export default App;