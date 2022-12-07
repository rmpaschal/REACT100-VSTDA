import React from "react";
import Todo from './Todo.jsx';


const Output = (props) => {
    return (
        <div className="col-lg-8">
            <div className="card">
                <h8 className="card-header">View Todo Items:</h8>
                <div className="card-body" name="outputDiv">
                    {
                        props.list.length === 0 ?
                            <div className="mt-3">
                            <h5><strong> Welcome to Very Simple Todo App</strong></h5>
                            <p> Get started now by adding a new todo to the left</p>                    
                </div>
                :
                <ul className="list-item">{props.list.map((listItem, index) => <Todo key={index} index={index} description={listItem.description} priority={listItem.priority} updatetodoList={props.updatetodoList} handleDeleteButton={props.handleDeleteButton}></Todo>)}</ul>
                }
                </div>
            </div>
        </div>
    );
}
export default Output;
