const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: 'Hi', like: 32 },
    { id: 2, message: 'Hello World', like: 44 },
    { id: 3, message: 'How do you do?', like: 56 },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        message: state.newPostText,
        like: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })


export default profileReducer;