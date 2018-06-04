import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {
    todos: [],
    newTodo: {},
};

const middlewares = [thunk];

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension && window.devToolsExtension(),
));

export default store;
