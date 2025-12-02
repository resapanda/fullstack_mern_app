import "../App.css"
import Edit from "./Edit";
import Delete from "./Delete";

function MakeRow({exercise, onEdit, onDelete}) {
  return (
    <tr>
      <td>{exercise.name}</td>
      <td>{exercise.reps}</td>
      <td>{exercise.weight}</td>
      <td>{exercise.unit}</td>
      <td>{exercise.date}</td>
      <td><Edit exercise={exercise} onEdit={onEdit}></Edit></td>
      <td><Delete exercise={exercise} onDelete={onDelete}></Delete></td>
    </tr>
  );
  }
  
  export default MakeRow;