import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button } from "react-bootstrap";
import '../App.css'


export default function TodoPage(){
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [bodyText, setBodyText] = useState('');

    useEffect(() => {
        async function getTodoContents() {
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
            <section className="root-header">
                <h1>{title}</h1>
                <button className='unset-helper'>
                    <div className="header-button-helper">Edit</div>
                </button>
            </section>
            <div style={{color: 'white', marginTop: '50px', marginLeft: '20px'}}>{bodyText}</div>
        </div>
    )
}