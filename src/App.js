import './App.css';
import ToDoCard from './ToDoCard';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


function App() {

  const [showModal, setShowModal] = useState(false);
  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <div>
      <section className='root-header'>
        <h1>
          My To-Do
        </h1>
        <span style={{fontSize: 20, marginRight: "20px"}}>Hello, John Doe</span>
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
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
