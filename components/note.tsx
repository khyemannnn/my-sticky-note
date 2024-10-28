'use client';


import Link from "next/link";
import CreateNoteUI from "./create-note-ui";
import { useFirestore } from "./fetch-data";
import { addDataToArchived } from "./archive-note";
import { useEffect, useState } from "react";




const StickyNote = ({ title, content, children}) => {
    return (
      <div className="sticky-note">
        <div className="sticky-note-upper">
          <p>{title}</p>
        </div>
        <div className="sticky-note-lower">
          <p>Tasks: {content}</p>
          {children}
        </div>
      </div>
    );
  };
  
  export default function StickyNoteGrid() {

    const [ isArchiving, setIsArchiving ] = useState(false);
    const { data: notes, loading, error } = useFirestore("messages");
    const [localNotes, setLocalNotes] = useState([]);

    useEffect(() => {
      setLocalNotes(notes);
    }, [notes]);

   const handleArchived = async (id, index, content) => {
    setIsArchiving(true);
    try {
    await addDataToArchived(id, index, content);
    setLocalNotes(prevNotes => prevNotes.filter(note => note.id !== id));

   

   } catch (error) {
    console.error("Error archiving note:", error);
   } finally {
    setIsArchiving(false);
   };
  }

    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  
    return (
      <div className="grid">
        <div className="new-note">
          <Link href="/new-note">
            <CreateNoteUI />
          </Link>
        </div>
        {localNotes.map((note, index) => (
          <div  key={note.id}>
          <StickyNote
           
            title={`Sticky Note ${index + 1}`}
            content={note.note}
          >

        <button onClick={() => handleArchived(note.id, index, note.note)} 
        disabled={isArchiving}>{isArchiving ? 'Archiving...' : 'Archive'}</button>
        </StickyNote>
        </div>
       
            
           
        ))}
      </div>
    );
  }