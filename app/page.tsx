
import StickyNoteGrid from "@/components/note";



export default function Home() {
  
  return (
    <>
    <div>
      
      <div className="main-content">
        <h1>Plan your day ahead!</h1>
        <div className="grid-container">
          <div className="grid">
            
            <StickyNoteGrid />
         </div>
         </div>
      </div>
    </div>
    </>
  )
}
