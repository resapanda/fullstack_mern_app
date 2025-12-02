import "../App.css"
import { RiDeleteBin5Line } from "react-icons/ri";

function Delete ({exercise, onDelete}){
    return (
        <div>
            <RiDeleteBin5Line
                onClick={() => onDelete(exercise._id)}
            />
        </div>
     );
}

export default Delete;