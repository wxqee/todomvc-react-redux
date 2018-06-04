import { FETCH_TODOS } from "../actions/types";

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
        default:
            return state;
    }
}
