function NoteCart({note}){
    return(
            <div className='rounded-xl grid grid-cols-4 h-56 bg-slate-50'>
                <div className='w-fit col-span-3  grid grid-rows-4 relative'>
                  <h1 className='row-span-1'>{note.title}</h1>
                  <p className='row-span-2 break-all'>{note.desc}</p>
                  <div className='row-span-1'>{note.createAt}</div>
                </div>
                <div className='col-span-1'>
                  Actions🛠️
                </div>
            </div>
    )
}
export default NoteCart