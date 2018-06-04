import { FETCH_TODOS, CREATE_TODO } from "./types";

export const fetchTodos = () => dispatch => {
    dispatch({
        type: FETCH_TODOS,
        payload: [
            { id: 1, text: 'hello 1', checked: false },
            { id: 2, text: 'hello 2', checked: false },
            { id: 3, text: 'hello 3', checked: true },
        ],
    });
};

export const createTodo = text => ({
    type: CREATE_TODO,
    payload: text,
});
