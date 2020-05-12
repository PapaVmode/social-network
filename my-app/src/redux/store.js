// import profileReducer from "./profile-reducer";
// import dialogsReducer from './dialogs-reducer';
// import sidebarReducer from './sidebar-reducer';


// let store = {
//   _state: {
//     profilePage: {
//       posts: [
//         { id: 1, message: 'Hi', like: 32 },
//         { id: 2, message: 'Hello World', like: 44 },
//         { id: 3, message: 'How do you do?', like: 56 },
//       ],
//       newPostText: '',
//     },

//     dialogsPage: {
//       messages: [
//         { id: 1, message: 'Hi' },
//         { id: 2, message: 'Hello World' },
//         { id: 3, message: 'How do you do?' }
//       ],
//       dialogs: [
//         { id: 1, name: 'Alex' },
//         { id: 2, name: 'Veronika' },
//         { id: 3, name: 'Petr' },
//         { id: 4, name: 'Sasha' },
//         { id: 5, name: 'Volodya' },
//         { id: 6, name: 'Vasya' },
//       ],
//       newMessageBody: '',
//     },
//   },
//   _callSubscriber() {
//     console.log('sa');
//   },

//   getState() {
//     return this._state;
//   },
//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },

//   dispatch(action) {

//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._state.profilePage = sidebarReducer(this._state.profilePage, action);

//     this._callSubscriber(this._state);
//   }

// }


// export default store;

