import MakeRow from "./MakeRow";
import "../App.css"

function MakeTable({exercises, onEdit, onDelete}) {
    return (
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
                {exercises.map(exercise => <MakeRow exercise={exercise} onEdit={onEdit} onDelete={onDelete}/>)}
            </tbody>
        </table>
    );
  }
  
  export default MakeTable;