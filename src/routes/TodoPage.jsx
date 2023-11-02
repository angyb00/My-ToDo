import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { useParams } from "react-router";



export default function TodoPage(){
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [bodyText, setBodyText] = useState('');

    useEffect(() => {
        async function getTodoContents(){
            const snap = await getDoc(doc(db, "ToDos", id));
            if (snap) {
                setTitle(snap.data().todo_title);
                setBodyText(snap.data().todo_text);
            }
            else {
                console.log("Fetch failed");
            }
        }

        getTodoContents();
        console.log("useffect testing 1");

    }, [title, bodyText]);


    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}