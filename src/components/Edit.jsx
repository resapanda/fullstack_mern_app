import "../App.css"
import { LiaEdit } from "react-icons/lia";

function Edit ({exercise, onEdit}){
    return (
        <div>
            <LiaEdit
                onClick={() => onEdit(exercise)}
            />
        </div>
     );
}

export default Edit;