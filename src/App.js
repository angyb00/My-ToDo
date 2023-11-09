import './App.css';
import ToDoCard from './ToDoCard';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { AddNewToDo, fetchTodos } from './FirebaseUtils/SaveUserFirestore';

function App() {

  const [showModal, setShowModal] = useState(false);
  const [todoTitle, setTodoTitle] = useState('');
  const [todoText, setTodoText] = useState('');
  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);
  const { state } = useLocation();
  const [todos, setTodos] = useState([]);

  const handleModalSave = () => {
    AddNewToDo(todoTitle, todoText);
    setTodos([]);
    handleModalClose();
  }

  useEffect(() => {
    fetchTodos(state.uid)
      .then(res => {
        setTodos(res);
      });
      console.log("Hellow world")

  }, [todos.length]);

  return (
    <div>
      <section className='root-header'>
        <h1>
          My To-Do
        </h1>
        <DropdownButton
          size="lg"
          title={`Hello, ${state.firstName} ${state.lastName}!`}
          className="header-button-helper"
        >
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item>Log Out</Dropdown.Item>
        </DropdownButton>
      </section>

      <div className='add-new-todo'>
        <button className='unset-helper' onClick={handleModalShow}>
          <h3>
              <i class="bi bi-clipboard-plus-fill"></i>
              <span style={{marginLeft: "10px"}}>Add New To-Do</span>
          </h3>
        </button>
      </div>

      <div className='row-container'>
          {todos.map((res) => {
            return (
              <ToDoCard 
                title={res.data().todo_title}
                bodyText={res.data().todo_text}
                id={res.id}
              />
            )
          })}
      </div>

      <Modal
        show={showModal}
        onHide={handleModalClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new ToDo</Modal.Title>
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
          <Button variant="primary" type='submit' onClick={handleModalSave}>
            Add new ToDo
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
