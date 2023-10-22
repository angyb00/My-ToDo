import './App.css';
import ToDoCard from './ToDoCard';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';


function App() {
  return (
    <div>
      <section className='root-header'>
        <h1>
          My To-Do
        </h1>
        <span style={{fontSize: 20, marginRight: "20px"}}>Hello, John Doe</span>
      </section>

      <div className='add-new-todo'>
        <h3>
            <i class="bi bi-clipboard-plus-fill"></i>
            <span style={{marginLeft: "10px"}}>Add New To-Do</span>
        </h3>
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
    </div>
  );
}

export default App;
