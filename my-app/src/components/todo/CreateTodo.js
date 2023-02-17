import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {AddToDo} from "../../redux/state/todo/todoSlice";

// taskInput.current.value = undefined;
const CreateTodo = () => {

    const dispatch = useDispatch();
    const taskInput = useRef();
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10">
                    <input ref={taskInput} placeholder="Task Name" type="text" className="form-control"/>
                </div>
                <div className="col-md-2">
                    <button onClick={() =>dispatch(AddToDo(taskInput.current.value))} className="btn btn-primary">Add ToDo</button>
                </div>
            </div>
            
        </div>
    );
};

export default CreateTodo;