import "../App.css"
import { Link, useNavigate } from 'react-router-dom';
import MakeTable from '../components/MakeTable';
import { useEffect, useState } from 'react'


function HomePage({setExerciseToEdit}) {
    const [exercises, setExercises] = useState([]);
    const navigate = useNavigate();

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const exercises = await response.json();
        setExercises(exercises);
    }

    useEffect(() => {
        loadExercises(); 
    }, []);

    const onEdit = async exerciseToEdit => {
        setExerciseToEdit(exerciseToEdit);
        navigate("/edit-exercise");
    }

    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
          setExercises(exercises.filter(s => s._id !== _id));
        } else {
          console.error(`Failed to delete exercise with id = ${_id}, status code = ${response.status}`)
        }
      }

    return (
        <div>
            <MakeTable exercises={exercises} onEdit={onEdit} onDelete={onDelete}></MakeTable>
            <button><Link to="/create-exercise">Add exercises</Link></button>
        </div>
    );
}

export default HomePage