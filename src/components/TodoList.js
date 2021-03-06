import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, removeTodo, toggleTodo } from '../actions/todoActions';

class TodoList extends Component {
    componentWillMount = () => {
        this.props.fetchTodos();
    };

    onItemDestroy = (id) => () => {
        this.props.removeTodo(id);
    };

    onItemToggle = (id) => () => {
        this.props.toggleTodo(id);
    };

    render() {
        if (!this.props.todos) {
            return 'loading..';
        }

        return (
            <ul className="todo-list">
                {/* <!-- These are here just to show the structure of the list items --> */}
                {/* <!-- List items should get the class `editing` when editing and `completed` when marked as completed --> */}
                {this.props.todos.map(todo => (
                    <li className={todo.checked && "completed"} key={todo.id}>
                        <div className="view">
                            <input className="toggle" type="checkbox" checked={todo.checked} onClick={this.onItemToggle(todo.id)} />
                            <label>{todo.text}</label>
                            <button className="destroy" onClick={this.onItemDestroy(todo.id)}></button>
                        </div>
                        <input className="edit" value="Create a TodoMVC template" />
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos.items,
});

export default connect(mapStateToProps, { fetchTodos, removeTodo, toggleTodo })(TodoList);
