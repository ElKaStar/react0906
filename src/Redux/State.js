import contentReducer from "./content-reducer";
import messageReducer from "./message-reducer";


let store = {
    _state: {
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

        myPosts: [
            {
                id: '1',
                from: 'Elena',
                message: 'It is first post',
                date: '25.06.20',
                like: '25'
            },
            {
                id: '2',
                from: 'Alice',
                message: 'Today is funny day',
                date: '25.06.20',
                like: '28'
            },
            {
                id: '3',
                from: 'Elena',
                message: 'Today is boring day',
                date: '26.06.20',
                like: '8'
            }
        ],
        sidebar: {},
        newPostText: 'enter here',
        newMessageText: ''

    },
    getState() {
      return this._state
    },
    dispatch(action) {

      this._state = contentReducer(this._state,action)
      this._state = messageReducer(this._state,action)
      this.rerenderTree(this._state)

    },
    rerenderTree() {
        console.log('state has been changed')
    },


    subscribe(observer) {
        this.rerenderTree = observer
    }

}




export default store