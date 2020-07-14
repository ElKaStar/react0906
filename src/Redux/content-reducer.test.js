import contentReducer, {addPostActionCreator} from "./content-reducer";



    let state = {
        myPosts: [
            {id: '1', from: 'Elena', message: 'It is first post', date: '25.06.20', like: '25'},
            {id: '2', from: 'Elena', message: 'It is first post', date: '25.06.20', like: '25'},
            {id: '3', from: 'Elena', message: 'It is first post', date: '25.06.20', like: '25'},
            {id: '4', from: 'Elena', message: 'It is first post', date: '25.06.20', like: '25'},
            {id: '5', from: 'Elena', message: 'It is first post', date: '25.06.20', like: '25'},
            {id: '6', from: 'Elena', message: 'It is first post', date: '25.06.20', like: '25'},
            {id: '7', from: 'Elena', message: 'It is first post', date: '25.06.20', like: '25'},
            {id: '8', from: 'Elena', message: 'It is first post', date: '25.06.20', like: '25'},
            {id: '9', from: 'Elena', message: 'It is first post', date: '25.06.20', like: '25'},
            {id: '10', from: 'Elena', message: 'It is first post', date: '25.06.20', like: '25'},
    ]
    }
it ('new post should be added', () => {
    let action =  addPostActionCreator("hello it is new post")
    let newState = contentReducer(state, action)
    expect(newState.myPosts.length).toBe(11)

})

it ('message should be correct', () => {
    let action =  addPostActionCreator("hello it is new post")
    let newState = contentReducer(state, action)

    expect(newState.myPosts[10].message).toBe("hello it is new post")
})

it ('message should be correct', () => {

    let newState = contentReducer(state, action)

    expect(newState.myPosts[10].message).toBe("hello it is new post")
})