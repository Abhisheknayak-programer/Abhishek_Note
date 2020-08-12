import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';


const  MainNote = (props) =>{


   const [Input,setInput] = useState({
    title:"",
    content:"",
   });
   


   const EventChanged = (event) =>{
       const {name,value} = event.target;

       setInput( (oldItems) =>{
           return {...oldItems,
            [name]:value,
           }
       })
    }




        const Added = () =>{
            props.Passnote(Input);
            setInput({
                title:"",
                content:"",
            })
        }



    return(
        <>
         <div className="form_box">
            <form className="form">
          
                <input type="text" placeholder="Title" value={Input.title} name="title" onChange={EventChanged} />

                <br/>

                <textarea type="text" cols="" placeholder="Enter Your Content" value={Input.content} name="content" onChange={EventChanged} ></textarea>

            </form>
          
            <button className="add_btn" onClick={Added}><AddIcon/></button>
        
        </div>
        </>
    )
}




export default MainNote;