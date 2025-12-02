import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EditExercisePage from './pages/EditExercisePage';
import CreateExercisePage from './pages/CreateExercisePage';
import Navigation from './components/Navigation';
import { useState } from 'react'


function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState([]);

  return (
    <div>
      <header>
        <h1>Exercise Tracker</h1>
        <p>Full Stack exercise tracker MERN app</p>
      </header>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage setExerciseToEdit={setExerciseToEdit}/>}></Route>
          <Route path="/create-exercise" element={ <CreateExercisePage />}></Route>
          <Route path="/edit-exercise" element={ <EditExercisePage exerciseToEdit={exerciseToEdit}/>}></Route>
        </Routes>
      </Router>
      <footer>
        <p>&copy; 2025 Haruka Banin</p>
      </footer>
    </div>
  )
}

export default App
