'use client';


import Link from "next/link";
import CreateNoteUI from "./create-note-ui";
import { useFirestore } from "./fetch-data";



const StickyNote = ({ title, content }) => {
    return (
      <div className="sticky-note">
        <div className="sticky-note-upper">
          <p>{title}</p>
        </div>
        <div className="sticky-note-lower">
          <p>Tasks: {content}</p>
        </div>
      </div>
    );
  };
  
  export default function StickyNoteGrid() {
    const { data: notes, loading, error } = useFirestore("messages");
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  
    return (
      <div className="grid">
        <div className="new-note">
          <Link href="/new-note">
            <CreateNoteUI />
          </Link>
        </div>
        {notes.map((note, index) => (
          <StickyNote 
            key={note.id} 
            title={`Sticky Note ${index + 1}`}
            content={note.note}
          />
        ))}
      </div>
    );
  }