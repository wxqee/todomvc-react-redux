import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTodo } from "../actions/todoActions";

class TodoForm extends Component {
    state = {
        text: '',
    };

    input = null;

    onSubmit = (e) => {
        e.preventDefault();
        this.props.createTodo(this.state.text);
        this.input.value = '';
    };

    onChange = (e) => {
       this.setState({
           text: e.target.value,
       });
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    ref={dom => (this.input = dom)}
                    className="new-todo"
                    placeholder="What needs to be done?"
                    value={this.state.text}
                    onChange={this.onChange}
                    autoFocus
                />
            </form>
        );
    }
}

export default connect(null, { createTodo })(TodoForm);
