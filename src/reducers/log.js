const initialState = {
    mood:[],
    note:'',

};

export default function reducer(state = initialState, action) {
    if (action.type === '') {
        return Object.assign({}, state, {
            mood: 'okay'
        });
    } else {
        return state;
    }
}

