import React, {Component} from "react";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priority: 1,
            description: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange(e) {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handlePriorityChange() {

    }

    render() {
        return (
            <div className="col-lg-4">
                <div className="card">
                    <h7 className="card-header bg-muted">Add New Todo:</h7>
                    <div className="mt-4 ml-2">
                        <label><strong>I want to...</strong></label>
                    </div>
                    <div className="mx-1">
                    <textArea className="create-todo-text" name="description" onChange={this.handleInputChange} value={this.state.description} />

                    </div>
                    <div className="card-block">
                        <div className="p-2">
                            <select name="priority" className="col-lg-12 create-todo-priority" onChange={this.handleInputChange} value={this.state.priority}>
                                <option>Select a priority...</option>
                                <option value="1">Low Priority</option>
                                <option value="2">Medium Priority</option>
                                <option value="3">High Priority</option>
                            </select>
                        </div>
                        <div className="card-footer ml-4 bg-muted">
                            <button className="create-todo btn btn-success btn-block w-100" name="create-todo" onClick={() => this.props.addTodoHandler(this.state)}>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );

        }
    }
    export default Input;