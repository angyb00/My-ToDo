import { getDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../App.css'


export default function TodoPage(){
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [bodyText, setBodyText] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [todoTitle, setTodoTitle] = useState('');
    const [todoText, setTodoText] = useState('');
    const handleModalShow = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);

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

    const handleEditSave = () => {
        async function EditTodo(){
            await setDoc(doc(db, "ToDos", id), {
                todo_text: todoText,
                todo_title: todoTitle
            }, { merge: true });
            setTitle(todoText);
            setTodoText(todoText);
        }

        EditTodo();
        handleModalClose();
    }


    return (
        <div>
            <section className="root-header">
                <h1>{title}</h1>
                <div className="header-buttons-container">
                    <button className='unset-helper' onClick={handleModalShow}>
                        <div className="header-button-helper">Edit</div>
                    </button>
                    <button className="unset-helper">
                        <div className="header-button-helper">Home</div>
                    </button>
                </div>
            </section>
            <div style={{color: 'white', marginTop: '50px', marginLeft: '20px'}}>{bodyText}</div>

            <Modal
                show={showModal}
                onHide={handleModalClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Edit ToDo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                        type="text"
                        autoFocus
                        onChange={(event) => setTodoTitle(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Enter ToDo Information</Form.Label>
                        <Form.Control 
                        as="textarea" 
                        rows={3} 
                        onChange={(event) => setTodoText(event.target.value)}
                        />
                    </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleModalClose}>
                    Cancel
                </Button>
                <Button variant="primary" type='submit' onClick={handleEditSave}>
                    Edit ToDo
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}