const ADD_MESSAGE = 'ADD-MESSAGE'
const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT'

let initialState = {
    profilePage: {
        allMessages: [
            {
                id: '1',
                from: 'Elena',
                to: 'Alice',
                message: 'Hello. how are you?',
                date: '25.06.20'
            },
            {
                id: '2',
                from: 'Alice',
                to: 'Elena',
                message: 'Hello. I am fine. What about you?',
                date: '25.06.20'
            },
            {
                id: '3',
                from: 'Elena',
                to: 'Tamara',
                message: 'Hello. how are you?',
                date: '26.06.20'
            }
        ],

        myUsers: [
            {id: '1', name: 'Elena'},
            {id: '2', name: 'Alice'},
            {id: '3', name: 'Sergei'},
            {id: '4', name: 'Irina'},
            {id: '5', name: 'Tamara'}
        ]
    },
    newMessageText: ''
}

const messageReducer = (state = initialState, action) => {
    let stateCopy
    switch (action.type) {

        case ADD_MESSAGE: {
            stateCopy = {
                ...state,
                newMessageText: ''
            }
            stateCopy.profilePage.allMessages = [...state.profilePage.allMessages,

                {
                    id: '5',
                    from: 'new',
                    to: 'new',
                    message: state.newMessageText,
                    date: '20.06.20'
                }]

            return stateCopy
            break
        }
        case ADD_NEW_MESSAGE_TEXT: {
            stateCopy = {
                ...state,
                newMessageText: action.newMessage
            }

            return stateCopy
            break}
        default:
            return state;
    }

    return state
}

export const addMessageActionCreator = () => {

    return (
        {
            type: ADD_MESSAGE
        }
    )
}
export const addNewMessageTextActionCreator = (text) => {
    return (
        {
            type: ADD_NEW_MESSAGE_TEXT,
            newMessage: text

        }
    )
}

export default messageReducer