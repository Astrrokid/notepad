function Main({activeNote, onUpdateNote}){
    const onEditField = (key, value) =>{
        onUpdateNote={
            
            ...activeNote,
            [key]: value,
            lastModified: Date.now()
        }
    }
    if(!activeNote) return <div className="no-active-note">No Note Selected</div>
    return <div className="app-main">
        <div className="app-main-note-edit">
            <input type="text" name="" id="title" autoFocus value={activeNote.title} onChange={(e)=> onEditField("title", e.target.value )} />
            <textarea name="" id="body" cols="30" rows="10" placeholder="Write here..." value={activeNote.body}
            onChange={(e)=> onEditField("body", e.target.value )}></textarea>
        </div>
        <div className="app-main-note-preview">
            <h1 className="preview-title">
            {activeNote.title}
            </h1>
            <div className="markdown-preview">{activeNote.body}</div>
        </div>
    </div>;
}

export default Main;