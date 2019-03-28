const initialState = {
    password: '',
    text: '',
    background: ''
};

const truePassword = '1234';

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_NUMBER':
            return {
                ...state,
                password: state.password + action.number,
                text: state.text + '*'
            };
        case 'REMOVE_NUMBER':
            if(state.text === 'Access Granted' || state.text === 'Error') {
                return {
                    ...state,
                    password: state.password = '',
                    text: state.text = '',
                    background: state.background = ''
                }
            }
            return {
                ...state,
                password: state.password.slice(0, -1),
                text: state.text.slice(0, -1),
                background: state.background = ''
            };
        case 'ENTER_PASSWORD':
            if(state.password === truePassword) {
                return {
                    ...state,
                    background: state.background = '#239A00',
                    text: state.text = 'Access Granted'
                };
            } else {
                return {
                    ...state,
                    background: state.background = '#9a0007',
                    text: state.text = 'Error'
                };
            }
        default:
            return state;
    }
};

export default reducer;