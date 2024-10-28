'use client';
import { useFirestore } from "@/components/fetch-data";
import { useEffect, useState } from "react";

const StickyNote = ({ content}) => {
    return (
      <div className="sticky-note">
        <div className="sticky-note-upper">
          <p>Archived Sticky Note</p>
        </div>
        <div className="sticky-note-lower">
          <p>Tasks: {content}</p>
         
        </div>
      </div>
    );
  };

export default function Archived() {

    const { data: notes, loading, error } = useFirestore("archived");
    const [localNotes, setLocalNotes] = useState([]);

    useEffect(() => {
        setLocalNotes(notes);
      }, [notes]);

   return (
    
    <div>
      
      <div className="main-content">
        <h1>Archived Notes:</h1>
        <div className="grid-container">
          <div className="grid">
            
          {localNotes.map((note, index) => (
                <div  key={note.id}>
                <StickyNote
                  content={note.content}
                />
         </div>
          ))}
         </div>
      </div>
    </div>
    </div>
   )
}



        // return (
        //     <div className="grid">
              
        //       {localNotes.map((note, index) => (
        //         <div  key={note.id}>
        //         <StickyNote
        //           content={note.content}
        //         />
        //       </div>
        //       ))}
        //        </div>   
                 
            
        //   );
        
        // }
