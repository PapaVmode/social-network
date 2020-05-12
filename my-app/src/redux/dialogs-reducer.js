const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let inititalState = {
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hello World' },
    { id: 3, message: 'How do you do?' }
  ],
  dialogs: [
    { id: 1, name: 'Alex' },
    { id: 2, name: 'Veronika' },
    { id: 3, name: 'Petr' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Volodya' },
    { id: 6, name: 'Vasya' },
  ],
  newMessageBody: '',
};

const dialogsReducer = (state = inititalState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: state.messages.length + 1, message: body }]
      };

    default:
      return state;
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default dialogsReducer;