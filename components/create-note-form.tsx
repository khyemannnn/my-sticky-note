'use client';
import { useState } from "react";
import { db } from '@/app/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useRouter } from "next/navigation";

async function addDataToFireStore(noteContent) {
    try {
        const docRef = await addDoc(collection(db, "messages"), {
            note: noteContent,
        }); 
        console.log("Document written with ID: ", docRef.id);
        return true;
    } catch (error) {
        console.error("Error adding document! ", error)
        return false;
    }
}

export default function CreateNote() {
    const [noteContent, setNoteContent] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const added = await addDataToFireStore(noteContent);
        if (added) {
            setNoteContent('');
            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 2000);
            console.log('Form submitted with data:', noteContent);
            router.push('/');
        }
    }

    const handleReset = () => {
        setNoteContent('');
        setIsSubmitted(false);
    }

    return (
        <div className="form-parent">
            <form className="new-note-form" onSubmit={handleSubmit} onReset={handleReset}>
                <p>
                    <label htmlFor="note">Input tasks here: </label> 
                    <textarea 
                        id="note" 
                        name="note" 
                        required 
                        value={noteContent} 
                        onChange={(e) => setNoteContent(e.target.value)} 
                    ></textarea>
                </p>
                <div className="button">
                    <button className="save-button" type="submit">
                        {isSubmitted ? 'Saved!' : 'Save'}
                    </button>
                    <button className="reset-button" type="reset">Reset</button>
                </div>
            </form>
        </div>
    )
}