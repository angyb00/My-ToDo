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
      </section>
      <div>
        
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
