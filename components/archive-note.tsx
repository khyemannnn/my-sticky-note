import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '@/app/firebaseConfig'; 

export async function addDataToArchived(id, index, noteContent) {
    try {

        //Adding to archived collection

        await addDoc(collection(db, "archived"),{
            originalId: id,
            index: index,
            content: noteContent
        });

        //delete from previous "messages" collection
        await deleteDoc(doc(db, "messages", id));

        console.log("Note archived successfully");

    } catch (error) {
        console.error("Error archiving note: ", error)

    }
}

