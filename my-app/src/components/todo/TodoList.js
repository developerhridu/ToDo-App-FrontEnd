import React from 'react';
import {useSelector} from "react-redux";
import {ToDoDeleteAlert} from "./ToDoDeleteAlert";
import {ToDoEditAlert} from "./ToDoEditAlert";

const TodoList = () => {

    const todoItems = useSelector((state) => state.todo.value)
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <table className="table">
                        {/*<thread>*/}
                        {/*    */}
                        {/*</thread>*/}
                        <tr>
                            <th>No</th>
                            <th>Task Name</th>
                            <th>Edit</th>
                            <th>Remove</th>
                        </tr>
                        <tbody>
                        {
                            todoItems.map((item, i) =>{
                                return(
                                    <tr>
                                        <td>{i}</td>
                                        <td>{item}</td>
                                        <td><button onClick = {() => {ToDoEditAlert(i)}} className="btn btn-sm btn-dark">Edit</button></td>
                                        <td><button onClick = {() => {ToDoDeleteAlert(i)}} className="btn btn-sm btn-danger">Remove</button></td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default TodoList;