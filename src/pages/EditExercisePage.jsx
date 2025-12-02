import "../App.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const EditExercisePage = ({ exerciseToEdit }) => {
    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const navigate = useNavigate();

    const editExercise = async () => {
        const editedExercise = { name, reps, weight, unit, date };
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
          method: 'PUT',
          body: JSON.stringify(editedExercise),
          headers: { 'Content-Type': 'application/json'}
        });
        
        if(response.status === 200){
          alert("Successfully updated the exercise!");
        } else {
          alert(`Failed to update the exercise, status code = ${response.status}`);
        }
        navigate("/");
      };

    return (
        <div>
            <h2>Edit Exercise</h2>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Reps</th>
                        <th>Weight</th>
                        <th>Unit</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input
                            type="text"
                            placeholder = "Enter exercise's name here"
                            value = {name}
                            onChange={e => setName(e.target.value)}/></td>

                        <td><input
                            type="number"
                            placeholder = "Enter reps here"
                            value = {reps}
                            onChange={e => setReps(Number(e.target.value))}/></td>

                        <td><input
                            type="number"
                            placeholder = "Enter weight here"
                            value = {weight}
                            onChange={e => setWeight(Number(e.target.value))}/></td>

                        <td><select
                            id="unit"
                            value={unit}
                            onChange={e => setUnit(e.target.value)}>
                            <option value="kgs">kgs</option>
                            <option value="lbs">lbs</option>
                            </select></td>

                        <td><input
                            type="text"
                            placeholder = "MM-DD-YY"
                            value = {date}
                            onChange={e => setDate(e.target.value)}/></td>
                    </tr>
                </tbody>
            </table>

            <button onClick={editExercise}>Update</button>
        </div>
    );
}

export default EditExercisePage