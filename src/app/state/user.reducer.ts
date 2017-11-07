import { User } from '../user/user/user';

export interface Action {
    type: string;
    payload: any;
}

export interface State {
    user: User;
}

const initialState: State = {
    user: {},
};


export function userReducer(state = [], action: Action) {
    switch (action.type) {
        case 'LOAD_USER':
            // console.dir(action.payload);
            return action.payload;
        default: {
            return state;
        }
    }
}
