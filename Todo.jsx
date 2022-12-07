import React, {Component} from "react";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            createTodoText: this.props.description,
            priority: this.props.priority,
            isEditing: false,
            updateDesc: ""

        }
        this.highPriority = this.highPriority.bind(this)
        this.onEditClick = this.onEditClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSavebutton = this.handleSavebutton.bind(this)
        this.handleDelete = this.handleDelete.bind(this)

    }
    highPriority() {
        if(this.props.priority == 1) {
            return "alert alert-success"

        }
        else if (this.props.priority == 2) {
            return "alert alert-warning"

        }
        else (this.props.priority == 3); {
            return "alert alert-danger"
        };
    }
    onEditClick() {
    this.setState({ isEditing: !this.state.isEditing });

}
handleInputChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    }, console.log(this.state.description))
}

handleSavebutton() {
    var newObj = {
        description: thid.state.description,
        priority: this.state.priority
    }
    this.props.updatetodoList(newObj, this.props.index);
    this.onEditClick();
}

handleDelete(){
    this.props.handleDeleteButton(this.props.index);
}

render() {
    return (
        (!this.state.isEditing) ?
        <div className="container col-lg-12">
            <div>
                <li className={this.updatetodoList}>{this.state.description}
                <input className="checkBox pull-left"  id="checkBox" type="checkbox"></input>
                <button className="pull-right ml-2 delete-todo" name="delete-todo" type="button"><span className="glyphicon glyphicon-trash" onClick={this.handleDelete}></span></button>
                <button className="pull-right edit-todo" name="edit-todo" type="button"><span className="glyphicon glyphicon-edit" onClick={this.onEditClick}></span></button>
                </li>

            </div>
        </div>
        :
        <div className="editForm">
            <label>
                <textarea name='create-todo-text' id="edit" className="update-todo-text" onChange={this.handleInputChange} />
            </label>
            <label>
                <strong>Priority</strong>
                </label>
                <select name='create-todo-priority' id='priority' className="update-todo-priority btn-block" placeholder="Select a Priority" onChange={this.handleInputChange}>
                    <option value='1'>Low Priority</option>
                    <option value="2">Medium Priority</option>
                    <option value="3">High Priority</option> 
                </select>
                <div className="mt-2">
                    <button name='update-todo' type='submit' className="btn btn-success pull-right" onClick={this.handleSavebutton}>Save</button>
                </div>
                </div>
                );
    }
}

export default Todo;