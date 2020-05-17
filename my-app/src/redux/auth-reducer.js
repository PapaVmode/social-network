const SET_USER_DATA = "SET_USER_DATA";
const UNFOLLOW = "UNFOLLOW";


let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
}

export const setAuthUserData = (data) => ({ type: SET_USER_DATA, data })


export default authReducer;