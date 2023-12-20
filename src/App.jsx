
import { useState } from 'react'
import Header from './components/Header'
import NoteCart from './components/NoteCart'
import NoteInput from './components/NoteInput'

function App() {

  const [notes,setNotes]=useState([]);

  const handleNote=(newNote)=>{
      setNotes(pre=>[...pre,newNote])
  }

  return (
   <div className="w-screen h-screen flex justify-center relative">
    <div className="w-full md:w-4/5 lg:w-3/4">
      <Header/>
      <div className='flex flex-col md:flex-row '>
        <NoteInput onAddNote={handleNote}/>
        <div className='md:w-3/4'>
            <div className='grid grid-rows-[auto] gap-5 mt-2'>
              {
                notes.map(note=><NoteCart key={note.id} note={note}/>)
              }      
            </div>
        </div>
      </div>
      </div>
   </div>
  )
}

export default App
