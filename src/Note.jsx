import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


const Note = (props) =>{
   
    const Delete = (id) =>{
        props.delete(props.id)
    }
    
    return (
        <>
        <div className="item_main_div">
            <h1 className="head">{props.title}</h1>

            <p className="content_para">{props.content}</p>
            
            <button className="delete_btn" onClick={Delete} ><DeleteOutlineIcon className="delete_btn" /></button>
        </div>
        </>
    )
}

export default Note;