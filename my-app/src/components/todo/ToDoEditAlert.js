import Swal from "sweetalert2";
import {EditToDo} from "../../redux/state/todo/todoSlice";
import store from "../../redux/store/store";

export function ToDoEditAlert(i, item){
    Swal.fire({
        title: 'Update Task Name',
        input: 'text',
        inputValue: item,
        inputValidator: (value) => {
            if (value){
                store.dispatch(EditToDo({index: i,task: value}))
            }
        }

    })
}