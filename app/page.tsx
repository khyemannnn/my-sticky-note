
import StickyNoteGrid from "@/components/note";



export default function Home() {
  
  console.log("Firebase Config Loaded:", {
    apiKey: process.env.REACT_APP_API_KEY ? "Loaded" : "Not Loaded",
    authDomain: process.env.REACT_APP_AUTH_DOMAIN ? "Loaded" : "Not Loaded",
    projectId: process.env.REACT_APP_PROJECT_ID ? "Loaded" : "Not Loaded",
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET ? "Loaded" : "Not Loaded",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID ? "Loaded" : "Not Loaded",
    appId: process.env.REACT_APP_APP_ID ? "Loaded" : "Not Loaded",
  });

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
