import {CREATE_TODO, FETCH_TODOS, REMOVE_TODO } from "../actions/types";

const initialState = {
    items: [],
    newItem: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_TODOS:
            return {
                ...state,
                items: action.payload,
            };
        case CREATE_TODO:
            const id = state.items.length + 1;
            const newItem = {
                id,
                text: action.payload,
                checked: false,
            };
            state.items.unshift(newItem);

            return {
                ...state,
                items: [...state.items], // Have to change items as reference change.
                newItem,
            };
        case REMOVE_TODO:
            const items = state.items.filter(item => item.id !== action.payload);
            return {
                ...state,
                items,
            };
        default:
            return state;
    }
}
