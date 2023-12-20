import { useState } from "react"

function NoteInput({onAddNote}) {

    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("")

    const handleSubmit=(e)=>{
        if(!title || !desc) return null;
        e.preventDefault()        
        const note={
          title,
          desc,
          createAt:new Date().toISOString(),
          id:Date.now(),
          completed:false
        }
        onAddNote(note)
        setTitle("");
        setDesc("");
        console.log(note)
    }
  return (
        <form
         className='mx-1 w-full md:w-1/4 lg:w-1/2 h-64 flex flex-col justify-between'
         onSubmit={handleSubmit}
         >
          <input 
          value={title}
          type="text"
          className='h-20 rounded-xl border-b-2'
          placeholder='Title...'
          onChange={(e)=>setTitle(e.target.value)}
          />
          <input 
          value={desc} 
          type="text" 
          className='h-20 rounded-xl border-b-2' 
          placeholder='description...'
          onChange={(e)=>setDesc(e.target.value)}
          />
          <button 
          className='h-20 bg-blue-500 font-sans text-2xl text-white'
          >
            Add New Note
          </button>
        </form>
  )
}

export default NoteInput