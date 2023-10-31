import './App.css';
import ToDoCard from './ToDoCard';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';


function App() {

  const [showModal, setShowModal] = useState(false);
  const [todoTitle, setTodoTitle] = useState('');
  const [todoText, setTodoText] = useState('');
  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);
  const state = useLocation();
  const { firstName, lastName } = state; 
  let name1 = "";
  let name2 = "";

  return (
    <div>
      <section className='root-header'>
        <h1>
          My To-Do
        </h1>
        <span style={{fontSize: 20, marginRight: "20px"}}>Hello, {name1} {name2}</span>
      </section>

      <div className='add-new-todo'>
        <button style={{all: "unset"}} onClick={handleModalShow}>
          <h3>
              <i class="bi bi-clipboard-plus-fill"></i>
              <span style={{marginLeft: "10px"}}>Add New To-Do</span>
          </h3>
        </button>
      </div>

      <div className='row-container'>
          <ToDoCard/>
          <ToDoCard/>
          <ToDoCard/>
          <ToDoCard/>
          <ToDoCard/>
          <ToDoCard/>
          <ToDoCard/>
          <ToDoCard/>
          <ToDoCard/>
          <ToDoCard/>
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
          <Button variant="primary" onClick={handleModalClose}>
            Add new ToDo
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
